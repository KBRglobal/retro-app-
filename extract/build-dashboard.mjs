// Build the cost dashboard from the retro-cost workflow agent transcripts (avoids notification
// truncation). Extracts each session's StructuredOutput object, dedupes by day, aggregates.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const WF = process.argv[2] || "/Users/claude/.claude/projects/-Users-claude/6ddfc163-ca85-4885-9c68-d16fe7cf602a/subagents/workflows/wf_41cd0469-614";
const OUT_JSON = resolve("/Users/claude/Documents/mykeyz-retro/extract/session-costs.json");
const OUT_MD = resolve("/Users/claude/Documents/mykeyz-retro/COST-DASHBOARD.md");

// find an object that looks like our session result, anywhere in a parsed JSON value
function findCost(v) {
  if (!v || typeof v !== "object") return null;
  if (v.costByMarket && v.day && (v.teamEquivHours != null)) return v;
  for (const k of Object.keys(v)) { const r = findCost(v[k]); if (r) return r; }
  return null;
}

const files = readdirSync(WF).filter((f) => f.endsWith(".jsonl"));
const byDay = {};
for (const f of files) {
  let found = null;
  for (const line of readFileSync(resolve(WF, f), "utf8").split("\n")) {
    if (!line.trim() || !line.includes("costByMarket")) continue;
    try { const r = findCost(JSON.parse(line)); if (r) found = r; } catch {}
  }
  if (found) {
    // dedupe: keep the entry; if a day appears twice (multi-session same day), keep both via key
    const key = found.day + "|" + (found.teamEquivHours);
    byDay[key] = found;
  }
}
const sessions = Object.values(byDay).sort((a, b) => String(a.day).localeCompare(String(b.day)));

const MK = ["Pakistan", "Ukraine", "Dubai", "Israel", "US"];
const sum = Object.fromEntries(MK.map((m) => [m, [0, 0]]));
let hours = 0, days = 0;
const disc = {};
for (const s of sessions) {
  hours += s.teamEquivHours || 0;
  days += s.personDays || 0;
  for (const m of MK) { sum[m][0] += s.costByMarket?.[m]?.[0] || 0; sum[m][1] += s.costByMarket?.[m]?.[1] || 0; }
  for (const w of (s.disciplineWork || [])) disc[w.discipline] = (disc[w.discipline] || 0) + (w.hours || 0);
}
const months = +(days / 22).toFixed(1);
const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");
const range = (a) => `${usd(a[0])} – ${usd(a[1])}`;

writeFileSync(OUT_JSON, JSON.stringify({ sessionDays: sessions.length, totalTeamEquivHours: Math.round(hours),
  totalPersonDays: Math.round(days), totalPersonMonths: months, disciplineHours: disc, totalCostByMarket: sum,
  sessions }, null, 2));

// markdown dashboard
let md = `# MyKeyz — Human-Build Cost (retrospective)\n\n`;
md += `> What MyKeyz would have cost a **real human team** to build by hand, from the git history.\n`;
md += `> Method: the \`commit-human-cost\` skill — reuse/copy-paste discount, 3.5h deep-work/day, per-discipline In-House-loaded rates, session-grouped. Counterfactual upper-bound, not an exact claim.\n\n`;
md += `**Days analyzed:** ${sessions.length} work-sessions  ·  **Effort:** ${Math.round(hours).toLocaleString()} team-equiv hours = ${Math.round(days)} person-days = ${months} person-months\n\n`;
md += `## Total build cost — In-House loaded, all 5 markets\n\n`;
md += `| Market | Total |\n|---|---|\n`;
for (const m of MK) md += `| ${m} | **${range(sum[m])}** |\n`;
md += `\n## Effort by discipline (team-equiv hours)\n\n| Discipline | Hours |\n|---|---|\n`;
for (const [d, h] of Object.entries(disc).sort((a, b) => b[1] - a[1])) md += `| ${d} | ${Math.round(h)} |\n`;
md += `\n## Daily timeline — who worked, what they did\n\n`;
for (const s of sessions) {
  md += `### ${s.day}  ·  ${s.teamEquivHours}h (${s.personDays} person-days)  ·  Dubai ${range(s.costByMarket?.Dubai||[0,0])} / US ${range(s.costByMarket?.US||[0,0])}\n`;
  for (const w of (s.disciplineWork || [])) md += `- **${w.discipline}** ${w.hours}h — ${w.did}\n`;
  md += `\n`;
}
writeFileSync(OUT_MD, md);
console.log(`extracted ${sessions.length} session-days from ${files.length} transcripts`);
console.log(`effort: ${Math.round(hours)}h = ${Math.round(days)} person-days = ${months} person-months`);
for (const m of MK) console.log(`  ${m.padEnd(9)} ${range(sum[m])}`);
console.log(`\nwrote ${OUT_MD}`);
