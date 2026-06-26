import { Icon } from "@iconify/react";
import { team, MARKETS, MARKET_LABEL, fmtHours, fmtCompact, memberCost } from "../lib/data";
import { useMarket } from "../lib/market";

export function TeamPanel() {
  const { market, setMarket } = useMarket();
  const sortedTeam = [...team].sort((a, b) => b.hours - a.hours);
  const totalHours = team.reduce((sum, m) => sum + (m.hours || 0), 0);
  return (
    <div className="flex h-screen bg-[#FAFBFF] text-[#0F172A] font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#F0F2F5] flex items-center justify-between px-10 shrink-0 z-10">
          <div className="flex flex-col">
            <h1 className="text-xl font-black font-heading tracking-tight">Engineering Force</h1>
            <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
              {team.length} Specialist Intelligence Modules
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#F0F2F5]/50 p-1.5 rounded-2xl border border-[#F0F2F5]">
              {MARKETS.map((m) =>
                m === market ? (
                  <button
                    key={m}
                    onClick={() => setMarket(m)}
                    className="px-5 py-1.5 rounded-xl text-xs font-bold bg-[#0F172A] text-white shadow-lg shadow-black/10"
                  >
                    {MARKET_LABEL[m]}
                  </button>
                ) : (
                  <button
                    key={m}
                    onClick={() => setMarket(m)}
                    className="px-5 py-1.5 rounded-xl text-xs font-bold text-[#64748B]"
                  >
                    {MARKET_LABEL[m]}
                  </button>
                )
              )}
            </div>
          </div>
        </header>
        <div className="px-10 py-6 bg-white border-b border-[#F0F2F5] shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:activity" className="text-blue-500" width={18} height={18} />
              <span className="text-xs font-black text-[#0F172A] uppercase tracking-widest">
                Collective Capacity Utilization
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-[#64748B]">{fmtHours(totalHours)} ENGINEERED</span>
          </div>
          <div className="flex h-4 w-full bg-[#F0F2F5] rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-[#007AFF] w-[24%]" title="Backend" />
            <div className="h-full bg-[#34D399] w-[18%]" title="Product" />
            <div className="h-full bg-[#5856D6] w-[12%]" title="AI/ML" />
            <div className="h-full bg-[#F43F5E] w-[8%]" title="Security" />
            <div className="h-full bg-[#22D3EE] w-[10%]" title="Web" />
            <div className="h-full bg-[#FBBF24] w-[5%]" title="DevOps" />
            <div className="h-full bg-[#F472B6] w-[5%]" title="Design" />
            <div className="h-full bg-[#CBD5E1] w-[18%]" title="Other" />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-[#007AFF]" />
              <span className="text-[9px] font-bold text-[#64748B] uppercase">Backend</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-[#34D399]" />
              <span className="text-[9px] font-bold text-[#64748B] uppercase">Product</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-[#5856D6]" />
              <span className="text-[9px] font-bold text-[#64748B] uppercase">AI/ML</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-[#F43F5E]" />
              <span className="text-[9px] font-bold text-[#64748B] uppercase">Security</span>
            </div>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-[#F0F2F5] rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.avatar}
                      className="size-24 rounded-[2rem] border-4 border-white shadow-xl group-hover:rotate-3 transition-transform"
                    />
                    <div
                      className="absolute -bottom-2 -right-2 size-10 rounded-2xl bg-[#007AFF] text-white flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: member.color }}
                    >
                      <Icon icon={member.icon} width={18} height={18} />
                    </div>
                  </div>
                  <h3 className="font-black text-xl text-[#007AFF] mb-1">{member.name}</h3>
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-6">
                    {member.role}
                  </p>
                  <div className="grid grid-cols-2 w-full gap-4 border-t border-[#F0F2F5] pt-6">
                    <div className="text-left">
                      <p className="text-[9px] font-black text-[#64748B] uppercase mb-1">
                        Asset Value
                      </p>
                      <p className="text-lg font-black font-mono text-emerald-600">
                        +{fmtCompact(memberCost(member, market))}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-[#64748B] uppercase mb-1">Logs</p>
                      <p className="text-lg font-black font-mono">{fmtHours(member.hours)}</p>
                    </div>
                  </div>
                  <div className="w-full mt-6 flex justify-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase tracking-wider">
                      {member.issueCount} Issues
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
