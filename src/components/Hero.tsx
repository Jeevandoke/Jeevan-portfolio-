import React from 'react';
import { ArrowDown, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { HeroGraphic } from './HeroGraphic';
import { TARGET_CLIENTS } from '../data/portfolioData';

interface HeroProps {
  onOpenInquiry: () => void;
  onScrollToWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onScrollToWork }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Background subtle grid and lighting effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography, Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Small Badge above heading */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161f] border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>AI-POWERED WEB DESIGNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Websites that make your business{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8">
                look premium.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-xl">
              I’m Jeevan, a 16-year-old AI-powered website designer creating modern, high-converting websites for ambitious businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-view-work-cta"
                onClick={onScrollToWork}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-lets-work-cta"
                onClick={onOpenInquiry}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-neutral-200 bg-[#15151c] hover:bg-[#1f1f2a] border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Let’s Work Together</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

            {/* Small Trust Statement Underneath */}
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <div className="w-4 h-4 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 text-cyan-400" />
              </div>
              <p className="tracking-wide">
                <span className="text-neutral-200 font-medium">Designed with AI. Refined by a human.</span> Built for real businesses.
              </p>
            </div>
          </div>

          {/* Right Column: Sophisticated 3D AI Workstation Graphic */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <HeroGraphic />
          </div>
        </div>

        {/* Target Clients Banner */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>Crafted For High-Standard Businesses:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {TARGET_CLIENTS.map((item) => (
                <span
                  key={item.name}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-neutral-300 bg-[#131318] border border-white/[0.06] hover:border-cyan-500/30 hover:text-white transition-colors"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
