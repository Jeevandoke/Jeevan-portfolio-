import React from 'react';
import { Compass, Cpu, CheckCircle2, Sparkles, Infinity as InfinityIcon } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section id="why-me" className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Young. Hungry. Different.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400">
            I don’t carry legacy agency baggage, inflated fees, or weeks of unnecessary meetings. I deliver modern, sharp websites built for the realities of today’s internet.
          </p>
        </div>

        {/* Feature Cards Grid (3 Large Cards + 1 Stat Card) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Fresh Perspective */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                Fresh Perspective
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                I approach websites with a modern, internet-native design mindset. I know what makes younger and modern audiences stop scrolling, engage, and trust a business.
              </p>
            </div>
            <div className="pt-6 border-t border-white/[0.06] text-xs font-mono text-cyan-400">
              #InternetNative
            </div>
          </div>

          {/* Card 2: AI Advantage */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                AI Advantage
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                I use AI to research faster, explore more ideas and build efficiently. What traditionally takes weeks is compressed into focused, high-precision iterations.
              </p>
            </div>
            <div className="pt-6 border-t border-white/[0.06] text-xs font-mono text-blue-400">
              #RapidExecution
            </div>
          </div>

          {/* Card 3: Detail Obsessed */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-105 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                Detail Obsessed
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Every spacing, interaction, section and CTA is designed intentionally. No generic templates, no messy padding, and no cut corners.
              </p>
            </div>
            <div className="pt-6 border-t border-white/[0.06] text-xs font-mono text-violet-400">
              #PixelPerfect
            </div>
          </div>

          {/* 4th Stat Card as requested: 16 Years Old & ∞ Ideas */}
          <div className="md:col-span-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#12121a] via-[#161622] to-[#12121a] border border-white/[0.12] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                A Different Kind of Designer
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Authentic energy meets cutting-edge execution.
              </h4>
              <p className="text-sm text-neutral-400 max-w-xl">
                Ready to outwork older agencies by leveraging state-of-the-art AI design pipelines with genuine care for every client’s success.
              </p>
            </div>

            {/* Stylish stats display */}
            <div className="flex items-center gap-8 sm:gap-12 bg-black/40 px-8 py-5 rounded-2xl border border-white/[0.08]">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                  16
                </div>
                <div className="text-xs uppercase font-mono text-neutral-400 tracking-wider mt-1">
                  Years Old
                </div>
              </div>

              <div className="w-[1px] h-12 bg-white/10"></div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono tracking-tight flex items-center justify-center">
                  <InfinityIcon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
                </div>
                <div className="text-xs uppercase font-mono text-cyan-300 tracking-wider mt-1">
                  Ideas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
