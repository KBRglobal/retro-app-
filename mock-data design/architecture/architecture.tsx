import { Icon } from "@iconify/react";

export function Architecture() {
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
            <Icon icon="lucide:cpu" width={20} height={20} />
            <span className="text-sm font-bold">Stack & Arch</span>
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
            <Icon icon="lucide:globe" width={20} height={20} />
            <span className="text-sm font-bold">Global Reach</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#64748B] hover:bg-white hover:text-[#0F172A] transition-all"
          >
            <Icon icon="lucide:bar-chart-3" width={20} height={20} />
            <span className="text-sm font-bold">ROI Analysis</span>
          </a>
          <div className="h-px bg-[#F0F2F5] mx-4 my-2" />
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#64748B] hover:bg-white hover:text-[#0F172A] transition-all"
          >
            <Icon icon="lucide:users-2" width={20} height={20} />
            <span className="text-sm font-bold">Specialist Force</span>
          </a>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 flex items-center justify-between px-10 shrink-0 z-10 border-b border-[#F0F2F5] bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black font-heading tracking-tight">System Architecture</h1>
            <div className="h-4 w-px bg-[#F0F2F5]" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-lg">
              High Availability
            </span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-10 space-y-12">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0F172A] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                <Icon icon="lucide:network" width={240} height={240} />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black font-heading mb-4">
                  Hybrid-Cloud Infrastructure
                </h2>
                <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-10">
                  Scalable microservices architecture designed for zero-latency cross-border
                  transactions and real-time cryptography.
                </p>
                <div className="flex gap-12">
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">
                      Primary Node
                    </p>
                    <p className="text-xl font-bold">AWS us-east-1</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">
                      Crypto Bridge
                    </p>
                    <p className="text-xl font-bold">Web3-Infura</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">
                      Uptime
                    </p>
                    <p className="text-xl font-bold text-emerald-400">99.99%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-[#F0F2F5] p-10 shadow-sm flex flex-col justify-center items-center text-center space-y-6">
              <div className="size-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/10">
                <Icon icon="lucide:database-zap" width={40} height={40} />
              </div>
              <div>
                <h3 className="text-2xl font-black font-heading">Data Engine</h3>
                <p className="text-sm text-[#64748B] mt-2">
                  PostgreSQL + Vector search integration for RAG AI workflows.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black font-heading tracking-tight mb-8">
              Engineering Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="bg-white p-6 rounded-[2rem] border border-[#F0F2F5] shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all">
                <Icon icon="mdi:react" className="text-blue-400 mb-4" width={48} height={48} />
                <span className="text-xs font-black uppercase tracking-widest">React 18</span>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-[#F0F2F5] shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all">
                <Icon
                  icon="mdi:language-typescript"
                  className="text-blue-600 mb-4"
                  width={48}
                  height={48}
                />
                <span className="text-xs font-black uppercase tracking-widest">TypeScript</span>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-[#F0F2F5] shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all">
                <Icon
                  icon="simple-icons:tailwindcss"
                  className="text-cyan-400 mb-4"
                  width={48}
                  height={48}
                />
                <span className="text-xs font-black uppercase tracking-widest">Tailwind</span>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-[#F0F2F5] shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all">
                <Icon icon="mdi:nodejs" className="text-emerald-500 mb-4" width={48} height={48} />
                <span className="text-xs font-black uppercase tracking-widest">Node.js</span>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-[#F0F2F5] shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all">
                <Icon
                  icon="simple-icons:openai"
                  className="text-[#0F172A] mb-4"
                  width={48}
                  height={48}
                />
                <span className="text-xs font-black uppercase tracking-widest">OpenAI API</span>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-[#F0F2F5] shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all">
                <Icon icon="mdi:docker" className="text-blue-500 mb-4" width={48} height={48} />
                <span className="text-xs font-black uppercase tracking-widest">Docker</span>
              </div>
            </div>
          </section>
          <section className="p-10 bg-white border border-[#F0F2F5] rounded-[3rem] shadow-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="size-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shadow-sm">
                <Icon icon="lucide:shield-check" width={24} height={24} />
              </div>
              <h2 className="text-2xl font-black font-heading tracking-tight">
                Cybersecurity Hardening
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <h3 className="font-black text-sm uppercase tracking-widest text-[#0F172A]">
                  End-to-End Encryption
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  AES-256 at rest and TLS 1.3 in transit. RSA-4096 verified key exchange protocols.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-black text-sm uppercase tracking-widest text-[#0F172A]">
                  Zero Trust Access
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Identity-aware proxy with multi-factor authentication for all administrative
                  terminals.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-black text-sm uppercase tracking-widest text-[#0F172A]">
                  Real-time Audit
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Immutable log streaming to specialized audit repositories for retrospective
                  compliance.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
