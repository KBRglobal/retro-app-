// MyKeyz — TRUE build cost (the "discovery layer" on top of the git-surviving floor).
// The retro floor (session-costs.json) prices only the code that SURVIVED in git. A real human
// team gets paid for everything git hides: the infra/integration grind, the work that was built
// then deleted, the full-time staff that sit across the whole calendar, and coordination overhead.
// This script adds those layers, each grounded and named, and re-costs across all 5 markets.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const floor = JSON.parse(readFileSync(resolve(__dirname, "session-costs.json"), "utf8"));
const AED = 3.6725;

// In-House loaded hourly [low, high] per role per market — from references/market-rates.md.
const R = {
  Pakistan: { backend:[8,14], mobile:[8,15], frontend:[5,10], designer:[5,10], qa:[4,8], devops:[7,13], pm:[6,12], ai:[10,18], security:[9,16], lead:[10,18] },
  Ukraine:  { backend:[22,33], mobile:[22,35], frontend:[15,28], designer:[15,28], qa:[10,20], devops:[20,32], pm:[18,30], ai:[28,45], security:[22,38], lead:[28,45] },
  Dubai:    { backend:[38,54], mobile:[38,56], frontend:[28,50], designer:[25,45], qa:[20,35], devops:[32,50], pm:[35,55], ai:[45,70], security:[38,54], lead:[32,55] },
  Israel:   { backend:[55,75], mobile:[55,80], frontend:[31,36], designer:[35,55], qa:[25,40], devops:[45,65], pm:[50,75], ai:[65,95], security:[47,95], lead:[31,103] },
  US:       { backend:[85,110], mobile:[90,115], frontend:[65,95], designer:[55,85], qa:[45,70], devops:[75,105], pm:[75,110], ai:[100,140], security:[83,105], lead:[95,170] },
};
const MK = ["Pakistan", "Ukraine", "Dubai", "Israel", "US"];

// map retro discipline -> rate role
const ROLE = { Mobile:"mobile", Backend:"backend", Frontend:"frontend", Design:"designer",
  Product:"pm", "Product/docs":"pm", QA:"qa", DevOps:"devops", Security:"security",
  "AI/ML":"ai", "AI-ML":"ai" };

// ---- 1. SURVIVING-BUILD hours (the floor), corrected for the infra/integration grind ----
const hours = { ...floor.disciplineHours };
// Infra/integration grind: the floor gave DevOps 89h for standing up 7 Railway services,
// Cloudflare Workers/Pages/R2, custom domains + DNS verification, and DB migrations across
// repos. A real ops/backend effort here is multiples of that. Add it explicitly.
const INFRA = { DevOps: 361, Backend: 260 }; // 89->450 devops ; +260 backend API/DB plumbing
for (const [k, add] of Object.entries(INFRA)) hours[k] = (hours[k] || 0) + add;

// ---- 2. DEAD-END / REWORK factor (work built then superseded, never surviving in git) ----
// MyKeyz scrapped & rebuilt heavily: Manus vision engine (built, eval'd, thrown), walk-and-talk
// (built then disabled), ~9 Figma<->app redesign rounds, full design redo from scratch, repair
// prices added then removed, branch consolidation that nuked everything. git prices deletions at
// 20%; the BUILD of that deleted work was 100% paid. 0.45 = 45% rework on top of surviving build.
const REWORK = 0.45;

// ---- 3. BROOKS coordination on a large parallel team (793 pd over a ~7-week calendar needs
// ~15-20 builders in parallel -> real coordination cost). Applied to build+rework. ----
const BROOKS = 1.35;

// ---- 4. FULL-TIME SUPPORT STAFF across the calendar (salary, not per-commit): an eng lead,
// PMs, a design lead and a QA lead sit for the whole project regardless of diff size. ----
const WORKDAYS = 37; // 2026-05-06 .. 06-26 ~= 7.3 weeks
const SUPPORT = [ // [role, FTE]
  ["lead", 1.0], ["pm", 1.5], ["designer", 0.5], ["qa", 0.5],
];

function costBuild(rates) { // [low,high] of corrected surviving build
  let lo = 0, hi = 0;
  for (const [disc, h] of Object.entries(hours)) {
    const r = rates[ROLE[disc] || "backend"]; lo += h * r[0]; hi += h * r[1];
  }
  return [lo, hi];
}
function costSupport(rates) { // [low,high] of full-time staff over the calendar
  let lo = 0, hi = 0;
  for (const [role, fte] of SUPPORT) {
    const r = rates[role]; lo += r[0] * 8 * WORKDAYS * fte; hi += r[1] * 8 * WORKDAYS * fte;
  }
  return [lo, hi];
}

const out = {};
for (const m of MK) {
  const rates = R[m];
  const build = costBuild(rates);                       // corrected surviving build
  const withRework = build.map((x) => x * (1 + REWORK)); // + dead-end/rework
  const coord = withRework.map((x) => x * BROOKS);       // + Brooks coordination
  const support = costSupport(rates);                    // full-time staff over calendar
  const total = [coord[0] + support[0], coord[1] + support[1]];
  out[m] = {
    floor: floor.totalCostByMarket[m],
    correctedBuild: build.map(Math.round),
    plusRework: withRework.map(Math.round),
    plusCoordination: coord.map(Math.round),
    supportStaff: support.map(Math.round),
    trueTotalUSD: total.map(Math.round),
    trueTotalAED: total.map((x) => Math.round(x * AED)),
  };
}

writeFileSync(resolve(__dirname, "true-cost.json"), JSON.stringify({
  layers: { infraGrindHours: INFRA, reworkFactor: REWORK, brooks: BROOKS, workdays: WORKDAYS, support: SUPPORT, aedRate: AED },
  correctedDisciplineHours: hours, byMarket: out,
}, null, 2));

const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");
const aed = (n) => Math.round(n).toLocaleString("en-US") + " AED";
const rng = (a, f) => `${f(a[0])} – ${f(a[1])}`;
console.log("MyKeyz — TRUE build cost (floor + discovery layer)\n" + "=".repeat(64));
console.log("Layers: infra-grind (DevOps 89->450h, +260h backend), rework +45%, Brooks +35%, full-time staff x37d\n");
for (const m of MK) {
  const o = out[m];
  console.log(`${m.padEnd(9)} floor ${rng(o.floor, usd).padEnd(24)} ->  TRUE ${rng(o.trueTotalUSD, usd)}`);
  console.log(`${"".padEnd(9)} ${"".padEnd(31)}     ${rng(o.trueTotalAED, aed)}`);
}
console.log("\nwrote extract/true-cost.json");
