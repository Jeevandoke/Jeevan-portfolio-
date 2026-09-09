import React from 'react';
import { User, Sparkles, Zap, Target, ArrowRight, ShieldCheck } from 'lucide-react';

export const AboutIntro: React.FC = () => {
  const journeyNodes = [
    { label: '16 years old', desc: 'Native digital mindset' },
    { label: 'Learning', desc: 'Absorbing modern design systems' },
    { label: 'Designing', desc: 'Crafting pixel-perfect layouts' },
    { label: 'Building', desc: 'Pairing AI speed with code' },
    { label: 'Helping businesses grow', desc: 'Turning clicks into loyal clients' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0c0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Badge Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden glass-panel border border-white/[0.12] p-6 shadow-2xl">
              {/* Designer Card Canvas */}
              <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-gradient-to-br from-[#181822] to-[#0f0f15] border border-white/[0.08] flex flex-col justify-between p-6">
                {/* Visual Ambient Light */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl pointer-events-none"></div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-cyan-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>16 • DESIGNER • AI BUILDER</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">#AVAILABLE</span>
                </div>

                {/* Aesthetic Graphic Avatar / Designer Monogram */}
                <div className="relative z-10 my-auto text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-2xl shadow-cyan-500/25">
                    <div className="w-full h-full rounded-2xl bg-[#0c0c10] flex items-center justify-center">
                      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 to-white">
                        J
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Jeevan</h3>
                    <p className="text-xs text-neutral-400 font-mono mt-0.5">
                      AI-Powered Website Designer
                    </p>
                  </div>
                </div>

                {/* Bottom Quote Pill */}
                <div className="relative z-10 p-3 rounded-xl bg-black/50 border border-white/[0.08] text-center">
                  <p className="text-xs italic text-neutral-300 font-medium">
                    “I started early because I wanted to build.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Confident Message & Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT JEEVAN</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                “I’m Jeevan.”
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                I’m a 16-year-old website designer focused on helping businesses build a stronger presence online. I combine AI tools, modern design principles, and conversion-focused layouts to create websites that don't just look good — they help businesses make a better first impression.
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Most businesses are still stuck with sluggish websites built years ago that fail to convert modern customers. By combining the speed of artificial intelligence with a human eye for typography, layout, and polish, I deliver custom digital storefronts at agency-grade quality.
              </p>
            </div>

            {/* Visual Timeline Requested by User */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                The Progression
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {journeyNodes.map((node, index) => (
                  <div
                    key={node.label}
                    className="p-3 rounded-xl bg-[#14141c] border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between relative group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold">
                        0{index + 1}
                      </span>
                      {index < journeyNodes.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-neutral-500 hidden sm:block group-hover:text-cyan-400 transition-colors" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {node.label}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1 leading-tight">
                        {node.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credibility & Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#121218] border border-white/[0.06] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Internet-Native Speed</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    I grew up with the modern web. I iterate fast, utilize cutting-edge AI workflows, and despise slow turnaround times.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121218] border border-white/[0.06] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-950/80 text-violet-400 border border-violet-800/50 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Result-Driven Execution</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Every design element is calibrated for business outcomes: phone calls, table reservations, and inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
