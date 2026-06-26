# Retro — a retrospective Jira (proof-of-work engine)

A real Jira-style board that, instead of planning *future* tasks, **documents work that already
happened** (from git history) and translates it into **human-time and replacement cost**.
Point it at any project's repos and it reconstructs the team, the board, the daily log, the
sprints, and the cost-to-build — all from real commits. Nothing is invented; everything traces
to a hash you can inspect.

## How it works
1. `extract/extract.mjs` — reads every repo in `extract/config.json`, pulls all commits
   (files, lines, timestamps), tags each with disciplines from the files touched → `web/src/data.json`.
2. `extract/estimate.mjs` — clusters commits into Issues/Epics/Sprints, distributes the
   cross-validated effort (person-months) by code volume × complexity, prices each item at
   per-discipline market rates (Dubai / USA / Offshore), builds the 12-person team, the
   ghost (conventional-team) timeline, and the add-ons (localization, visual assets).
3. `web/` — Vite + React app that renders it as a Jira-style product. Bottom dock navigation.
   Global market toggle re-prices everything live.

## Run
```bash
cd web
npm install
npm run refresh   # rebuild data.json from the current repos
npm run dev       # open the board at http://localhost:4319
npm run watch     # (separate terminal) live: every commit → recompute cost + human-time
```

## Reuse for a new project
Edit `extract/config.json`:
```json
{
  "project": "YourProject",
  "finishDate": "2026-12-01",
  "ghostMonths": 18,
  "repos": [ { "id": "app", "label": "App", "path": "/abs/path/to/repo" } ]
}
```
Then `npm run refresh`. That's it — the whole board regenerates for the new project.

## The model (defensible)
- Effort cross-validated two ways (net LOC ÷ industry productivity, and team-comp × duration).
- Deleted/redesigned/disabled work counts — it was still built (justifies the longer ghost timeline).
- Localization (33 languages) + 498 visual assets are explicit line items the code-LOC view misses.
- Every cost is benchmarked (see `docs/` research reports), not inflated.
