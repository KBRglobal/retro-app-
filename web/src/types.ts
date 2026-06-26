// MyKeyz Retro — shared data contract.
// Build your React mocks against THESE types. The extraction engine + estimation
// engine emit exactly this shape into data.json, so mocks bind to real data with
// zero rework. Fields marked (post-research) are filled once rate data lands;
// until then they carry placeholder numbers but the field names are FROZEN.

export type Discipline =
  | "Backend" | "Frontend" | "Design" | "QA"
  | "DevOps" | "Product" | "AI/ML" | "Marketing";

export type Status = "done" | "in_progress" | "reopened"; // mostly "done" (retro)

export interface Commit {
  hash: string;
  date: string;            // ISO-8601
  subject: string;
  repo: string;            // repo id: "app" | "marketing" | ...
  insertions: number;
  deletions: number;
  fileCount: number;
  disciplines: Discipline[];
}

export interface Issue {
  id: string;
  epicId: string;
  title: string;           // human-readable task title (derived from commits)
  repo: string;
  disciplines: Discipline[];
  status: Status;
  commitCount: number;
  insertions: number;
  deletions: number;
  startDate: string;       // first commit in this issue
  endDate: string;         // last commit in this issue
  estHours: number;        // (post-research) human-equivalent effort
  estCost: number;         // (post-research) USD at chosen-market rate
  commits: Commit[];       // drill-down
}

export interface Epic {
  id: string;
  title: string;           // big initiative, e.g. "Anti-fraud system"
  disciplines: Discipline[];
  status: Status;
  issueCount: number;
  commitCount: number;
  startDate: string;
  endDate: string;
  estHours: number;        // (post-research) sum of issues
  estCost: number;         // (post-research)
}

export interface Sprint {
  id: string;
  label: string;           // e.g. "Sprint 3 · May 20–26"
  startDate: string;
  endDate: string;
  commitCount: number;
  issueIds: string[];
  velocity: number;        // commits or points shipped this sprint
  planned?: boolean;       // true = future 2.0 work, not real history yet
  note?: string;           // for planned sprints: what's scheduled
}

// A bar in the hypothetical "what a conventional team's schedule would look like"
// Gantt. This is a MODEL (clearly labeled), not real commit history — so it's laid
// out in a clean, logical order across the 18-month window.
export interface GhostBar {
  epicId: string;
  title: string;
  lane: number;            // parallel sub-team track (0..N)
  startDate: string;
  endDate: string;
  estHours: number;
  disciplines: Discipline[];
}

export interface GhostTimeline {
  teamSize: number;
  months: number;          // 18
  startDate: string;       // e.g. 2025-01-15
  endDate: string;         // 2026-07-15 (same finish line as the real timeline)
  bars: GhostBar[];
}

export interface Summary {
  totalCommits: number;
  firstCommit: string;
  lastCommit: string;
  totalInsertions: number;
  totalDeletions: number;
  disciplineTotals: Record<Discipline, number>;
  // ---- the investor money-shot (post-research) ----
  realHours: number;       // actual at-keyboard hours from commit timestamps
  teamEquivMonths: number; // person-months a conventional team would need
  teamCost: number;        // USD a basic team would have cost
  actualCost: number;      // what it actually cost (AI-assisted solo)
  savings: number;         // teamCost - actualCost
  savingsPct: number;      // 0..100
  // ---- timeline framing ----
  realStart: string;       // 2026-05-06 — when you actually started
  projectedFinish: string; // 2026-07-15 — when 2.0 ships (finish line for both timelines)
  ghostStart: string;      // 2025-01-15 — when a conventional team would have had to start
  ghostMonths: number;     // 18
}

export interface RepoMeta { id: string; label: string; }

export interface Dataset {
  generatedAt: string;
  repos: RepoMeta[];
  summary: Summary;
  epics: Epic[];
  sprints: Sprint[];
  commits: Commit[];       // full flat list (already emitted)
}
