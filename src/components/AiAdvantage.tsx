import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Search, 
  FileText, 
  Layout, 
  Code, 
  Gauge, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const AiAdvantage: React.FC = () => {
  const [activeOrbIndex, setActiveOrbIndex] = useState<number>(0);

  const pipelineSteps = [
    { name: 'Idea', label: 'Client Brief & Goals' },
    { name: 'AI Research', label: 'Industry & Competitor Data' },
    { name: 'Concepts', label: 'Structure & Wireframing' },
    { name: 'Design', label: 'Visual Hierarchy & Palette' },
    { name: 'Development', label: 'Clean Code & Responsiveness' },
    { name: 'Human Refinement', label: 'Micro-Interactions & Polish' },
    { name: 'Final Website', label: 'High-Converting Flagship' }
  ];

  const floatingCapabilities = [
    { label: 'Research', icon: Search, desc: 'Market analysis & demographic patterns in minutes' },
    { label: 'Copy', icon: FileText, desc: 'Compelling headlines & value-prop hooks' },
    { label: 'UI Ideas', icon: Layout, desc: 'Exploring 20+ layout directions in one afternoon' },
    { label: 'Code Assistance', icon: Code, desc: 'Rapid boilerplate synthesis & responsive mechanics' },
    { label: 'Optimization', icon: Gauge, desc: 'Speed auditing, SEO structure & schema checks' },
    { label: 'Testing', icon: CheckCircle2, desc: 'Edge-case identification across viewports' },
  ];

  return (
    <section id="ai-advantage" className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0c0c10] overflow-hidden">
      {/* Ambient Neural Light Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/[0.05] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTELLIGENT WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            AI is my advantage.
          </h2>
          <p className="text-lg sm:text-xl text-cyan-300 font-medium italic">
            “AI helps me move faster — but the final decisions are mine.”
          </p>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Traditional agencies take weeks and bill thousands for preliminary research and drafting. I harness AI to eliminate dead time, focusing energy on high-level craftsmanship, brand resonance, and real conversion results.
          </p>
        </div>

        {/* Visual Pipeline with Animated Connectors */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6 text-center">
            End-to-End Delivery Pipeline
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-neutral-800 via-cyan-500/60 to-neutral-800 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
              {pipelineSteps.map((step, idx) => (
                <div
                  key={step.name}
                  onClick={() => setActiveOrbIndex(idx % floatingCapabilities.length)}
                  className="p-4 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-cyan-500/40 transition-all flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1c1c28] border border-white/10 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 text-white group-hover:text-cyan-300 flex items-center justify-center text-xs font-mono font-bold mb-2.5 transition-all">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {step.name}
                  </span>
                  <span className="text-[10px] text-neutral-400 mt-1 leading-tight">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Central Glowing AI Neural Orb & Floating Labels Showcase */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#13131b] to-[#0d0d12] border border-white/[0.12] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle neural network grid lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

          {/* Central glowing AI Core graphic */}
          <div className="relative flex flex-col items-center justify-center my-6">
            {/* Orb ambient rings */}
            <div className="relative flex items-center justify-center">
              <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-cyan-500/10 border border-cyan-500/30 animate-pulse flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-cyan-600/30 via-blue-600/20 to-violet-600/30 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                  <div className="text-center p-3">
                    <Sparkles className="w-8 h-8 text-cyan-300 mx-auto animate-bounce" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold block mt-1">
                      AI ENGINE
                    </span>
                    <span className="text-[9px] text-cyan-300/80 font-mono">
                      HUMAN-DIRECTED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Capability Labels Around the Orb */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10 pt-4">
            {floatingCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              const isSelected = activeOrbIndex === i;
              return (
                <div
                  key={cap.label}
                  onClick={() => setActiveOrbIndex(i)}
                  className={`p-4 rounded-xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-500/50 shadow-lg shadow-cyan-500/10 scale-102'
                      : 'bg-black/40 border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white">{cap.label}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
