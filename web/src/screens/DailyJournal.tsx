import { useState } from "react";
import { Icon } from "@iconify/react";
import { journal, journalMaxCommits, memberById, fmtHours, type JournalDay } from "../lib/data";

const DISC_COLOR: Record<string, string> = {
  Backend: "#3B82F6", Frontend: "#6366F1", "AI/ML": "#8B5CF6", DevOps: "#F59E0B",
  Design: "#EC4899", QA: "#10B981", Product: "#14B8A6", Marketing: "#84CC16",
};

const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dayParts(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return { wd: WEEKDAY[d.getDay()], dd: d.getDate(), mon: MONTH[d.getMonth()], monthKey: `${MONTH[d.getMonth()]} ${d.getFullYear()}` };
}

export function DailyJournal() {
  const [open, setOpen] = useState<string | null>(journal[0]?.date ?? null);

  let lastMonth = "";

  return (
    <div className="flex h-screen bg-[#FAFBFF] text-[#0F172A] font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 flex items-center justify-between px-10 shrink-0 z-10">
          <div>
            <h1 className="text-xl font-black font-heading tracking-tight">Engineering Logs</h1>
            <p className="text-xs text-[#64748B] font-bold uppercase tracking-[0.15em] mt-0.5">
              Day-by-day · {journal.length} active days · May 6 → Jun 26
            </p>
          </div>
          <div className="px-4 py-2 bg-white rounded-2xl border border-[#F0F2F5] shadow-sm text-xs font-black text-[#64748B] uppercase tracking-widest">
            Newest first
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-10 pb-24">
          <div className="max-w-4xl mx-auto pt-4">
            {journal.map((day) => {
              const p = dayParts(day.date);
              const monthHeader = p.monthKey !== lastMonth ? ((lastMonth = p.monthKey), p.monthKey) : null;
              const isOpen = open === day.date;
              return (
                <div key={day.date}>
                  {monthHeader && (
                    <div className="sticky top-0 z-10 -mx-2 px-2 py-3 bg-[#FAFBFF]/90 backdrop-blur">
                      <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#94A3B8]">{monthHeader}</span>
                    </div>
                  )}
                  <DayRow day={day} parts={p} open={isOpen} onToggle={() => setOpen(isOpen ? null : day.date)} />
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

function DayRow({ day, parts, open, onToggle }: { day: JournalDay; parts: any; open: boolean; onToggle: () => void }) {
  const members = day.members.map(memberById).filter(Boolean) as any[];
  const barPct = Math.max(6, Math.round((day.commits / journalMaxCommits) * 100));

  return (
    <div className={`mb-3 bg-white rounded-[1.5rem] border transition-all ${open ? "border-[#007AFF]/30 shadow-xl" : "border-[#F0F2F5] shadow-sm hover:shadow-md"}`}>
      <button onClick={onToggle} className="w-full flex items-center gap-6 p-5 text-left">
        {/* date block */}
        <div className="shrink-0 w-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">{parts.wd}</p>
          <p className="text-3xl font-black font-heading tracking-tighter leading-none">{parts.dd}</p>
          <p className="text-[10px] font-bold uppercase text-[#64748B]">{parts.mon}</p>
        </div>

        {/* activity + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-extrabold">{day.commits} commits</span>
            <span className="text-[#CBD5E1]">·</span>
            <span className="text-sm font-bold text-[#64748B]">{fmtHours(day.hours)} effort</span>
            <span className="text-[#CBD5E1]">·</span>
            <span className="text-xs font-bold text-emerald-600">+{day.insertions.toLocaleString()}</span>
            <span className="text-xs font-bold text-rose-500">−{day.deletions.toLocaleString()}</span>
          </div>
          <div className="h-2 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${barPct}%` }} />
          </div>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {day.disciplines.slice(0, 6).map((d) => (
              <span key={d} className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md" style={{ backgroundColor: (DISC_COLOR[d] || "#64748B") + "1A", color: DISC_COLOR[d] || "#64748B" }}>
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* who + issues */}
        <div className="shrink-0 flex items-center gap-4">
          <div className="text-right">
            <p className="text-lg font-black font-mono">{day.issueIds.length}</p>
            <p className="text-[9px] font-black uppercase tracking-widest text-[#94A3B8]">tasks</p>
          </div>
          <div className="flex -space-x-2">
            {members.slice(0, 4).map((m) => (
              <img key={m.id} src={m.avatar} title={m.role} className="size-7 rounded-full border-2 border-white" />
            ))}
            {members.length > 4 && (
              <div className="size-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[8px] font-black text-[#64748B] border-2 border-white">
                +{members.length - 4}
              </div>
            )}
          </div>
          <Icon icon={open ? "lucide:chevron-up" : "lucide:chevron-down"} width={18} height={18} className="text-[#94A3B8]" />
        </div>
      </button>

      {/* expanded — the real commits of that day */}
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-[#F0F2F5] mt-1">
          <div className="space-y-1.5 mt-3">
            {day.commitList.map((c, i) => (
              <div key={c.hash + i} className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-[#F8FAFC]">
                <span className="font-mono text-[11px] text-[#94A3B8] shrink-0 w-16">{c.date.slice(11, 16)}</span>
                <span className="font-mono text-[11px] text-[#007AFF] shrink-0 w-16">{c.hash.slice(0, 7)}</span>
                <span className="text-sm text-[#0F172A] truncate flex-1">{c.subject}</span>
                <span className="text-[10px] font-bold text-emerald-600 shrink-0">+{c.ins}</span>
                <span className="text-[10px] font-bold text-rose-500 shrink-0">−{c.del}</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-[#94A3B8] shrink-0 w-16 text-right">{c.repo}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
