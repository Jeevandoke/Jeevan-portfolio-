import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Copy, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

interface ContactCtaProps {
  onOpenInquiry: () => void;
  onScrollToWork: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onOpenInquiry, onScrollToWork }) => {
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);

  const contactChannels = [
    {
      name: 'WhatsApp',
      displayValue: '+91 89761 67611',
      rawValue: '+918976167611',
      href: 'https://wa.me/918976167611?text=Hi%20Jeevan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project.',
      icon: MessageCircle,
      desc: 'Instant direct chat, quick voice notes & real-time project inquiries',
      actionText: 'Chat on WhatsApp',
      copyText: 'Copy Number',
      badge: 'Fastest Reply'
    },
    {
      name: 'Instagram',
      displayValue: '@rorantswebs',
      rawValue: 'https://www.instagram.com/rorantswebs?stkn=MWVucGFjN2hqbWdqaA==',
      href: 'https://www.instagram.com/rorantswebs?stkn=MWVucGFjN2hqbWdqaA==',
      icon: Instagram,
      desc: 'Follow design releases, behind-the-scenes & send direct messages',
      actionText: 'Open Instagram',
      copyText: 'Copy Handle',
      badge: 'Portfolio & DMs'
    },
    {
      name: 'Email',
      displayValue: 'jdoke4398@gmail.com',
      rawValue: 'jdoke4398@gmail.com',
      href: 'mailto:jdoke4398@gmail.com?subject=Website%20Design%20Project%20Inquiry%20%E2%80%94%20Jeevan',
      icon: Mail,
      desc: 'For formal proposals, detailed design briefs and project contracts',
      actionText: 'Send Email',
      copyText: 'Copy Email',
      badge: 'Formal Briefs'
    }
  ];

  const handleCopy = (name: string, val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedChannel(name);
    setTimeout(() => setCopiedChannel(null), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#0a0a0c] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-violet-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant Heroic CTA Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#13131b] via-[#101016] to-[#0d0d12] border border-white/[0.12] p-8 sm:p-14 lg:p-20 text-center space-y-8 shadow-2xl shadow-black relative overflow-hidden">
          {/* Subtle Grid Lines Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>START A COLLABORATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              “Have a business that deserves a better website?”
            </h2>

            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
              “Let’s turn your idea into a website people remember.”
            </p>

            {/* Main Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="contact-start-project-btn"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onScrollToWork}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-neutral-300 bg-[#161620] hover:bg-[#1f1f2c] border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
              </button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="relative z-10 pt-12 border-t border-white/[0.08] max-w-4xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for New Client Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                const isCopied = copiedChannel === channel.name;
                return (
                  <div
                    key={channel.name}
                    className="p-5 rounded-2xl bg-[#0e0e14] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-[#12121b] transition-all duration-200 flex flex-col justify-between text-left group shadow-lg shadow-black/40"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#171722] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[10px] font-mono text-cyan-300 border border-white/[0.04]">
                          {channel.badge}
                        </span>
                      </div>
                      
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        {channel.name}
                      </span>
                      
                      <div className="font-mono text-sm font-semibold text-white tracking-wide mt-1 mb-2 select-all break-all">
                        {channel.displayValue}
                      </div>

                      <p className="text-[11px] text-neutral-400 leading-relaxed mb-4">
                        {channel.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                      {/* Direct Clickable Action */}
                      <a
                        href={channel.href}
                        target={channel.name === 'Email' ? '_self' : '_blank'}
                        rel={channel.name === 'Email' ? undefined : 'noopener noreferrer'}
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500 hover:to-blue-600 border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
                      >
                        <span>{channel.actionText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      {/* Copy Value Button */}
                      <button
                        onClick={() => handleCopy(channel.name, channel.rawValue)}
                        className="w-full py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 text-[11px] font-medium text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                        title={channel.copyText}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-neutral-500" />
                            <span>{channel.copyText}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
