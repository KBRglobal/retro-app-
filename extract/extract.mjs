// MyKeyz Retro — git history extraction engine
// Pulls every MyKeyz-related repo into one structured dataset.
// 100% grounded in git: commits, files, lines, timestamps, disciplines.
// No cost/time logic here — this layer is pure fact, independent of the rate research.

import { execFileSync } from "node:child_process";
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "web", "src", "data.json");

// --- Project config (reusable: point this at any project's repos) ----------
const CONFIG = JSON.parse(readFileSync(resolve(__dirname, "config.json"), "utf8"));
const REPOS = CONFIG.repos;

// --- Discipline inference from touched files -----------------------------
// Each rule: if any changed file matches, the commit carries that discipline.
// Ordered specific -> general. A commit can carry several disciplines (real).
const DISCIPLINE_RULES = [
  { key: "QA", test: (f) => /\.(test|spec)\.[tj]sx?$/.test(f) || /(^|\/)(tests?|__tests__|e2e)\//.test(f) },
  { key: "AI/ML", test: (f) => /(vision|anthropic|manus|\bai\b|llm|prompt|embedding)/i.test(f) },
  { key: "Design", test: (f) => /(theme|tokens|\.css$|\.scss$|figma|brand|design|assets\/.*\.(png|svg|jpg|lottie))/i.test(f) },
  { key: "DevOps", test: (f) => /(dockerfile|\.ya?ml$|railway|\.github\/|nginx|wrangler|fly\.toml|infra)/i.test(f) },
  { key: "Product", test: (f) => /(^|\/)(docs|specs?)\//i.test(f) || /\.md$/.test(f) },
  { key: "Marketing", test: (f) => /(marketing|landing|site\/|hero)/i.test(f) },
  { key: "Backend", test: (f) => /(backend|server|api|\/db\/|migration|schema|drizzle|prisma|route)/i.test(f) },
  { key: "Frontend", test: (f) => /\.(tsx|jsx)$/.test(f) || /(mobile|app\/|components?\/|screens?\/)/i.test(f) },
];

function disciplinesFor(files) {
  const set = new Set();
  for (const f of files) {
    for (const rule of DISCIPLINE_RULES) {
      if (rule.test(f.path)) set.add(rule.key);
    }
  }
  return [...set];
}

const SEP = ""; // unit separator, safe inside commit subjects
const REC = "__C__";

// Resolve the ref to read commits from. Prefer the GitHub remote-tracking branch so a
// `git fetch` is enough to reflect what's on GitHub — no need to touch the working tree.
export function resolveRef(path) {
  for (const ref of ["origin/HEAD", "origin/main", "origin/master"]) {
    try {
      execFileSync("git", ["-C", path, "rev-parse", "--verify", "--quiet", ref], { stdio: "ignore" });
      return ref;
    } catch { /* try next */ }
  }
  return "HEAD";
}

function extractRepo(repo) {
  if (!existsSync(resolve(repo.path, ".git"))) {
    console.warn(`! skipping ${repo.id} (no .git at ${repo.path})`);
    return [];
  }
  const ref = resolveRef(repo.path);
  const raw = execFileSync(
    "git",
    [
      "-C", repo.path,
      "log", ref, "--no-merges", "--date=iso-strict",
      `--pretty=format:${REC}%H${SEP}%aI${SEP}%an${SEP}%s`,
      "--numstat",
    ],
    { encoding: "utf8", maxBuffer: 1024 * 1024 * 256 }
  );

  const commits = [];
  let cur = null;
  for (const line of raw.split("\n")) {
    if (line.startsWith(REC)) {
      if (cur) commits.push(cur);
      const [hash, date, author, subject] = line.slice(REC.length).split(SEP);
      cur = { hash, date, author, subject, repo: repo.id, files: [], insertions: 0, deletions: 0 };
    } else if (cur && line.trim()) {
      // numstat: "ins\tdel\tpath"  (ins/del are "-" for binary)
      const m = line.split("\t");
      if (m.length === 3) {
        const ins = m[0] === "-" ? 0 : parseInt(m[0], 10) || 0;
        const del = m[1] === "-" ? 0 : parseInt(m[1], 10) || 0;
        cur.files.push({ path: m[2], ins, del });
        cur.insertions += ins;
        cur.deletions += del;
      }
    }
  }
  if (cur) commits.push(cur);

  for (const c of commits) {
    c.disciplines = disciplinesFor(c.files);
    c.fileCount = c.files.length;
  }
  console.log(`  ${repo.id.padEnd(10)} ${String(commits.length).padStart(5)} commits`);
  return commits;
}

// --- Run -----------------------------------------------------------------
console.log("Extracting MyKeyz universe...");
let all = [];
for (const repo of REPOS) all = all.concat(extractRepo(repo));

// chronological
all.sort((a, b) => a.date.localeCompare(b.date));

const disciplineTotals = {};
for (const c of all) for (const d of c.disciplines) disciplineTotals[d] = (disciplineTotals[d] || 0) + 1;

const dataset = {
  generatedAt: new Date().toISOString(),
  repos: REPOS.map(({ id, label }) => ({ id, label })),
  summary: {
    totalCommits: all.length,
    firstCommit: all[0]?.date ?? null,
    lastCommit: all[all.length - 1]?.date ?? null,
    totalInsertions: all.reduce((s, c) => s + c.insertions, 0),
    totalDeletions: all.reduce((s, c) => s + c.deletions, 0),
    disciplineTotals,
  },
  commits: all,
};

writeFileSync(OUT, JSON.stringify(dataset, null, 2));
console.log(`\nWrote ${all.length} commits -> ${OUT}`);
console.log("Summary:", JSON.stringify(dataset.summary, null, 2));
