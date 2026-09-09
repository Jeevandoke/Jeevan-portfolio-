import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  PenTool, 
  Code2, 
  CheckCircle, 
  Cpu, 
  UserCheck, 
  ArrowRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 2:
        return <PenTool className="w-5 h-5 text-violet-400" />;
      case 3:
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 4:
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0c0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              How I Build
            </h2>
          </div>
          <div className="p-4 rounded-xl bg-[#14141c] border border-white/[0.08] max-w-md">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>CORE PHILOSOPHY</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              AI is a powerful accelerator, not a replacement for design judgment. Every layout, color choice, and font pairing is curated and polished by a human designer.
            </p>
          </div>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                activeStep === idx
                  ? 'bg-[#15151f] border-cyan-500/50 shadow-xl shadow-cyan-500/10 -translate-y-1'
                  : 'bg-[#101015] border-white/[0.06] hover:border-white/20 hover:bg-[#13131a]'
              }`}
            >
              {/* Top Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#181822] border border-white/[0.08] flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* AI vs Human indicators */}
              <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-[10px]">
                  <div className="flex items-center gap-1.5 text-cyan-300 font-semibold mb-0.5">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    <span>AI ACCELERATION</span>
                  </div>
                  <span className="text-neutral-300">{step.aiAspect}</span>
                </div>

                <div className="p-2 rounded-lg bg-[#1a1a24] border border-white/[0.08] text-[10px]">
                  <div className="flex items-center gap-1.5 text-neutral-200 font-semibold mb-0.5">
                    <UserCheck className="w-3 h-3 text-emerald-400" />
                    <span>HUMAN EYE</span>
                  </div>
                  <span className="text-neutral-300">{step.humanAspect}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
