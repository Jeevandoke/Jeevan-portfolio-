import React, { useState } from 'react';
import { 
  Sparkles, 
  Utensils, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Compass, 
  Cpu, 
  Star,
  Activity,
  Maximize2
} from 'lucide-react';

export const HeroGraphic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'ai'>('preview');

  return (
    <div
      id="hero-interactive-workstation"
      className="relative w-full max-w-[620px] mx-auto lg:max-w-none aspect-[4/3.4] sm:aspect-[4/3] flex items-center justify-center select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Background radial atmosphere & lighting */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none"></div>
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* 3D Main Workstation Container with gentle isometric tilt */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out transform hover:rotate-x-2 hover:-rotate-y-2"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-6deg) rotateX(4deg)',
        }}
      >
        {/* Floating Design Measurement Guides */}
        <div className="absolute -top-5 left-10 hidden sm:flex items-center gap-2 text-[10px] font-mono text-cyan-400/70 z-30">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></div>
          <span>Viewport: 1440 × 900 • 8px Grid Locked</span>
          <span className="text-white/20">|</span>
          <span className="text-violet-400/80">AI Core: Active</span>
        </div>

        {/* 1. Main Futuristic Glass Browser Window */}
        <div className="absolute inset-x-2 sm:inset-x-6 top-4 bottom-8 rounded-2xl bg-[#111116]/90 border border-white/[0.12] shadow-2xl shadow-black/80 overflow-hidden flex flex-col z-20 backdrop-blur-2xl">
          {/* Browser Chrome Header */}
          <div className="h-10 px-4 border-b border-white/[0.08] bg-[#16161d]/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <div className="hidden sm:flex items-center ml-3 px-3 py-1 rounded-md bg-black/40 border border-white/[0.06] text-[11px] font-mono text-neutral-300">
                <span className="text-emerald-400 mr-1.5">https://</span>
                <span>maasoli-cuisine.design</span>
                <span className="ml-2 text-cyan-400 text-[10px] px-1 py-0.2 rounded bg-cyan-950/60 border border-cyan-800/50">LIVE</span>
              </div>
            </div>

            {/* Quick Mode Switcher */}
            <div className="flex items-center gap-1 bg-black/30 p-0.5 rounded-lg border border-white/[0.05]">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                  activeTab === 'preview' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Mockup
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                  activeTab === 'code' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                AI Specs
              </button>
            </div>
          </div>

          {/* Browser Content Canvas */}
          <div className="relative flex-1 overflow-hidden bg-gradient-to-b from-[#13131a] to-[#0c0c10] p-4 sm:p-5 flex flex-col justify-between">
            {activeTab === 'preview' ? (
              <>
                {/* Mock Restaurant Navigation */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-cyan-400" />
                    <span className="font-serif tracking-widest text-xs uppercase text-white font-bold">
                      MAASOLI • SEASIDE
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-[10px] text-neutral-400 uppercase tracking-wider">
                    <span className="text-cyan-400 font-semibold">Story</span>
                    <span>Catch Menu</span>
                    <span>Experience</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-cyan-500 text-black shadow-sm shadow-cyan-500/40">
                    Reserve Table
                  </span>
                </div>

                {/* Mock Restaurant Hero Section */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 my-auto items-center pt-2">
                  <div className="sm:col-span-7 space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[9px] font-medium">
                      <Star className="w-2.5 h-2.5 fill-cyan-400 text-cyan-400" />
                      <span>Michelin Guide Selected • Heritage Coastal</span>
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight tracking-tight">
                      Coastal culinary alchemy, refined for discerning palates.
                    </h4>
                    <p className="text-[10px] sm:text-xs text-neutral-400 line-clamp-2">
                      Wood-fired spiced pomfret, wild coastal catch, and handcrafted botanical cocktails served right along the shoreline.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <button className="px-2.5 py-1 rounded bg-white text-black text-[10px] font-bold flex items-center gap-1 hover:bg-neutral-200 transition-colors">
                        <span>Explore Menu</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                      <span className="text-[9px] text-neutral-400">Average prep: 14 mins</span>
                    </div>
                  </div>

                  {/* Food Imagery & Menu Cards */}
                  <div className="sm:col-span-5 relative group">
                    <div className="relative rounded-xl overflow-hidden border border-white/[0.15] aspect-[4/3] shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=700&auto=format&fit=crop"
                        alt="Signature Coastal Grill dish"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                        <div className="text-[9px] text-white font-medium flex items-center justify-between w-full">
                          <span>Catch of the Day</span>
                          <span className="text-cyan-300 font-bold">$38</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Bottom Metrics Bar */}
                <div className="border-t border-white/[0.06] pt-2 flex items-center justify-between text-[10px] text-neutral-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> 100% Mobile Optimized
                    </span>
                    <span className="hidden sm:inline text-neutral-400">0.32s First Contentful Paint</span>
                  </div>
                  <span className="font-mono text-cyan-400/90 text-[9px]">Designed by Jeevan</span>
                </div>
              </>
            ) : (
              /* Code / AI Logic view */
              <div className="h-full flex flex-col justify-between font-mono text-[11px] p-2 bg-black/50 rounded-lg border border-white/[0.06]">
                <div className="space-y-1.5 text-neutral-300">
                  <div className="text-neutral-400">// AI-Assisted Layout Generation & Human Polish</div>
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">maasoliLayout</span> ={' '}
                    <span className="text-blue-400">craftArchitecture</span>({'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">industry:</span> <span className="text-emerald-300">'HighEnd_Restaurant'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">conversionFunnel:</span> <span className="text-emerald-300">'Direct_Reservations'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">visualTone:</span> <span className="text-emerald-300">'Minimal_Luxury'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">aiExplorationRounds:</span> <span className="text-yellow-300">12</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">humanEyeRefinement:</span> <span className="text-cyan-300">true</span>
                  </div>
                  <div>{'}'});</div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    <Activity className="w-3 h-3" /> WCAG AA Accessible
                  </span>
                  <span>Google Lighthouse: 99/100</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. Floating AI Interface Node (Top Left) */}
        <div
          className="absolute -top-3 -left-2 sm:-left-6 p-3 rounded-xl glass-panel shadow-xl shadow-cyan-500/10 border border-cyan-500/30 z-30 transition-transform duration-300 hover:scale-105"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono text-cyan-400 tracking-wider font-semibold">
                AI Synthesis Node
              </div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                Conversion +142%
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Floating Interactive Designer Cursor (Bottom Center-Right) */}
        <div
          className="absolute bottom-1 right-8 sm:right-16 z-40 transition-transform duration-300"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="relative flex items-center gap-1.5">
            {/* Custom SVG Vector Cursor */}
            <svg
              className="w-5 h-5 text-cyan-400 filter drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)] animate-bounce"
              style={{ animationDuration: '2.5s' }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 0l16 12-7.5 1.5 4.5 9-3 1.5-4.5-9-5.5 5.5z" />
            </svg>
            <div className="px-2.5 py-1 rounded-full bg-cyan-500 text-black font-semibold text-[10px] tracking-tight shadow-lg shadow-cyan-500/30 flex items-center gap-1">
              <span>Jeevan</span>
              <span className="text-[9px] bg-black/20 px-1 rounded">Designing</span>
            </div>
          </div>
        </div>

        {/* 4. Floating UI Card (Bottom Left) */}
        <div
          className="absolute -bottom-4 -left-2 sm:left-4 p-3 rounded-xl glass-panel shadow-2xl border border-white/[0.15] z-30 hidden sm:block transition-transform duration-300 hover:scale-105"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-400">Design Pipeline</div>
              <div className="text-xs font-semibold text-white">AI Speed + Human Polish</div>
            </div>
            <div className="ml-2 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
              Ready
            </div>
          </div>
        </div>

        {/* 5. Floating Color Palette / Typography Spec (Top Right) */}
        <div
          className="absolute -top-4 -right-2 sm:-right-4 p-2.5 rounded-xl glass-panel shadow-xl border border-white/[0.12] z-30 transition-transform duration-300 hover:scale-105 hidden md:block"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400">
              <span>PALETTE</span>
              <span className="text-cyan-400">#06B6D4</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-md bg-[#0a0a0c] border border-white/20"></span>
              <span className="w-4 h-4 rounded-md bg-[#16161d] border border-white/20"></span>
              <span className="w-4 h-4 rounded-md bg-cyan-500"></span>
              <span className="w-4 h-4 rounded-md bg-blue-600"></span>
              <span className="w-4 h-4 rounded-md bg-white"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
