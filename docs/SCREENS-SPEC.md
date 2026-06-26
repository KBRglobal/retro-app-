# MyKeyz Retro — Jira-style CTO Panel · Screen Spec (master)

> Supersedes the earlier "money-shot" spec. This is the canonical design brief.

## What this is
A **real Jira-style project-management tool**, seeded with the *actual reconstructed history*
of everything built for MyKeyz (1,400+ commits across all repos). You are the **CTO**; this is
your panel of the whole team — who did what, on which day, how long it took, and how many
specialists touched each item. Every issue traces to real commits. The tone is **sober and
authentic** — a tool a real team lived in, NOT a hype dashboard. You narrate; the tool shows facts.

## Aesthetic
Jira / Linear grade: dense, clean, professional. Dark, deep navy (#071426 / #0B1020), gold
accent (#E8C875) used sparingly, slate text. **No emoji** — real icons (lucide-react) + colored
discipline labels. Plus Jakarta Sans for text; IBM Plex Mono for numbers, hashes, dates.

## Stack
React 18 + TypeScript + Tailwind, **for the browser (react-dom)** — not React Native.
Bind to `web/src/types.ts`. Real data loads from `data.json` (same shape). Markets:
`"Dubai" | "USA" | "Offshore"` — a **global** toggle in the top bar re-computes every cost everywhere.

---

## The team (roster) — you are CTO over 12
Discipline → color label. Each issue shows a primary **assignee** + **contributors** (everyone
whose discipline touched it), derived from the real files changed.

| # | Role | Discipline label | Color | Real anchor |
|---|------|------------------|-------|-------------|
| 1 | Engineering / Tech Lead | Eng-Lead | slate | cross-cutting |
| 2 | Senior Backend Engineer | Backend | blue | 677 commits |
| 3 | Security & Cryptography Eng | Security | red | 114 crypto files + 13 web3 |
| 4 | Senior Mobile Engineer (RN) | Mobile | indigo | app .tsx/screens |
| 5 | Frontend / Web Engineer | Web | cyan | marketing + portals |
| 6 | AI/ML Engineer | AI/ML | violet | 101 commits |
| 7 | DevOps / Infra Engineer | DevOps | amber | 44 + 152 migrations |
| 8 | QA / Automation Engineer | QA | green | 242 commits |
| 9 | Product Manager | Product | teal | 492 commits |
| 10 | Product Designer (UI/UX) | Design | pink | 98 commits + 498 assets |
| 11 | Localization Specialist | i18n | orange | 33 languages, ~54k locale lines |
| 12 | Growth / Marketing | Growth | lime | marketing |

---

## App shell
- **Left sidebar** (Jira nav): Overview · Board · Issues · Team · Timeline. Project name "MyKeyz" at top.
- **Top bar**: global search, **market toggle** (Offshore · Dubai · USA), CTO badge (you), avatar cluster.
- **Main**: the active view. One scrolling page per view.

---

## View A — Overview (project home)
Sober project header, like Jira's project overview — NOT a hero pitch. Bind to `Summary`.
- Top strip (mono stats): total effort (`teamEquivMonths` person-months / "10 person-years"),
  **cost-to-build** (`summary.moneyByMarket[market].teamCost`), team size (12), duration
  (real 51 days vs conventional 18 months), % complete.
- A quiet line: "Replacement cost — what this would cost to build from scratch with a conventional team."
- **Epic progress list**: each epic with a progress bar, issue count, disciplines, rolled-up
  hours + cost. Sorted by cost. (`Epic[]`)
- Small "by discipline" breakdown (the 8–12 labels, commit/hours share). The numbers live here,
  understated — you talk around them.

## View B — Board (the Jira board)
The heart. Bind to `Epic[]` + `Issue[]`.
- Rows grouped by **Epic** (collapsible). Epic header: title, discipline labels, issue count,
  date range, rolled-up cost (`epic.estCostByMarket[market]`).
- **Issue cards/rows**: title · **assignee avatar** (+ contributor avatars stacked) · discipline
  labels · repo badge · status pill · time estimate (`estHours`) · commit count · date range.
- **Filter bar**: search + filter by discipline / repo / team member / sprint. Discipline legend = filters.
- Row click → View C.

## View C — Issue detail (drill-down / the proof)
A full Jira issue. Bind to one `Issue` with `commits[]`.
- Header: issue key (e.g. `MK-0142`), title, status.
- Right meta panel (Jira-style): **Assignee** (avatar+role), **Contributors** (avatars),
  **Reporter** = you (CTO), discipline labels, repo, **Time tracking** — "Estimate: {estHours}h"
  and the conventional-team value `issue.estCostByMarket[market]`, start/end dates.
- **Activity log = the real commits** (the receipts): each commit → short hash (mono), subject,
  author, date, +ins/−del, fileCount. This unfakeable list IS the proof.
- Optional "Files touched" roll-up.

## View D — Team panel (your CTO dashboard)
"My panel of all employees and what they did." Bind to `TeamMember[]` + `Issue[]`.
- Roster grid: each member card → avatar, role, discipline label, **hours logged**, **# issues**,
  top epics they worked on, cost contribution (market-aware).
- Click a member → filtered list of their issues (their real work).
- A small workload bar across members (who carried what share). This is the unique CTO view —
  it makes "how many professionals worked on this" tangible.

## View E — Timeline (sprints + the two parallel timelines)
Bind to `Sprint[]` + `GhostTimeline` + `Summary`.
- **Velocity chart**: weekly sprints, bar = commitCount. `planned` sprints (now→Jul 15) faded.
- **THE comparison visual** — two stacked timelines sharing the same finish line (2026-07-15):
  - Top = your real timeline (`summary.realStart` 2026-05-06 → finish), short & dense.
  - Bottom = conventional-team Gantt (`ghost.bars`, lanes), faded, stretching back to
    `ghost.startDate` 2025-01-15. Label: "What a conventional team's schedule would have looked like."
- **Extra tracks** (real work the code-LOC view under-counts): a **Localization** track
  (33 languages) and an **Assets** track (498 visual assets) — shown as their own bars/lanes.
- Cadence callout: "~27 commits/day, every day for 51 days."

---

## Cross-cutting
- **Market toggle is global** — switching re-computes every cost (`estCostByMarket[market]`,
  `summary.moneyByMarket[market]`).
- **Status** mostly `done` (retro); a few `reopened` where commits show fix/revert — keep it honest.
- **Everything built counts** — deleted/redesigned/disabled work is real effort. Localization
  (33 langs) and assets (498) are itemized as their own work, not hidden in code LOC.

## Component contracts (one per view, typed props from types.ts)
```ts
Overview({ summary, epics, market })
Board({ epics, issues, team, market, onOpenIssue })
IssueDetail({ issue, team, market, onBack })
TeamPanel({ team, issues, market, onOpenMember })
Timeline({ sprints, ghost, summary })
App()  // shell: sidebar + topbar + global market state + data.json load
```
Build order: **Overview → Board → IssueDetail → TeamPanel → Timeline.**
Send each as you finish it; I wire it to real data.
