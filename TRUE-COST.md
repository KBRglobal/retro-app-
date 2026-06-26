# MyKeyz — TRUE Build Cost (floor + discovery layer)

The git-surviving **floor** prices only code that survived in `git`. A real human team is paid for
everything git hides. This layer adds each hidden cost, named and grounded, and re-costs all 5 markets.

## What git hides (the discovery layer)
- **Infra / integration grind** — DevOps corrected 89h → 450h, +260h backend for API/DB plumbing.
  Railway ×7 services, Cloudflare Workers/Pages/R2, custom domains + DNS verification, DB migrations.
- **Dead-end / rework (+45%)** — Manus vision engine (built, eval'd, thrown), walk-and-talk (built then
  disabled), ~9 Figma↔app redesign rounds, full design redo, repair prices added then removed, branch
  nuke. git prices deletions at 20%; the build of that deleted work was 100% paid.
- **Coordination (Brooks +35%)** — 793 person-days over a ~7-week calendar ⇒ 15–20 builders in parallel.
- **Full-time core staff ×37 working days** — Eng Lead 1.0, PM 1.5, Designer 0.5, QA lead 0.5 (salary,
  runs regardless of diff size).

## Result — In-House loaded, all 5 markets

| Market | Floor (surviving git) | TRUE total (USD) | TRUE total (AED) |
|---|---|---|---|
| 🇵🇰 Pakistan | $19K–36K | $54K–100K | 197K–366K |
| 🇺🇦 Ukraine | $53K–88K | $150K–245K | 550K–900K |
| 🇦🇪 **Dubai** | $95K–145K | **$259K–399K** | **950K – 1.46M** |
| 🇮🇱 Israel | $130K–193K | $355K–540K | 1.30M – 1.98M |
| 🇺🇸 US | $212K–290K | $588K–820K | 2.16M – 3.01M |

**Dubai true cost ≈ 0.95M–1.46M AED (center ~1.2M).** A million dirham is the *floor*, not the ceiling.

Reproducible: `node extract/true-cost.mjs` → `extract/true-cost.json`. Floor: `COST-DASHBOARD.md`.
