import { Icon } from "@iconify/react";

export function TeamPanel() {
  return (
    <div className="flex h-screen bg-[#FAFBFF] text-[#0F172A] font-sans overflow-hidden">
      <aside className="w-72 bg-white/50 backdrop-blur-xl border-r border-[#F0F2F5] flex flex-col shrink-0 z-20">
        <div className="p-8">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Icon icon="lucide:key-round" width={22} height={22} />
            </div>
            <div>
              <h2 className="font-extrabold text-lg tracking-tight leading-none">MyKeyz</h2>
              <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-[0.2em] mt-1">
                CTO Intelligence
              </p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#64748B] hover:bg-white hover:text-[#0F172A] transition-all"
          >
            <Icon icon="lucide:layout-grid" width={20} height={20} />
            <span className="text-sm font-bold">Project Pulse</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#64748B] hover:bg-white hover:text-[#0F172A] transition-all"
          >
            <Icon icon="lucide:trello" width={20} height={20} />
            <span className="text-sm font-bold">Delivery Board</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#64748B] hover:bg-white hover:text-[#0F172A] transition-all"
          >
            <Icon icon="lucide:layers" width={20} height={20} />
            <span className="text-sm font-bold">Engineering Logs</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#007AFF] text-white shadow-md shadow-blue-500/10 transition-all"
          >
            <Icon icon="lucide:users-2" width={20} height={20} />
            <span className="text-sm font-bold">Specialist Force</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#64748B] hover:bg-white hover:text-[#0F172A] transition-all"
          >
            <Icon icon="lucide:clock-3" width={20} height={20} />
            <span className="text-sm font-bold">Velocity Track</span>
          </a>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#F0F2F5] flex items-center justify-between px-10 shrink-0 z-10">
          <div className="flex flex-col">
            <h1 className="text-xl font-black font-heading tracking-tight">Engineering Force</h1>
            <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
              12 Specialist Intelligence Modules
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#F0F2F5]/50 p-1.5 rounded-2xl border border-[#F0F2F5]">
              <button className="px-5 py-1.5 rounded-xl text-xs font-bold bg-[#0F172A] text-white shadow-lg shadow-black/10">
                USA
              </button>
              <button className="px-5 py-1.5 rounded-xl text-xs font-bold text-[#64748B]">
                UAE
              </button>
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
            <span className="text-xs font-mono font-bold text-[#64748B]">14,200h ENGINEERED</span>
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
            <div className="bg-white border border-[#F0F2F5] rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="size-24 rounded-[2rem] border-4 border-white shadow-xl group-hover:rotate-3 transition-transform"
                  />
                  <div className="absolute -bottom-2 -right-2 size-10 rounded-2xl bg-[#007AFF] text-white flex items-center justify-center shadow-lg">
                    <Icon icon="lucide:terminal" width={18} height={18} />
                  </div>
                </div>
                <h3 className="font-black text-xl text-[#007AFF] mb-1">Senior Backend</h3>
                <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-6">
                  Lead Systems Engineer
                </p>
                <div className="grid grid-cols-2 w-full gap-4 border-t border-[#F0F2F5] pt-6">
                  <div className="text-left">
                    <p className="text-[9px] font-black text-[#64748B] uppercase mb-1">
                      Asset Value
                    </p>
                    <p className="text-lg font-black font-mono text-emerald-600">+$242K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-[#64748B] uppercase mb-1">Logs</p>
                    <p className="text-lg font-black font-mono">1,142h</p>
                  </div>
                </div>
                <div className="w-full mt-6 flex justify-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-wider">
                    677 Commits
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase tracking-wider">
                    182 Issues
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#F0F2F5] rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="size-24 rounded-[2rem] border-4 border-white shadow-xl group-hover:-rotate-3 transition-transform"
                  />
                  <div className="absolute -bottom-2 -right-2 size-10 rounded-2xl bg-red-500 text-white flex items-center justify-center shadow-lg">
                    <Icon icon="lucide:shield" width={18} height={18} />
                  </div>
                </div>
                <h3 className="font-black text-xl text-red-600 mb-1">Security Lead</h3>
                <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-6">
                  Crypto & Audit
                </p>
                <div className="grid grid-cols-2 w-full gap-4 border-t border-[#F0F2F5] pt-6">
                  <div className="text-left">
                    <p className="text-[9px] font-black text-[#64748B] uppercase mb-1">
                      Asset Value
                    </p>
                    <p className="text-lg font-black font-mono text-emerald-600">+$158K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-[#64748B] uppercase mb-1">Logs</p>
                    <p className="text-lg font-black font-mono">842h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-4 border-dashed border-[#F0F2F5] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center space-y-4 group hover:bg-white hover:border-[#007AFF] transition-all">
              <div className="size-16 rounded-3xl bg-[#F0F2F5] text-[#64748B] flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <Icon icon="lucide:database-backup" width={32} height={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#64748B] group-hover:text-[#0F172A]">
                  Historical Archive
                </h3>
                <p className="text-xs text-[#64748B] max-w-[140px]">
                  9 additional specialists documented in logs.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
