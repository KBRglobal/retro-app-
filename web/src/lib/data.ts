// Single source of truth for the UI. Loads the real, git-derived dataset and exposes
// typed accessors + market-aware formatters. Screens import from here — never hardcode.
import raw from "../data.json";

export type Market = "Dubai" | "USA" | "Offshore";

// segmented-control labels (the toggle shows UAE for the Dubai market)
export const MARKETS: Market[] = ["USA", "Dubai", "Offshore"];
export const MARKET_LABEL: Record<Market, string> = { USA: "USA", Dubai: "UAE", Offshore: "OFFSHORE" };

export const data: any = raw;
export const summary = data.summary;
export const epics: any[] = data.epics;
export const issues: any[] = data.issues;
export const team: any[] = data.team;
export const sprints: any[] = data.sprints;
export const repos: any[] = data.repos;

// ---- formatters ----
export const fmtUSD = (n: number) => "$" + Math.round(n || 0).toLocaleString("en-US");
export function fmtCompact(n: number) {
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2).replace(/\.00$/, "") + "M";
  if (n >= 1_000) return "$" + Math.round(n / 1_000) + "K";
  return "$" + Math.round(n);
}
export const fmtHours = (h: number) => Math.round(h || 0).toLocaleString("en-US") + "h";

// ---- market-aware money ----
export const money = (m: Market) => data.summary.moneyByMarket[m];
export const epicCost = (e: any, m: Market) => e.estCostByMarket?.[m] ?? e.estCost ?? 0;
export const issueCost = (i: any, m: Market) => i.estCostByMarket?.[m] ?? i.estCost ?? 0;
export const memberCost = (mem: any, m: Market) => mem.costByMarket?.[m] ?? mem.cost ?? 0;

// ---- lookups ----
export const memberById = (id: string) => team.find((m) => m.id === id);
export const issueById = (id: string) => issues.find((i) => i.id === id);
export const epicById = (id: string) => epics.find((e) => e.id === id);
export const issuesByEpic = (epicId: string) => issues.filter((i) => i.epicId === epicId);
export const issuesByMember = (id: string) =>
  issues.filter((i) => i.assigneeId === id || i.contributorIds?.includes(id));

// ---- daily journal: every day, what happened (from real commits) ----
export interface JournalDay {
  date: string;            // YYYY-MM-DD
  commits: number;
  insertions: number;
  deletions: number;
  hours: number;           // human-equivalent effort that day
  disciplines: string[];
  members: string[];       // team member ids active that day
  issueIds: string[];
  repos: string[];
  commitList: { hash: string; subject: string; date: string; ins: number; del: number; repo: string }[];
}

export const journal: JournalDay[] = (() => {
  const byDay = new Map<string, any>();
  for (const iss of issues) {
    const perCommitHours = iss.estHours / Math.max(1, iss.commits.length);
    for (const c of iss.commits) {
      const day = c.date.slice(0, 10);
      if (!byDay.has(day)) {
        byDay.set(day, { date: day, commits: 0, insertions: 0, deletions: 0, hours: 0, disciplines: new Set(), members: new Set(), issueIds: new Set(), repos: new Set(), commitList: [] });
      }
      const e = byDay.get(day);
      e.commits++; e.insertions += c.insertions; e.deletions += c.deletions; e.hours += perCommitHours;
      (c.disciplines || []).forEach((d: string) => e.disciplines.add(d));
      e.members.add(iss.assigneeId);
      (iss.contributorIds || []).forEach((m: string) => e.members.add(m));
      e.issueIds.add(iss.id); e.repos.add(c.repo);
      e.commitList.push({ hash: c.hash, subject: c.subject, date: c.date, ins: c.insertions, del: c.deletions, repo: c.repo });
    }
  }
  return [...byDay.values()]
    .map((e) => ({
      ...e,
      disciplines: [...e.disciplines], members: [...e.members],
      issueIds: [...e.issueIds], repos: [...e.repos], hours: Math.round(e.hours),
      commitList: e.commitList.sort((a: any, b: any) => a.date.localeCompare(b.date)),
    }))
    .sort((a, b) => b.date.localeCompare(a.date)); // most recent first
})();

export const journalMaxCommits = Math.max(...journal.map((d) => d.commits), 1);

// effort headline numbers (constant across markets)
export const PERSON_MONTHS = summary.teamEquivMonths;     // 126
export const PERSON_YEARS = Math.round((summary.teamEquivMonths / 12) * 10) / 10;
export const TOTAL_HOURS = summary.realHours;             // 20,160
