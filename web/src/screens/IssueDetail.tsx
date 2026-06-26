import { Icon } from "@iconify/react";
import { issues, memberById, issueCost } from "../lib/data";
import { useMarket } from "../lib/market";
import { useNav } from "../lib/nav";

// Pick the meatiest real issue (most commits) at module level.
const issue = [...issues].sort((a, b) => b.commitCount - a.commitCount)[0];

// discipline chip styles (cycle through the original red / blue / neutral looks)
const CHIP_STYLES = [
  "px-4 py-1.5 rounded-2xl bg-red-50 text-red-600 text-xs font-black uppercase tracking-widest border border-red-100 shadow-sm shadow-red-500/5",
  "px-4 py-1.5 rounded-2xl bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest border border-blue-100 shadow-sm shadow-blue-500/5",
  "px-4 py-1.5 rounded-2xl bg-[#F0F2F5] text-[#64748B] text-xs font-black uppercase tracking-widest border border-transparent",
];

const fmtDateTime = (d: string) =>
  new Date(d).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const fmtNum = (n: number) => (n || 0).toLocaleString("en-US");

export function IssueDetail() {
  const { market } = useMarket();
  const { go } = useNav();
  const assignee = memberById(issue.assigneeId);
  const contributors = (issue.contributorIds || []).map(memberById).filter(Boolean);
  const commits = issue.commits || [];
  const visibleContributors = contributors.slice(0, 2);
  const extraContributors = Math.max(0, contributors.length - visibleContributors.length);
  const cost = issueCost(issue, market);

  return (
    <div className="flex h-screen bg-[#FAFBFF] text-[#0F172A] font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#F0F2F5] flex items-center justify-between px-10 shrink-0 z-10">
          <div className="flex items-center gap-6">
            <button
              onClick={() => go("board")}
              className="flex items-center gap-2 text-xs font-black text-[#64748B] hover:text-[#0F172A] transition-colors group cursor-pointer"
            >
              <div className="size-8 rounded-xl bg-[#F0F2F5] flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-all">
                <Icon icon="lucide:arrow-left" width={16} height={16} />
              </div>
              BACK TO LOGS
            </button>
            <div className="h-6 w-px bg-[#F0F2F5]" />
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-black text-[#64748B] bg-[#F0F2F5] px-3 py-1 rounded-lg">
                {issue.id}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100">
                Verified • {issue.status}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="size-10 rounded-xl flex items-center justify-center text-[#64748B] bg-white border border-[#F0F2F5] shadow-sm hover:shadow-md">
              <Icon icon="lucide:share-2" width={18} height={18} />
            </button>
            <button className="size-10 rounded-xl flex items-center justify-center text-[#64748B] bg-white border border-[#F0F2F5] shadow-sm hover:shadow-md">
              <Icon icon="lucide:more-horizontal" width={18} height={18} />
            </button>
          </div>
        </header>
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto p-12 max-w-5xl mx-auto w-full">
            <div className="mb-12">
              <h1 className="text-4xl font-black font-heading tracking-tight mb-6 leading-[1.1]">
                {issue.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {(issue.disciplines || []).map((d: string, i: number) => (
                  <span key={d} className={CHIP_STYLES[i % CHIP_STYLES.length]}>
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <section className="space-y-8">
              <div className="flex items-center justify-between border-b border-[#F0F2F5] pb-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
                    <Icon icon="lucide:git-branch" width={20} height={20} />
                  </div>
                  <h2 className="text-xl font-black font-heading tracking-tight">
                    Engineering Artifacts
                  </h2>
                </div>
                <div className="text-[10px] font-black text-[#64748B] uppercase tracking-[0.2em] bg-white px-4 py-2 rounded-xl border border-[#F0F2F5]">
                  {commits.length} Atomic Commits Verified
                </div>
              </div>
              <div className="space-y-6">
                {commits.map((commit: any) => (
                  <div
                    key={commit.hash}
                    className="group relative flex gap-6 bg-white p-6 rounded-[2rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all"
                  >
                    <div className="size-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                      <Icon icon="lucide:git-commit" width={22} height={22} />
                    </div>
                    <div className="flex-1 min-w-0 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-black text-blue-600 hover:underline cursor-pointer">
                            {commit.hash.slice(0, 7)}
                          </span>
                          <h3 className="font-extrabold text-[#0F172A] text-lg">
                            {commit.subject}
                          </h3>
                        </div>
                        <span className="text-[10px] font-black text-[#64748B] uppercase tracking-wider">
                          {fmtDateTime(commit.date)}
                        </span>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-black text-[#64748B] uppercase">
                          <Icon icon="lucide:user" width={16} height={16} />
                          {commit.author}
                        </div>
                        <div className="h-4 w-px bg-[#F0F2F5]" />
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono font-black text-emerald-600">
                            +{fmtNum(commit.insertions)}
                          </span>
                          <span className="text-[10px] font-mono font-black text-red-500">
                            -{fmtNum(commit.deletions)}
                          </span>
                          <span className="px-2 py-0.5 rounded-lg bg-[#F0F2F5] text-[9px] font-black uppercase tracking-wider">
                            {commit.fileCount} files
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
          <aside className="w-96 bg-white border-l border-[#F0F2F5] overflow-y-auto shrink-0 z-10 p-10 space-y-12">
            <section>
              <h3 className="text-[11px] font-black text-[#64748B] uppercase tracking-[0.2em] mb-6">
                Primary Specialist
              </h3>
              <div className="flex items-center gap-4 bg-[#FBFBFF] p-4 rounded-3xl border border-[#F0F2F5]">
                <img
                  src={assignee?.avatar}
                  className="size-14 rounded-2xl shadow-lg border-2 border-white"
                />
                <div>
                  <p className="text-lg font-black text-[#0F172A] leading-tight">{assignee?.name}</p>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {assignee?.role}
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-[11px] font-black text-[#64748B] uppercase tracking-[0.2em] mb-6">
                Execution Force
              </h3>
              <div className="flex flex-wrap gap-3">
                {visibleContributors.map((c: any) => (
                  <img
                    key={c.id}
                    src={c.avatar}
                    className="size-10 rounded-2xl border-2 border-white shadow-md hover:scale-110 transition-transform cursor-pointer"
                  />
                ))}
                {extraContributors > 0 && (
                  <div className="size-10 rounded-2xl bg-[#F0F2F5] flex items-center justify-center text-xs font-black border border-[#F0F2F5] shadow-sm">
                    +{extraContributors}
                  </div>
                )}
              </div>
            </section>
            <section className="p-8 bg-[#0F172A] rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                    Efficiency Engine
                  </span>
                  <span className="text-xs font-mono font-black text-emerald-400">OPTIMIZED</span>
                </div>
                <div>
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-2">
                    Replacement Cost Value
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-white/30">$</span>
                    <span className="text-4xl font-black font-heading tracking-tighter">
                      {fmtNum(cost)}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[9px] font-black text-white/40 uppercase mb-1">Log Time</p>
                    <p className="text-lg font-bold">{issue.estHours}h</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-white/40 uppercase mb-1">Commits</p>
                    <p className="text-lg font-bold">{commits.length}</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#FBFBFF] transition-all cursor-default group">
                <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon icon="lucide:calendar" width={20} height={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#64748B] uppercase tracking-wider">
                    Historical Start
                  </p>
                  <p className="text-sm font-extrabold text-[#0F172A]">{fmtDate(issue.startDate)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#FBFBFF] transition-all cursor-default group">
                <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon icon="lucide:check-circle" width={20} height={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#64748B] uppercase tracking-wider">
                    Finalized Record
                  </p>
                  <p className="text-sm font-extrabold text-[#0F172A]">{fmtDate(issue.endDate)}</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
