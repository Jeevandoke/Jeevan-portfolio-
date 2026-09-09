import React from 'react';
import { MessageSquare, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  onOpenInquiry: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenInquiry }) => {
  return (
    <section id="testimonials" className="py-20 md:py-24 relative border-b border-white/[0.06] bg-[#0c0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>AUTHENTIC FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What Clients Say
          </h2>
        </div>

        {/* Subtle Animated Authentic Placeholder (strictly no fake reviews) */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-b from-[#13131a] to-[#0f0f15] border border-white/[0.08] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle glowing ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/[0.06] rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1a1a24] border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10">
              <Clock className="w-7 h-7 animate-pulse text-cyan-400" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                “Client testimonials coming soon.”
              </h3>
              <p className="text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
                I do not fabricate fake five-star reviews or invent fictitious company endorsements. As active client deployments wrap up, genuine verified feedback and conversion data will be published right here.
              </p>
            </div>

            {/* Founding Client Banner */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Open for Founding Client Collaborations</span>
              </div>

              <button
                onClick={onOpenInquiry}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group cursor-pointer"
              >
                <span>Be among the featured case studies</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
