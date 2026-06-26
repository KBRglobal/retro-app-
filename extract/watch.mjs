// Live recompute — GitHub-aware.
// The moment you push to GitHub (from anywhere), this detects it on its own:
//   • polls every repo with `git fetch` on an interval, and
//   • also watches the local .git/logs/HEAD for instant local-commit detection.
// On any new commit → re-runs extract+estimate → the board recomputes cost + human-time.
// No manual step: you commit, it knows.
import { watch, existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG = JSON.parse(readFileSync(resolve(__dirname, "config.json"), "utf8"));
const POLL_MS = 45000; // how often to check GitHub

function resolveRef(path) {
  for (const ref of ["origin/HEAD", "origin/main", "origin/master"]) {
    try { execFileSync("git", ["-C", path, "rev-parse", "--verify", "--quiet", ref], { stdio: "ignore" }); return ref; }
    catch { /* next */ }
  }
  return "HEAD";
}

function refresh(reason) {
  try {
    execFileSync("node", [resolve(__dirname, "extract.mjs")], { stdio: "ignore" });
    execFileSync("node", [resolve(__dirname, "estimate.mjs")], { stdio: "ignore" });
    const ds = JSON.parse(readFileSync(resolve(__dirname, "..", "web", "src", "data.json"), "utf8"));
    const m = ds.summary.moneyByMarket.Dubai;
    console.log(`[${new Date().toLocaleTimeString()}] recomputed (${reason}) → ${ds.summary.totalCommits} commits · ${ds.summary.teamEquivMonths} person-months · $${m.teamCost.toLocaleString()} Dubai`);
  } catch (e) {
    console.error("refresh failed:", e.message);
  }
}

let timer = null;
const schedule = (reason) => { clearTimeout(timer); timer = setTimeout(() => refresh(reason), 1200); };

const lastSha = {};
function pollGitHub() {
  for (const r of CONFIG.repos) {
    try {
      execFileSync("git", ["-C", r.path, "fetch", "--quiet", "origin"], { stdio: "ignore", timeout: 60000 });
      const sha = execFileSync("git", ["-C", r.path, "rev-parse", resolveRef(r.path)], { encoding: "utf8" }).trim();
      if (lastSha[r.id] && lastSha[r.id] !== sha) {
        console.log(`  ↳ GitHub: new commit in ${r.id}`);
        schedule(`github:${r.id}`);
      }
      lastSha[r.id] = sha;
    } catch { /* offline / transient — skip this cycle */ }
  }
}

console.log(`Retro — live watch (GitHub-aware). ${CONFIG.repos.length} repos, polling every ${POLL_MS / 1000}s. Push anywhere → board recomputes.`);
refresh("startup");
// instant local detection
for (const r of CONFIG.repos) {
  const head = resolve(r.path, ".git", "logs", "HEAD");
  if (existsSync(head)) watch(head, () => schedule(`local:${r.id}`));
  try { lastSha[r.id] = execFileSync("git", ["-C", r.path, "rev-parse", resolveRef(r.path)], { encoding: "utf8" }).trim(); } catch {}
}
// GitHub polling
setInterval(pollGitHub, POLL_MS);
