import { Icon } from "@iconify/react";

export function DesignLanguage() {
  return (
    <div className="min-h-screen bg-[#FBFBFF] text-[#0F172A] p-12 pb-40 font-sans max-w-7xl mx-auto space-y-24">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-[1.25rem] bg-blue-50 text-blue-600 text-xs font-black tracking-[0.2em] shadow-sm shadow-blue-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            LUXURY COMPONENT SYSTEM 3.0
          </div>
          <h1 className="text-6xl font-black font-heading tracking-tighter text-[#0F172A] leading-[0.9]">
            Visual
            <br />
            Identity.
          </h1>
          <p className="text-[#64748B] text-xl max-w-xl leading-relaxed">
            A high-fidelity design language engineered for high-performance CTO intelligence and
            retrospective audits.
          </p>
        </div>
        <div className="flex items-center gap-6 bg-white p-6 rounded-[2.5rem] border border-[#F0F2F5] shadow-xl">
          <div className="flex -space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="size-14 rounded-2xl border-4 border-white shadow-lg"
              alt="User"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="size-14 rounded-2xl border-4 border-white shadow-lg"
              alt="User"
            />
            <div className="size-14 rounded-2xl border-4 border-white bg-[#0F172A] text-white flex items-center justify-center text-xs font-black shadow-lg">
              CTO
            </div>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-20">
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="size-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center shadow-lg shadow-black/10">
                <Icon icon="lucide:users" width={24} height={24} />
              </div>
              <h2 className="text-2xl font-black font-heading tracking-tight text-[#0F172A]">
                Specialist Identity
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-white border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-default group">
                <div className="size-8 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                  <Icon icon="lucide:cpu" width={16} height={16} />
                </div>
                <span className="text-sm font-black text-[#0F172A] uppercase tracking-wider">
                  AI Architect
                </span>
              </div>
              <div className="flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-white border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-default group">
                <div className="size-8 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                  <Icon icon="lucide:shield" width={16} height={16} />
                </div>
                <span className="text-sm font-black text-[#0F172A] uppercase tracking-wider">
                  Security lead
                </span>
              </div>
              <div className="flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-white border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-default group">
                <div className="size-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Icon icon="lucide:code-2" width={16} height={16} />
                </div>
                <span className="text-sm font-black text-[#0F172A] uppercase tracking-wider">
                  Backend core
                </span>
              </div>
              <div className="flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-white border border-[#F0F2F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-default group">
                <div className="size-8 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
                  <Icon icon="lucide:palette" width={16} height={16} />
                </div>
                <span className="text-sm font-black text-[#0F172A] uppercase tracking-wider">
                  Creative Dir
                </span>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="size-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/10">
                <Icon icon="lucide:database" width={24} height={24} />
              </div>
              <h2 className="text-2xl font-black font-heading tracking-tight text-[#0F172A]">
                Engineering Artifact
              </h2>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-[#F0F2F5] shadow-sm hover:shadow-2xl transition-all cursor-pointer group flex items-start gap-8">
              <div className="size-16 rounded-[1.5rem] bg-indigo-50 flex flex-col items-center justify-center text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                  MAY
                </span>
                <span className="text-2xl font-black leading-none tracking-tighter">12</span>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-black tracking-tight text-[#0F172A]">
                    RSA-2048 Cryptography Implementation
                  </h3>
                  <span className="px-3 py-0.5 rounded-xl bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em]">
                    Verified
                  </span>
                </div>
                <p className="text-[#64748B] text-base leading-relaxed">
                  Full architecture audit completed with end-to-end encryption for cross-service
                  authenticated communication.
                </p>
                <div className="flex items-center gap-8 text-[11px] font-black text-[#64748B] uppercase tracking-[0.1em]">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="lucide:git-commit"
                      width={16}
                      height={16}
                      className="text-indigo-400"
                    />{" "}
                    14 Commits Verified
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon icon="lucide:clock" width={16} height={16} className="text-indigo-400" />{" "}
                    12.0 Logged Hours
                  </span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <Icon icon="lucide:banknote" width={16} height={16} /> $14.4K Value
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:col-span-4 space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <Icon icon="lucide:trending-up" width={24} height={24} />
              </div>
              <h2 className="text-2xl font-black font-heading tracking-tight text-[#0F172A]">
                Asset Valuation
              </h2>
            </div>
            <div className="relative bg-[#0F172A] rounded-[3rem] p-10 shadow-2xl shadow-blue-900/40 overflow-hidden group">
              <div className="absolute -top-12 -right-12 size-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-[2000ms]" />
              <div className="relative space-y-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">
                    Total Efficiency Savings
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white/30">$</span>
                    <span className="text-7xl font-black font-heading tracking-tighter text-white">
                      1.15M
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-[1.75rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">
                      Conventional Build Cost
                    </p>
                    <p className="text-2xl font-black text-white font-mono">$1,240,000</p>
                  </div>
                  <div className="p-6 rounded-[1.75rem] bg-gradient-to-br from-blue-600 to-indigo-600 border border-blue-400/30 shadow-xl shadow-blue-500/20">
                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-2">
                      Realized AI/Human Cost
                    </p>
                    <p className="text-2xl font-black text-white font-mono">$24,900</p>
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-3">
                  <Icon
                    icon="lucide:check-circle"
                    width={20}
                    height={20}
                    className="text-emerald-400"
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                    Audited & Verified Artifacts
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-[2.5rem] p-10 border border-[#F0F2F5] shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex flex-col items-center text-center space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#64748B]">
                Active Velocity Engine
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black font-heading tracking-tighter text-[#0F172A]">
                  14.2
                </span>
                <span className="text-3xl font-black text-blue-600">x</span>
              </div>
              <p className="text-sm font-bold text-[#64748B] max-w-[180px]">
                Multiplier vs. Standard Dev Cycles
              </p>
              <Icon
                icon="lucide:zap"
                className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]"
                width={48}
                height={48}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
