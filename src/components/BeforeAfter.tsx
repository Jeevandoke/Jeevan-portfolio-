import React, { useState, useRef, useCallback } from 'react';
import { 
  Sliders, 
  XCircle, 
  CheckCircle2, 
  Sparkles, 
  Smartphone, 
  AlertTriangle,
  Flame,
  ArrowLeftRight
} from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="comparison" className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            From Ordinary → Premium
          </h2>
          <p className="text-base sm:text-lg text-neutral-300">
            Drag the slider to see how AI-driven layout architecture and human design polish turn an outdated web presence into a high-converting digital flagship.
          </p>

          {/* Quick preset buttons */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSliderPosition(15)}
              className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                sliderPosition < 30 ? 'bg-red-950/40 border-red-500/50 text-red-300' : 'bg-[#14141c] border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              Focus Before
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                sliderPosition >= 30 && sliderPosition <= 70 ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-300' : 'bg-[#14141c] border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              50 / 50 Split
            </button>
            <button
              onClick={() => setSliderPosition(85)}
              className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                sliderPosition > 70 ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300' : 'bg-[#14141c] border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              Focus After
            </button>
          </div>
        </div>

        {/* Draggable Interactive Comparison Stage */}
        <div
          ref={containerRef}
          id="before-after-slider-container"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/10] sm:aspect-[21/10] max-h-[560px] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0e0e14] shadow-2xl select-none cursor-ew-resize"
        >
          {/* 1. RIGHT SIDE: AFTER (High-End Premium Modern Design) */}
          <div className="absolute inset-0 bg-[#0e0e14] flex flex-col">
            {/* Mock Modern Browser Bar */}
            <div className="h-8 px-4 bg-[#14141c] border-b border-white/[0.08] flex items-center justify-end">
              <span className="px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold tracking-wider">
                AFTER: JEEVAN REDESIGN
              </span>
            </div>

            {/* Premium UI Body */}
            <div className="relative flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#121218] via-[#0f0f15] to-[#0a0a0e]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Modern Nav */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold tracking-widest text-white uppercase font-mono">
                    L'ARDOISE • BISTRO
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold">
                    VERIFIED
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-400 hidden sm:inline">Seasonal Tasting Menu</span>
                  <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/25">
                    Book a Table
                  </button>
                </div>
              </div>

              {/* Modern Hero Content */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 my-auto items-center">
                <div className="sm:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Farm-to-Table Culinary Artistry</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    An unforgettable gastronomic escape in the heart of the city.
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-lg">
                    Immerse yourself in seasonal textures, natural biodynamic wines, and intimate ambiance crafted for celebrations.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <button className="px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-neutral-200">
                      Reserve Online →
                    </button>
                    <span className="text-xs text-neutral-400">⚡ Instant Confirmation</span>
                  </div>
                </div>

                <div className="sm:col-span-4 hidden sm:block">
                  <div className="rounded-xl overflow-hidden border border-white/[0.15] shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop"
                      alt="Modern gourmet cuisine"
                      className="w-full h-36 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Modern Footer Metrics */}
              <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 text-[11px] text-neutral-400">
                <div className="flex items-center gap-4">
                  <span className="text-emerald-400 font-semibold">✓ 100% Mobile Ready</span>
                  <span className="hidden sm:inline">✓ 0.28s Load Speed</span>
                </div>
                <span className="text-cyan-400 font-mono text-[10px]">+230% Online Reservations</span>
              </div>
            </div>
          </div>

          {/* 2. LEFT SIDE: BEFORE (Outdated, clunky, unreadable 2010s design) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-cyan-400 bg-[#3a3a44] shadow-2xl z-20"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Inner canvas kept at full width so it reveals naturally */}
            <div
              className="absolute inset-0 flex flex-col bg-[#e8e4db] text-neutral-900"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '1000px',
              }}
            >
              {/* Outdated Browser Header */}
              <div className="h-8 px-4 bg-[#c8c4b7] border-b border-neutral-400 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-mono font-bold tracking-wider">
                  BEFORE: OUTDATED & CLUTTERED
                </span>
                <span className="text-[10px] text-neutral-600 font-serif">http://bistro-city-2012.net/index.html</span>
              </div>

              {/* Clunky 2012 UI Content */}
              <div className="relative flex-1 p-6 sm:p-10 flex flex-col justify-between font-serif">
                {/* Bad Nav */}
                <div className="flex flex-wrap items-center justify-between border-b-2 border-dashed border-neutral-500 pb-2">
                  <div className="text-lg font-black tracking-normal text-[#800000] underline">
                    WELCOME TO L'ARDOISE BISTRO (EST. 2004)
                  </div>
                  <div className="text-xs text-blue-800 underline space-x-2">
                    <span>HOME</span> | <span>ABOUT US</span> | <span>MENU (PDF)</span> | <span>CONTACT</span>
                  </div>
                </div>

                {/* Bad Cluttered Body */}
                <div className="my-auto space-y-2 py-2">
                  <div className="p-2 bg-yellow-200 border border-red-500 text-[11px] text-red-900 font-sans font-bold text-center animate-pulse">
                    ⚠️ PLEASE CALL 555-0192 BETWEEN 2PM-4PM TO BOOK TABLES - DO NOT EMAIL US
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-800">
                    The Best Food In The Neighborhood - Family Owned!
                  </h3>
                  <p className="text-xs text-neutral-700 font-sans max-w-lg leading-relaxed">
                    Come on down and try our special steaks, daily soups, and dessert cart. Parking is limited on weekends. Closed on Mondays and alternate holidays. Please check back regularly for updates.
                  </p>
                  <div className="pt-1 flex gap-2">
                    <button className="px-3 py-1 bg-neutral-300 border-2 border-neutral-600 text-neutral-900 text-xs font-sans">
                      Download PDF Menu (14MB)
                    </button>
                    <button className="px-3 py-1 bg-neutral-300 border-2 border-neutral-600 text-neutral-900 text-xs font-sans">
                      Guestbook
                    </button>
                  </div>
                </div>

                {/* Bad Cluttered Footer */}
                <div className="border-t border-neutral-400 pt-2 text-[10px] font-sans text-neutral-600 flex justify-between">
                  <span>Best viewed in Internet Explorer 8 (1024x768)</span>
                  <span>Visitor Count: 004829</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Slider Handle Bar */}
          <div
            className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-9 h-9 rounded-full bg-cyan-500 text-black shadow-lg shadow-cyan-500/50 flex items-center justify-center border-2 border-white pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        {/* Detailed Feature Comparison Grid as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Left: BEFORE Issues */}
          <div className="p-6 rounded-2xl bg-[#131116] border border-red-500/20 space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm tracking-wider uppercase font-mono">
              <XCircle className="w-4 h-4" />
              <span>BEFORE: Typical Outdated Site</span>
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">•</span>
                <span><strong>Outdated design:</strong> Looks forgotten, breaks trust, and repels younger discerning customers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">•</span>
                <span><strong>Poor mobile layout:</strong> Requires pinching and zooming; fails on modern smartphones.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">•</span>
                <span><strong>Weak branding:</strong> Generic typography, low-contrast text, and zero distinct visual voice.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">•</span>
                <span><strong>Difficult navigation:</strong> PDF menus, broken links, and friction that loses sales to competitors.</span>
              </li>
            </ul>
          </div>

          {/* Right: AFTER Benefits */}
          <div className="p-6 rounded-2xl bg-[#11161d] border border-cyan-500/30 space-y-4">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm tracking-wider uppercase font-mono">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>AFTER: Jeevan Premium Redesign</span>
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Modern UI:</strong> Sleek dark/clean aesthetics that instantly position the business as a leader.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Mobile-first design:</strong> Flawless touch targets, rapid tap-to-call, and thumb-friendly navigation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Strong visual hierarchy:</strong> Clean typography and balanced negative space guiding customer eyes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Clear CTAs & Premium branding:</strong> Direct table bookings, inquiry forms, and instant trust.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
