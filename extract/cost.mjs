// MyKeyz Retro — aggregate cost. Reads the per-commit analysis cache and rolls it up to
// total human build effort -> working days -> cost across markets. The "retro" layer.
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cache = JSON.parse(readFileSync(resolve(__dirname, "commit-analysis.json"), "utf8"));
const NET_H_PER_DAY = 8;

// Fully-loaded senior /hour (Moshe's markets).
const RATES = { "US": 133.5, "Israel": 84.5, "Dubai": 58.5, "Ukraine": 35.5, "Pakistan": 25 };

const rows = Object.values(cache);
let hours = 0;
const byDisc = {};
for (const r of rows) {
  const h = Number(r.humanHours) || 0;
  hours += h;
  const d = r.primaryDiscipline || "Unknown";
  byDisc[d] = (byDisc[d] || 0) + h;
}
const days = hours / NET_H_PER_DAY;
const months = days / 22; // ~22 working days/month

console.log(`\nMyKeyz retro — aggregate (from ${rows.length} analyzed commits)`);
console.log("─".repeat(60));
console.log(`Total human BUILD effort : ${Math.round(hours).toLocaleString()} h`);
console.log(`= working days (@8h net)  : ${Math.round(days).toLocaleString()} days`);
console.log(`= person-months (~22d/mo) : ${months.toFixed(1)} pm`);
console.log("\nEffort by discipline (days):");
for (const [d, h] of Object.entries(byDisc).sort((a,b)=>b[1]-a[1]))
  console.log(`  ${d.padEnd(14)} ${(h/NET_H_PER_DAY).toFixed(0).padStart(5)} d`);
console.log("\nBuild cost by market (human team, fully-loaded):");
for (const [m, rate] of Object.entries(RATES))
  console.log(`  ${m.padEnd(10)} $${Math.round(hours*rate).toLocaleString()}  (@ $${rate}/h)`);
console.log("\nNote: BUILD effort only. Full-time QA/design heads + market holidays not yet added (retro layer TODO).");
