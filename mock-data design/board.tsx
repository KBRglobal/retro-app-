import { Icon } from "@iconify/react";

export function Board() {
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
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#007AFF] text-white shadow-md shadow-blue-500/10 transition-all"
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
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#64748B] hover:bg-white hover:text-[#0F172A] transition-all"
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
        <div className="p-4 mt-auto border-t border-[#F0F2F5]">
          <div className="flex items-center gap-3 p-3 bg-white/40 rounded-2xl border border-[#F0F2F5]">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocL3RDUXzrSX7ED_n5FwkhJOEyz7hqwqb-Zgq_bSXjT6NE6NIwxn=s96-c"
              className="size-8 rounded-full shadow-sm"
              alt="CTO"
            />
            <div className="overflow-hidden">
              <p className="text-[11px] font-bold truncate">travi Quackson</p>
              <span className="px-1.5 py-0.5 rounded bg-blue-100 text-[#007AFF] text-[8px] font-black uppercase">
                CTO Badge
              </span>
            </div>
          </div>
        </div>
      </aside>
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
              <button className="px-4 py-1.5 rounded-xl text-[10px] font-bold bg-white shadow-sm text-[#0F172A]">
                USA
              </button>
              <button className="px-4 py-1.5 rounded-xl text-[10px] font-bold text-[#64748B]">
                UAE
              </button>
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
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-black text-xs">
                  01
                </div>
                <div>
                  <h2 className="font-black text-lg tracking-tight">
                    Security & Cryptography Core
                  </h2>
                  <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest">
                    Epic Replacement Value: $242,400
                  </p>
                </div>
              </div>
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="size-8 rounded-full border-2 border-white shadow-sm"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="size-8 rounded-full border-2 border-white shadow-sm"
                />
                <div className="size-8 rounded-full bg-[#F0F2F5] flex items-center justify-center text-[10px] font-bold">
                  +5
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer group flex items-center gap-6">
                <div className="size-10 shrink-0 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon icon="lucide:check" width={20} height={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-mono font-black text-[#64748B] bg-[#F0F2F5] px-2 py-0.5 rounded">
                      MK-0142
                    </span>
                    <h3 className="text-sm font-extrabold text-[#0F172A] truncate">
                      Encryption architecture for cross-repo communication
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-lg bg-red-50 text-red-600 text-[9px] font-black uppercase tracking-wider">
                        Security
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-[#64748B] text-[9px] font-black uppercase tracking-wider">
                        Eng-Lead
                      </span>
                    </div>
                    <div className="h-3 w-px bg-[#F0F2F5]" />
                    <div className="flex items-center gap-3 text-[10px] font-bold text-[#64748B]">
                      <span className="flex items-center gap-1">
                        <Icon icon="lucide:git-commit" width={14} height={14} /> 14 Commits
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon icon="lucide:clock" width={14} height={14} /> 12h Build
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-black font-mono tracking-tight">$14,400</p>
                  <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                    Market Value
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer group flex items-center gap-6 opacity-80">
                <div className="size-10 shrink-0 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-xl">
                  <Icon icon="lucide:check" width={20} height={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-mono font-black text-[#64748B] bg-[#F0F2F5] px-2 py-0.5 rounded">
                      MK-0145
                    </span>
                    <h3 className="text-sm font-extrabold text-[#0F172A] truncate">
                      Cold-wallet signing bridge for mobile app
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-lg bg-red-50 text-red-600 text-[9px] font-black uppercase tracking-wider">
                        Security
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase tracking-wider">
                        Mobile
                      </span>
                    </div>
                    <div className="h-3 w-px bg-[#F0F2F5]" />
                    <div className="flex items-center gap-3 text-[10px] font-bold text-[#64748B]">
                      <span className="flex items-center gap-1">
                        <Icon icon="lucide:git-commit" width={14} height={14} /> 8 Commits
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon icon="lucide:clock" width={14} height={14} /> 18h Build
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-black font-mono tracking-tight">$21,600</p>
                  <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                    Market Value
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
