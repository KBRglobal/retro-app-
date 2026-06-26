// MyKeyz Retro — per-commit AI analysis engine.
// For each commit, an LLM reads the change (subject + files + line stats) and estimates the
// REAL human time it would take a professional, including the things a raw LOC formula misses:
// breaks / meals (a 12h day yields ~9 focused hours), debugging & confusion (rework), code
// review by a teammate, and QA / testing. Results are cached by commit hash so re-runs only
// analyze NEW commits — that's what makes the live, every-commit pipeline cheap.
//
// Usage:
//   node extract/analyze.mjs            # analyze all commits in data.json, fill cache
//   node extract/analyze.mjs --sample   # analyze a few diverse commits and print (prototype)
//
// Key: reads ANTHROPIC_API_KEY from env. Never commit the key. In CI it comes from a secret.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = resolve(__dirname, "..", "web", "src", "data.json");
const CACHE = resolve(__dirname, "commit-analysis.json");

const MODEL = process.env.ANALYZE_MODEL || "claude-haiku-4-5-20251001";
const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) { console.error("Missing ANTHROPIC_API_KEY"); process.exit(1); }

// Bump when SYSTEM/userPrompt changes so stale cache entries are re-analyzed (never deleted).
// v3: doc/prose commits estimated as technical writing (words/day), not code-line rates.
const PROMPT_VERSION = 3;
// Per-commit diff is truncated to keep token cost bounded on huge scaffold commits.
const MAX_DIFF_CHARS = 12000;

// repo id -> local path, so we can pull the REAL diff (git show) at analysis time.
const REPO_PATHS = (() => {
  try {
    const cfg = JSON.parse(readFileSync(resolve(__dirname, "config.json"), "utf8"));
    return Object.fromEntries(cfg.repos.map((r) => [r.id, r.path]));
  } catch { return {}; }
})();

import { execFileSync } from "node:child_process";

// Pull the actual code change for a commit. Read-only (git show). Truncated for huge commits.
function commitDiff(c) {
  const path = REPO_PATHS[c.repo];
  if (!path) return "(diff unavailable: repo path not configured)";
  try {
    const out = execFileSync(
      "git",
      ["-C", path, "show", c.hash, "--format=", "--no-color", "-M",
       `--unified=2`, "--", "."],
      { encoding: "utf8", maxBuffer: 1024 * 1024 * 64 }
    );
    if (out.length <= MAX_DIFF_CHARS) return out || "(empty diff)";
    return out.slice(0, MAX_DIFF_CHARS) +
      `\n... [diff truncated at ${MAX_DIFF_CHARS} chars; total ${out.length} chars across ${c.files?.length || "?"} files]`;
  } catch (e) {
    return `(diff unavailable: ${String(e.message).slice(0, 80)})`;
  }
}

// day-of-week + hour from the commit ISO timestamp, for circadian / off-hours signal.
function whenOf(c) {
  const dt = new Date(c.date);
  const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][dt.getDay()];
  const hour = dt.getHours();
  const offHours = dt.getDay() === 5 || dt.getDay() === 6 || hour < 9 || hour >= 17;
  return { day, hour, offHours };
}

// A 12-hour shift minus meals / breaks / fatigue / distraction = 8 net productive hours.
// (Moshe's rule.) Used to turn build hours -> working days.
export const EFFECTIVE_HOURS_PER_DAY = 8;

const SYSTEM = `You are a software-development cost analyst doing a retrospective estimate of the REAL
human effort it would take a professional team to produce a given git commit from scratch —
NOT how fast an AI actually produced it. You are reading the ACTUAL DIFF, so ground every
judgment in what the code really does, not in line counts. Investor-grade: every number must be
defensible to a named formula or research finding. Neither inflated nor heroic.

You will receive: the commit subject, repo, file list with +/- lines, when it landed
(day + hour, and whether it's off-hours), and the actual unified diff (possibly truncated).

A working DAY is 8 net productive hours (a 12-hour shift minus meals, breaks, fatigue, and
ordinary distraction — those are ALREADY priced into the 8). So do NOT add separate penalties
for breaks, off-hours, or interruptions: the only multiplier on raw build time is rework.

Estimate as follows, and SHOW your reasoning only inside the JSON fields:

1. PURE FOCUS HOURS — heads-down time for a senior professional to PRODUCE this exact change
   from scratch (not merely read it).
   - CODE commits: reviewed production code lands at ~50-150 lines/focused-day for genuinely
     complex logic, far more for boilerplate/scaffold/generated code, far less for
     security/algorithmic/concurrency work. Judge from the diff's real difficulty.
   - DOCUMENTATION / PROSE commits (mostly markdown/specs/copy, not code): estimate as
     TECHNICAL WRITING / PRODUCT work, NOT engineering. A professional produces ~1,500-3,000
     words of polished, reviewed product documentation per focused day. Judge focusHours from
     the real word/content volume, and set primaryDiscipline to Product (or Design for design
     docs, Marketing is excluded). Do NOT price prose at code-line rates — that wildly inflates.

2. REWORK on focus hours:
   - reworkFactor (1.0-2.5): debugging, confusion, wrong turns, refactors, and rebuilding after
     QA finds issues. Higher for tricky logic, lower for mechanical edits.

3. TEAM & COORDINATION:
   - teamSize: how many engineers a traditional team would put on a change like this (often 1;
     2+ for broad cross-cutting work). teamComposition: the BUILD disciplines involved.
   - coordinationFactor (1.0-1.5): 1.0 if teamSize is 1; otherwise add 30-50% (Brooks, Mythical
     Man-Month) for communication overhead.

   IMPORTANT — QA is NOT counted as per-commit hours here. Build and QA are a LOOP, not a line:
   you build, QA tests, QA finds issues, you build again, QA re-tests. That build-again time is
   already captured by reworkFactor. The QA tester is a FULL-TIME team member who sits across the
   whole project (like one dedicated designer), so QA cost is added once at the project level as a
   full-time head over the project's duration — never as scattered hours on each commit. Same for
   code review. So humanHours below is BUILD effort ONLY. Just flag whether this change needed QA
   attention (qaInvolved) and design attention (designInvolved) so the project knows which
   full-time heads to staff.

Return ONLY a JSON object (no prose) with exactly these fields:
{
  "summary": string,            // one human sentence: what the diff actually does
  "primaryDiscipline": string,  // one of: Backend, Frontend, Mobile, AI/ML, Security, Design, DevOps, QA, Product, Localization (BUILD roles only — no Marketing)
  "disciplines": string[],      // all BUILD disciplines genuinely involved (never Marketing)
  "complexity": string,         // one of: trivial, routine, complex, research
  "focusHours": number,         // pure heads-down implementation hours (step 1)
  "reworkFactor": number,       // 1.0-2.5 (step 2) — INCLUDES rebuild time after QA finds issues
  "teamSize": number,           // build engineers a traditional team would assign (>=1)
  "teamComposition": string[],  // build roles on that team
  "coordinationFactor": number, // 1.0 if solo, else 1.3-1.5 (Brooks)
  "qaInvolved": boolean,        // did this change need QA attention? (drives full-time QA head)
  "designInvolved": boolean,    // did this change need design attention?
  "humanHours": number,         // BUILD effort = focusHours * reworkFactor * coordinationFactor
  "confidence": string          // low | medium | high (lower if the diff was truncated)
}`;

function userPrompt(c) {
  const files = (c.files || []).slice(0, 40).map((f) => `  +${f.ins}/-${f.del}\t${f.path}`).join("\n");
  const more = (c.files || []).length > 40 ? `\n  ...and ${(c.files.length - 40)} more files` : "";
  return `Commit: ${c.subject}
Repo: ${c.repo}
Total: +${c.insertions} / -${c.deletions} across ${(c.files||[]).length} files
Files:
${files}${more}

--- ACTUAL DIFF ---
${commitDiff(c)}`;
}

async function callClaude(c, tries = 4) {
  const body = {
    model: MODEL,
    max_tokens: 1500,
    system: SYSTEM,
    messages: [{ role: "user", content: userPrompt(c) }],
  };
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "content-type": "application/json", "x-api-key": API_KEY, "anthropic-version": "2023-06-01" },
        body: JSON.stringify(body),
      });
      if (res.status === 429 || res.status >= 500) { await sleep(1500 * (i + 1)); continue; }
      if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
      const j = await res.json();
      const text = j.content?.map((b) => b.text || "").join("") || "";
      const m = text.match(/\{[\s\S]*\}/);
      if (!m) throw new Error("no json: " + text.slice(0, 200));
      return JSON.parse(m[0]);
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(1200 * (i + 1));
    }
  }
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let idx = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (idx < items.length) { const i = idx++; out[i] = await fn(items[i], i); }
  }));
  return out;
}

function loadCache() { return existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, "utf8")) : {}; }

// ---- run ----
const ds = JSON.parse(readFileSync(DATA, "utf8"));
const allCommits = ds.commits;
const sample = process.argv.includes("--sample");
const commitIdx = process.argv.indexOf("--commit");

function showOne(c, a) {
  const team = (a.teamComposition || a.disciplines || []).join("+") || a.primaryDiscipline;
  const heads = [a.qaInvolved ? "QA" : null, a.designInvolved ? "Design" : null].filter(Boolean).join("+");
  console.log("━".repeat(78));
  console.log(`${c.hash.slice(0,7)} ${c.repo}  +${c.insertions}/-${c.deletions} (${(c.files||[]).length} files)`);
  console.log(`  "${c.subject}"`);
  console.log(`  → ${a.summary}`);
  console.log(`  ${a.primaryDiscipline} · ${a.complexity} · conf=${a.confidence}`);
  console.log(`  team: ${a.teamSize}× (${team})  coord×${a.coordinationFactor ?? 1}${heads ? `  needs full-time: ${heads}` : ""}`);
  console.log(`  focus ${a.focusHours}h × rework ${a.reworkFactor}${(a.coordinationFactor ?? 1) !== 1 ? ` × coord ${a.coordinationFactor}` : ""} = ${a.humanHours}h build`);
  console.log(`  = ${(a.humanHours/EFFECTIVE_HOURS_PER_DAY).toFixed(1)} working days  (@${EFFECTIVE_HOURS_PER_DAY}h net/day)`);
}

if (commitIdx >= 0) {
  const want = process.argv[commitIdx + 1];
  const c = allCommits.find((x) => x.hash.startsWith(want) || x.hash === want);
  if (!c) { console.error(`commit ${want} not in data.json`); process.exit(1); }
  console.log(`Analyzing commit ${want} with ${MODEL} (real diff)...\n`);
  const a = await callClaude(c);
  showOne(c, a);
  process.exit(0);
}

if (sample) {
  // pick a diverse handful: huge, tiny, medium, docs, tests
  const huge = allCommits.find((c) => c.insertions > 5000);
  const tiny = allCommits.find((c) => c.insertions > 0 && c.insertions < 15);
  const mid = allCommits.find((c) => c.insertions > 150 && c.insertions < 400);
  const docs = allCommits.find((c) => (c.disciplines || []).includes("Product") && c.insertions > 50);
  const tests = allCommits.find((c) => (c.disciplines || []).includes("QA"));
  const picks = [huge, mid, tiny, docs, tests].filter(Boolean);
  console.log(`Analyzing ${picks.length} sample commits with ${MODEL}...\n`);
  const res = await mapLimit(picks, 5, async (c) => ({ c, a: await callClaude(c) }));
  for (const { c, a } of res) showOne(c, a);
  process.exit(0);
}

// full run: incremental, cache by hash
const cache = loadCache();
// Re-analyze anything missing OR analyzed under an older prompt version (no real diff).
const todo = allCommits.filter((c) => !cache[c.hash] || cache[c.hash].promptVersion !== PROMPT_VERSION);
const stale = todo.filter((c) => cache[c.hash]).length;
console.log(`${allCommits.length} commits, ${todo.length} to analyze with ${MODEL} (${stale} stale re-analyses) ...`);
let done = 0;
await mapLimit(todo, 8, async (c) => {
  try {
    const a = await callClaude(c);
    cache[c.hash] = { ...a, hash: c.hash, repo: c.repo, date: c.date, promptVersion: PROMPT_VERSION };
    if (++done % 25 === 0) { console.log(`  ${done}/${todo.length}`); writeFileSync(CACHE, JSON.stringify(cache, null, 0)); }
  } catch (e) { console.warn(`  ! ${c.hash.slice(0,7)} failed: ${e.message.slice(0,80)}`); }
});
writeFileSync(CACHE, JSON.stringify(cache, null, 0));
console.log(`Done. Cache has ${Object.keys(cache).length} analyzed commits -> ${CACHE}`);
