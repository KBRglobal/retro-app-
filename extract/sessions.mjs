// MyKeyz Retro — group every commit into WORK SESSIONS (the skill's anti-inflation rule).
// A session = one author's commits on one calendar day across all repos. Ramp-up / context cost
// is paid once per session, not once per commit. Output feeds the per-session cost agents.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = resolve(__dirname, "..", "web", "src", "data.json");
const OUT = resolve(__dirname, "sessions.json");

const ds = JSON.parse(readFileSync(DATA, "utf8"));
const commits = ds.commits;

// key = author + calendar day (local date portion of ISO timestamp)
const byDay = {};
for (const c of commits) {
  const day = (c.date || "").slice(0, 10);
  const key = `${day}|${c.author}`;
  (byDay[key] ||= []).push(c);
}

const sessions = Object.entries(byDay).map(([key, cs]) => {
  const [day, author] = key.split("|");
  cs.sort((a, b) => a.date.localeCompare(b.date));
  const repos = [...new Set(cs.map((c) => c.repo))];
  const disc = {};
  for (const c of cs) for (const d of (c.disciplines || [])) disc[d] = (disc[d] || 0) + 1;
  return {
    day, author,
    repos,
    commitCount: cs.length,
    insertions: cs.reduce((s, c) => s + c.insertions, 0),
    deletions: cs.reduce((s, c) => s + c.deletions, 0),
    fileCount: cs.reduce((s, c) => s + (c.files?.length || 0), 0),
    disciplineCounts: disc,
    commits: cs.map((c) => ({ hash: c.hash, repo: c.repo, subject: c.subject,
      ins: c.insertions, del: c.deletions, files: c.files?.length || 0 })),
  };
});
sessions.sort((a, b) => a.day.localeCompare(b.day));

writeFileSync(OUT, JSON.stringify(sessions, null, 2));
const totalIns = sessions.reduce((s, x) => s + x.insertions, 0);
const totalDel = sessions.reduce((s, x) => s + x.deletions, 0);
console.log(`${commits.length} commits -> ${sessions.length} work-sessions (calendar days)`);
console.log(`span: ${sessions[0]?.day} .. ${sessions[sessions.length-1]?.day}`);
console.log(`total +${totalIns.toLocaleString()} / -${totalDel.toLocaleString()}`);
console.log(`median commits/session: ${sessions.map(s=>s.commitCount).sort((a,b)=>a-b)[Math.floor(sessions.length/2)]}`);
console.log(`busiest sessions:`);
for (const s of [...sessions].sort((a,b)=>b.insertions-a.insertions).slice(0,5))
  console.log(`  ${s.day}  ${s.commitCount} commits  +${s.insertions}  repos:${s.repos.join(',')}`);
