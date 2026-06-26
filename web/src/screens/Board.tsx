import { Icon } from "@iconify/react";
import {
  epics,
  issuesByEpic,
  epicCost,
  memberById,
  fmtUSD,
  MARKETS,
  MARKET_LABEL,
} from "../lib/data";
import { useMarket } from "../lib/market";
import { useNav } from "../lib/nav";

// discipline → chip colors (reuses the same chip visual language as the mock)
const DISC_COLOR: Record<string, string> = {
  Frontend: "bg-cyan-50 text-cyan-600",
  Design: "bg-pink-50 text-pink-600",
  Backend: "bg-blue-50 text-blue-600",
  Product: "bg-teal-50 text-teal-600",
  "AI/ML": "bg-violet-50 text-violet-600",
  DevOps: "bg-amber-50 text-amber-600",
  QA: "bg-emerald-50 text-emerald-600",
  Marketing: "bg-lime-50 text-lime-600",
  Security: "bg-red-50 text-red-600",
};
const discColor = (d: string) => DISC_COLOR[d] || "bg-slate-100 text-[#64748B]";

const fmtDate = (s: string) =>
  s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";

export function Board() {
  const { market, setMarket } = useMarket();
  const { go } = useNav();

  // group by epic, sorted by rolled-up cost (market-aware)
  const sortedEpics = [...epics].sort((a, b) => epicCost(b, market) - epicCost(a, market));

  return (
    <div className="flex h-screen bg-[#FAFBFF] text-[#0F172A] font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#F0F2F5] flex items-center justify-between px-10 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black font-heading tracking-tight">Delivery Board</h1>
            <div className="h-4 w-px bg-[#F0F2F5]" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">
                Global Sprint:
              </span>
              <span className="text-xs font-bold bg-blue-50 text-[#007AFF] px-2 py-0.5 rounded-lg">
                Historical S4
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#F0F2F5]/50 p-1 rounded-2xl border border-[#F0F2F5]">
              {MARKETS.map((m) => (
                <button
                  key={m}
                  onClick={() => setMarket(m)}
                  className={
                    "px-4 py-1.5 rounded-xl text-[10px] font-bold " +
                    (market === m
                      ? "bg-white shadow-sm text-[#0F172A]"
                      : "text-[#64748B]")
                  }
                >
                  {MARKET_LABEL[m]}
                </button>
              ))}
            </div>
            <button className="px-6 py-2.5 bg-[#0F172A] text-white rounded-2xl text-xs font-bold hover:opacity-90 transition-all flex items-center gap-2">
              <Icon icon="lucide:plus" width={16} height={16} />
              Document New Sprint
            </button>
          </div>
        </header>
        <div className="px-10 py-4 border-b border-[#F0F2F5] bg-white/50 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative w-72">
              <Icon
                icon="lucide:search"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]"
                width={16}
                height={16}
              />
              <input
                type="text"
                placeholder="Trace engineer logs..."
                className="w-full bg-white border border-[#F0F2F5] rounded-[1.25rem] pl-10 pr-4 py-2 text-xs font-medium focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <div className="h-5 w-px bg-[#F0F2F5]" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">
                Specialist:
              </span>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-xl bg-blue-50 text-[#007AFF] text-[10px] font-black uppercase tracking-wider border border-blue-100">
                  AI/ML
                </button>
                <button className="px-3 py-1 rounded-xl bg-white text-[#64748B] text-[10px] font-black uppercase tracking-wider border border-[#F0F2F5] hover:bg-blue-50 hover:text-[#007AFF] transition-all">
                  Security
                </button>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs font-bold text-[#64748B] hover:text-[#0F172A] transition-colors">
            <Icon icon="lucide:sliders-horizontal" width={16} height={16} />
            View Architectures
          </button>
        </div>
        <main className="flex-1 overflow-y-auto p-10 space-y-10">
          {sortedEpics.map((epic, ei) => {
            const epicIssues = issuesByEpic(epic.id);
            // unique members across this epic's issues, for the header avatar stack
            const memberIds: string[] = [];
            epicIssues.forEach((i) => {
              if (i.assigneeId && !memberIds.includes(i.assigneeId)) memberIds.push(i.assigneeId);
              (i.contributorIds || []).forEach((c: string) => {
                if (c && !memberIds.includes(c)) memberIds.push(c);
              });
            });
            const headMembers = memberIds.map(memberById).filter(Boolean).slice(0, 2);
            const extraMembers = Math.max(0, memberIds.length - headMembers.length);

            return (
              <section key={epic.id} className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-black text-xs">
                      {epic.icon ? (
                        <Icon icon={epic.icon} width={20} height={20} />
                      ) : (
                        String(ei + 1).padStart(2, "0")
                      )}
                    </div>
                    <div>
                      <h2 className="font-black text-lg tracking-tight">{epic.title}</h2>
                      <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest">
                        {epic.issueCount} Issues · {fmtDate(epic.startDate)} – {fmtDate(epic.endDate)} ·{" "}
                        Replacement Value: {fmtUSD(epicCost(epic, market))}
                      </p>
                    </div>
                  </div>
                  <div className="flex -space-x-3">
                    {headMembers.map((m: any) => (
                      <img
                        key={m.id}
                        src={m.avatar}
                        alt={m.name}
                        className="size-8 rounded-full border-2 border-white shadow-sm"
                      />
                    ))}
                    {extraMembers > 0 && (
                      <div className="size-8 rounded-full bg-[#F0F2F5] flex items-center justify-center text-[10px] font-bold">
                        +{extraMembers}
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {epicIssues.map((issue) => {
                    const assignee = memberById(issue.assigneeId);
                    const contributors = (issue.contributorIds || [])
                      .map(memberById)
                      .filter(Boolean)
                      .slice(0, 2);
                    return (
                      <div
                        key={issue.id}
                        onClick={() => go("issue")}
                        className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer group flex items-center gap-6"
                      >
                        <div className="size-10 shrink-0 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Icon icon="lucide:check" width={20} height={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-[10px] font-mono font-black text-[#64748B] bg-[#F0F2F5] px-2 py-0.5 rounded">
                              {issue.id}
                            </span>
                            <h3 className="text-sm font-extrabold text-[#0F172A] truncate">
                              {issue.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                              {(issue.disciplines || []).map((d: string) => (
                                <span
                                  key={d}
                                  className={
                                    "px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider " +
                                    discColor(d)
                                  }
                                >
                                  {d}
                                </span>
                              ))}
                              <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-[#64748B] text-[9px] font-black uppercase tracking-wider">
                                {issue.repo}
                              </span>
                            </div>
                            <div className="h-3 w-px bg-[#F0F2F5]" />
                            <div className="flex items-center gap-3 text-[10px] font-bold text-[#64748B]">
                              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 uppercase tracking-wider">
                                {issue.status}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon icon="lucide:git-commit" width={14} height={14} />{" "}
                                {issue.commitCount} Commits
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon icon="lucide:clock" width={14} height={14} />{" "}
                                {Math.round(issue.estHours)}h Build
                              </span>
                            </div>
                            <div className="flex -space-x-2 ml-1">
                              {assignee && (
                                <img
                                  src={assignee.avatar}
                                  alt={assignee.name}
                                  className="size-6 rounded-full border-2 border-white shadow-sm"
                                />
                              )}
                              {contributors.map((c: any) => (
                                <img
                                  key={c.id}
                                  src={c.avatar}
                                  alt={c.name}
                                  className="size-6 rounded-full border-2 border-white shadow-sm"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-lg font-black font-mono tracking-tight">
                            {fmtUSD(
                              issue.estCostByMarket?.[market] ?? issue.estCost ?? 0
                            )}
                          </p>
                          <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                            Market Value
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}
