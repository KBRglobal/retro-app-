import { Icon } from "@iconify/react";
import { sprints, data } from "../lib/data";

export function Timeline() {
  // ---- velocity bars (real, 10 sprints; last 2 planned) ----
  const realSprints = sprints.filter((s) => !s.planned);
  const maxCommit = Math.max(1, ...realSprints.map((s) => s.commitCount || 0));
  const shortLabel = (s: any) => {
    const m = String(s.label || "").match(/Sprint\s+(\d+)/);
    const base = m ? `S${m[1]}` : String(s.label || "");
    return s.planned ? `${base}·P` : base;
  };

  // ---- ghost Gantt geometry (position bars by date within the ghost window) ----
  const ghostStart = new Date(data.ghost.startDate).getTime();
  const ghostEnd = new Date(data.ghost.endDate).getTime();
  const ghostSpan = Math.max(1, ghostEnd - ghostStart);
  const ghostPos = (b: any) => {
    const s = new Date(b.startDate).getTime();
    const e = new Date(b.endDate).getTime();
    const left = ((s - ghostStart) / ghostSpan) * 100;
    const width = Math.max(2, ((e - s) / ghostSpan) * 100);
    return { left: `${left}%`, width: `${width}%` };
  };
  const ghostLanes = [0, 1, 2];

  return (
    <div className="flex h-screen bg-[#FAFBFF] text-[#0F172A] font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#F0F2F5] flex items-center justify-between px-10 shrink-0 z-10">
          <div className="flex flex-col">
            <h1 className="text-xl font-black font-heading tracking-tight">Project Velocity</h1>
            <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
              Historical Cadence vs. Conventional Deadlines
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-5 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 flex items-center gap-2">
              <Icon icon="lucide:zap" width={16} height={16} />
              PERFORMANCE PEAK: ~27 Commits/Day
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-12 space-y-16">
          <section className="bg-white rounded-[2.5rem] p-10 border border-[#F0F2F5] shadow-sm">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl font-black font-heading tracking-tight mb-2">
                  Build Density
                </h2>
                <p className="text-sm text-[#64748B]">
                  Commit volume per sprint cycle throughout the 51-day delivery window.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-blue-600 shadow-lg shadow-blue-500/30" />
                  <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest">
                    Active Velocity
                  </span>
                </div>
                <div className="flex items-center gap-2 opacity-30">
                  <div className="size-3 rounded-full bg-blue-200" />
                  <span className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">
                    Conventional Pace
                  </span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end gap-3 px-6 border-b-2 border-[#F0F2F5] pb-1">
              {sprints.map((s) =>
                s.planned ? (
                  <div key={s.id} className="flex-1 relative group cursor-pointer h-full flex items-end">
                    <div className="w-full bg-blue-100/60 border-2 border-dashed border-blue-300 rounded-2xl h-[28%] opacity-50 group-hover:opacity-70 transition-all duration-500" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {s.note}
                    </div>
                  </div>
                ) : (
                  <div key={s.id} className="flex-1 relative group cursor-pointer h-full flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl transition-all duration-500 shadow-lg shadow-blue-500/10"
                      style={{ height: `${Math.max(8, Math.round((s.commitCount / maxCommit) * 92))}%` }}
                    />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {s.commitCount}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex gap-3 mt-8 px-6 text-[11px] font-black text-[#64748B] uppercase tracking-[0.2em] font-mono">
              {sprints.map((s) => (
                <span key={s.id} className="flex-1 text-center">
                  {shortLabel(s)}
                </span>
              ))}
            </div>
          </section>
          <section className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-black font-heading tracking-tight mb-4 text-[#0F172A]">
                Timeline Divergence
              </h2>
              <p className="text-[#64748B]">
                A side-by-side comparison of execution speed against industry-standard team
                estimates.
              </p>
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm font-black text-[#0F172A] uppercase tracking-widest flex items-center gap-2">
                    <div className="size-2 rounded-full bg-blue-600" /> MyKeyz Realized Build
                  </span>
                  <span className="text-xl font-black font-mono text-[#007AFF]">51 DAYS</span>
                </div>
                <div className="relative h-16 bg-white rounded-[1.5rem] border border-[#F0F2F5] shadow-sm overflow-hidden flex items-center justify-end">
                  <div className="w-[15%] h-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-6">
                    <Icon
                      icon="lucide:check-circle"
                      className="text-white"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-50/20 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-4 opacity-40">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm font-black text-[#64748B] uppercase tracking-widest flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#64748B]" /> Conventional Team Scale
                  </span>
                  <span className="text-xl font-black font-mono">{data.ghost.months} MONTHS</span>
                </div>
                <div className="relative bg-[#F0F2F5] rounded-[1.5rem] overflow-hidden p-4 space-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-300 to-slate-200 pointer-events-none" />
                  {ghostLanes.map((lane) => (
                    <div key={lane} className="relative h-9">
                      {data.ghost.bars
                        .filter((b: any) => b.lane === lane)
                        .map((b: any) => {
                          const pos = ghostPos(b);
                          return (
                            <div
                              key={`${b.epicId}-${lane}`}
                              className="absolute top-0 h-9 rounded-lg bg-white/60 border border-white/50 flex items-center px-2 overflow-hidden"
                              style={{ left: pos.left, width: pos.width }}
                            >
                              <span className="text-[10px] font-black text-slate-600 truncate whitespace-nowrap">
                                {b.title}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  ))}
                </div>
                <p className="text-[11px] font-bold text-[#64748B] px-4">
                  What a conventional team's schedule would have looked like.
                </p>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-[#0F172A] rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                <Icon icon="lucide:languages" width={120} height={120} />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center text-orange-400">
                    <Icon icon="lucide:languages" width={28} height={28} />
                  </div>
                  <h3 className="text-xl font-black font-heading tracking-tight">
                    Localization Track
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Management of 33 languages and ~54,000 locale lines synchronized via automated
                  CI/CD pipelines.
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Executed in Parallel with Core Dev
                </p>
              </div>
            </div>
            <div className="p-10 bg-white border border-[#F0F2F5] rounded-[2.5rem] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                <Icon icon="lucide:image" width={120} height={120} />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center">
                    <Icon icon="lucide:image" width={28} height={28} />
                  </div>
                  <h3 className="text-xl font-black font-heading tracking-tight text-[#0F172A]">
                    Asset Generation
                  </h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Scalable UI kits, localized marketing assets, and 498 platform-specific visual
                  artifacts finalized.
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#64748B]/40">
                  Independent Specialist Workstream
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
