import { Icon } from "@iconify/react";

export function GlobalReach() {
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
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#007AFF] text-white shadow-md shadow-blue-500/10 transition-all"
          >
            <Icon icon="lucide:globe" width={20} height={20} />
            <span className="text-sm font-bold">Global Reach</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#64748B] hover:bg-white hover:text-[#0F172A] transition-all"
          >
            <Icon icon="lucide:users-2" width={20} height={20} />
            <span className="text-sm font-bold">Specialist Force</span>
          </a>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#F0F2F5] flex items-center justify-between px-10 shrink-0 z-10">
          <div className="flex flex-col">
            <h1 className="text-xl font-black font-heading tracking-tight">
              Global Assets & Localization
            </h1>
            <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
              Multilingual Distribution & Visual Equity
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-5 py-2 rounded-2xl bg-white border border-[#F0F2F5] text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center gap-2">
              <Icon
                icon="lucide:check-circle"
                className="text-emerald-500"
                width={16}
                height={16}
              />
              Asset Sync: 100% Verified
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-12 space-y-12">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#0F172A] p-8 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-between">
              <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center text-orange-400 mb-6">
                <Icon icon="lucide:languages" width={24} height={24} />
              </div>
              <div>
                <p className="text-4xl font-black font-heading tracking-tighter mb-1">33</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  Verified Localizations
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-white/60 leading-relaxed">
                  Automated CI/CD synchronization across all production branches.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-[#F0F2F5] shadow-sm flex flex-col justify-between">
              <div className="size-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
                <Icon icon="lucide:image" width={24} height={24} />
              </div>
              <div>
                <p className="text-4xl font-black font-heading tracking-tighter mb-1">498</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">
                  Platform Assets
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-[#F0F2F5]">
                <p className="text-xs text-[#64748B] leading-relaxed">
                  UI Kits, Marketing collateral, and platform-specific visual artifacts.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-500/20 flex flex-col justify-between">
              <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
                <Icon icon="lucide:database-zap" width={24} height={24} />
              </div>
              <div>
                <p className="text-4xl font-black font-heading tracking-tighter mb-1">~54K</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                  Managed Locale Lines
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-xs text-white/90 font-bold flex items-center gap-2">
                  <Icon icon="lucide:refresh-cw" width={14} height={14} />
                  Real-time DB Sync Active
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-8 px-2">
              <h2 className="text-2xl font-black font-heading tracking-tight">Active Reach</h2>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">
                  Filter:
                </span>
                <div className="flex gap-1">
                  <button className="px-3 py-1 rounded-xl bg-blue-50 text-[#007AFF] text-[9px] font-black uppercase">
                    Middle East
                  </button>
                  <button className="px-3 py-1 rounded-xl bg-white text-[#64748B] border border-[#F0F2F5] text-[9px] font-black uppercase">
                    Europe
                  </button>
                  <button className="px-3 py-1 rounded-xl bg-white text-[#64748B] border border-[#F0F2F5] text-[9px] font-black uppercase">
                    Asia
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center">
                <Icon
                  icon="twemoji:flag-israel"
                  width={32}
                  height={32}
                  className="mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <h3 className="text-sm font-black text-[#0F172A] mb-1">Hebrew</h3>
                <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                  RTL Support
                </p>
                <div className="w-full h-1 bg-emerald-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center">
                <Icon
                  icon="twemoji:flag-united-arab-emirates"
                  width={32}
                  height={32}
                  className="mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <h3 className="text-sm font-black text-[#0F172A] mb-1">Arabic</h3>
                <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                  RTL Support
                </p>
                <div className="w-full h-1 bg-emerald-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center">
                <Icon
                  icon="twemoji:flag-united-states"
                  width={32}
                  height={32}
                  className="mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <h3 className="text-sm font-black text-[#0F172A] mb-1">English (US)</h3>
                <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                  Primary LTR
                </p>
                <div className="w-full h-1 bg-emerald-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center">
                <Icon
                  icon="twemoji:flag-france"
                  width={32}
                  height={32}
                  className="mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <h3 className="text-sm font-black text-[#0F172A] mb-1">French</h3>
                <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                  Verified
                </p>
                <div className="w-full h-1 bg-emerald-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center">
                <Icon
                  icon="twemoji:flag-germany"
                  width={32}
                  height={32}
                  className="mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <h3 className="text-sm font-black text-[#0F172A] mb-1">German</h3>
                <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                  Verified
                </p>
                <div className="w-full h-1 bg-emerald-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white p-6 rounded-[1.75rem] border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center border-dashed border-2">
                <div className="size-8 rounded-full bg-[#F0F2F5] flex items-center justify-center mb-4 text-[#64748B] font-black text-xs">
                  +28
                </div>
                <h3 className="text-sm font-black text-[#64748B] mb-1">More Regions</h3>
                <p className="text-[9px] font-black text-[#64748B] uppercase tracking-widest">
                  Sync Pending
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="bg-[#0F172A] rounded-[3rem] p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:scale-[1.7] transition-transform duration-[2000ms]">
                <Icon icon="lucide:layers" width={200} height={200} />
              </div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black font-heading tracking-tight mb-4 leading-tight">
                      Unified Visual
                      <br />
                      Identity Repository
                    </h2>
                    <p className="text-white/60 leading-relaxed max-w-sm">
                      Every icon, illustration, and interface element is categorized and
                      cross-referenced with regional localization rules.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-xs font-bold">Marketing & Creative Assets</span>
                      <span className="text-xs font-mono font-black text-blue-400">182 Units</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-xs font-bold">Platform Interface Icons</span>
                      <span className="text-xs font-mono font-black text-blue-400">214 Units</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-xs font-bold">Regional Brand Variants</span>
                      <span className="text-xs font-mono font-black text-blue-400">102 Units</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center space-y-6 bg-white/5 rounded-[2.5rem] p-10 border border-white/10 backdrop-blur-sm">
                  <div className="relative">
                    <svg className="size-48 rotate-[-90deg]">
                      <circle
                        cx={96}
                        cy={96}
                        r={88}
                        stroke="currentColor"
                        stroke-width={12}
                        fill="transparent"
                        className="text-white/5"
                      />
                      <circle
                        cx={96}
                        cy={96}
                        r={88}
                        stroke="currentColor"
                        stroke-width={12}
                        fill="transparent"
                        className="text-blue-500"
                        stroke-dasharray={552.9}
                        stroke-dashoffset={0}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black font-heading tracking-tighter">498</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/40">
                        Total Artifacts
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                    Validated for Global Scale
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
