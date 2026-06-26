import { Icon } from "@iconify/react";
import { epics, team, summary, money, epicCost, PERSON_YEARS } from "../lib/data";
import { useMarket } from "../lib/market";

export function Overview() {
  const { market, setMarket } = useMarket();
  // ~10.6x — 18 "ghost" months of equivalent effort over the 51 real build days
  const speed = Math.round(((summary.ghostMonths * 30) / 51) * 10) / 10;
  const topEpics = epics.slice(0, 2);

  const toggleBase = "px-5 py-1.5 rounded-xl text-xs font-bold transition-all";
  const toggleActive = "bg-[#0F172A] text-white shadow-lg shadow-black/10";
  const toggleIdle = "text-[#64748B] hover:text-[#0F172A]";

  return (
    <div className="flex h-screen bg-[#FAFBFF] text-[#0F172A] font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
        <header className="h-20 flex items-center justify-between px-10 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <div className="h-8 w-px bg-[#F0F2F5]" />
            <h1 className="text-xl font-black font-heading tracking-tight">
              Intelligence Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-white shadow-sm border border-[#F0F2F5] p-1.5 rounded-2xl">
              <button
                onClick={() => setMarket("USA")}
                className={`${toggleBase} ${market === "USA" ? toggleActive : toggleIdle}`}
              >
                USA
              </button>
              <button
                onClick={() => setMarket("Dubai")}
                className={`${toggleBase} ${market === "Dubai" ? toggleActive : toggleIdle}`}
              >
                UAE
              </button>
              <button
                onClick={() => setMarket("Offshore")}
                className={`${toggleBase} ${market === "Offshore" ? toggleActive : toggleIdle}`}
              >
                OFFSHORE
              </button>
            </div>
            <button className="size-11 rounded-2xl bg-white border border-[#F0F2F5] flex items-center justify-center text-[#64748B] shadow-sm hover:shadow-md transition-all">
              <Icon icon="lucide:bell" width={20} height={20} />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-10 pb-20">
          <div className="max-w-6xl mx-auto space-y-12 pt-4">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 relative group overflow-hidden bg-[#0F172A] rounded-[2rem] p-10 text-white shadow-2xl shadow-blue-900/20">
                <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                  <Icon icon="lucide:coins" width={200} height={200} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">
                      Estimated Replacement Value
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white/30">$</span>
                      <span className="text-7xl font-black font-heading tracking-tighter">
                        {money(market).teamCost.toLocaleString("en-US")}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase mb-1">
                        Human Effort
                      </p>
                      <p className="text-lg font-bold">{PERSON_YEARS} Years</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase mb-1">
                        Execution Speed
                      </p>
                      <p className="text-lg font-bold text-emerald-400">{speed}x</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Status</p>
                      <p className="text-lg font-bold">Finalized</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[2rem] p-10 border border-[#F0F2F5] shadow-sm flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="size-12 rounded-[1.25rem] bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon icon="lucide:zap" width={24} height={24} />
                  </div>
                  <h3 className="text-2xl font-black font-heading tracking-tight">
                    Active Velocity
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mt-2">
                    Historical build data confirms an average of 27 high-impact commits per business
                    day.
                  </p>
                </div>
                <div className="pt-8">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-black text-[#64748B] uppercase">
                      Phase 1 Delivery
                    </span>
                    <span className="text-lg font-black font-mono">100%</span>
                  </div>
                  <div className="h-3 w-full bg-[#F0F2F5] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black font-heading tracking-tight">Strategic Epics</h2>
                <button className="text-sm font-bold text-[#007AFF] flex items-center gap-2 hover:translate-x-1 transition-transform">
                  View All {epics.length} Epics <Icon icon="lucide:arrow-right" width={16} height={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <div className="size-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <Icon icon={topEpics[0].icon} width={28} height={28} />
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black font-mono tracking-tight">
                        ${epicCost(topEpics[0], market).toLocaleString("en-US")}
                      </p>
                      <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                        Asset Value
                      </p>
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold mb-1">{topEpics[0].title}</h3>
                  <p className="text-sm text-[#64748B] mb-6">{topEpics[0].desc}</p>
                  <div className="flex items-center gap-3 pt-6 border-t border-[#F0F2F5]">
                    <div className="flex -space-x-2">
                      <img
                        src={team[0].avatar}
                        className="size-6 rounded-full border-2 border-white"
                      />
                      <img
                        src={team[1].avatar}
                        className="size-6 rounded-full border-2 border-white"
                      />
                      <img
                        src={team[2].avatar}
                        className="size-6 rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="h-3 w-px bg-[#F0F2F5]" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                      {topEpics[0].issueCount} High-Impact Issues
                    </span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <div className="size-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Icon icon={topEpics[1].icon} width={28} height={28} />
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black font-mono tracking-tight">
                        ${epicCost(topEpics[1], market).toLocaleString("en-US")}
                      </p>
                      <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                        Asset Value
                      </p>
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold mb-1">{topEpics[1].title}</h3>
                  <p className="text-sm text-[#64748B] mb-6">{topEpics[1].desc}</p>
                  <div className="flex items-center gap-3 pt-6 border-t border-[#F0F2F5]">
                    <div className="flex -space-x-2">
                      <img
                        src={team[3].avatar}
                        className="size-6 rounded-full border-2 border-white"
                      />
                      <img
                        src={team[4].avatar}
                        className="size-6 rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="h-3 w-px bg-[#F0F2F5]" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                      {topEpics[1].issueCount} Issues
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
