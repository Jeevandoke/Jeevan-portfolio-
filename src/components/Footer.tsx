import React from 'react';
import { ArrowUp, Sparkles, MessageCircle, Instagram, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
  onNavigate?: (href: string, label?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onNavigate }) => {
  const scrollToTop = () => {
    if (onNavigate) {
      onNavigate('#top', 'Back to Top');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, label?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id, label);
    } else {
      const elem = document.querySelector(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-14 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                J
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                JEEVAN
              </span>
            </div>
            <p className="text-neutral-400 font-mono text-xs">
              AI-Powered Web Designer • Age 16
            </p>
          </div>

          {/* Footer Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, '#work', 'Selected Work')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Work
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services', 'Services')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about', 'About Jeevan')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, '#process', '5-Step Process')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Process
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'Contact & Inquiries')}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#14141c] hover:bg-[#1a1a24] border border-white/[0.08] text-neutral-300 hover:text-white transition-colors text-xs cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Dedicated Direct Reach Strip */}
        <div className="pt-6 pb-2 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Direct Inquiries:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/918976167611?text=Hi%20Jeevan,%20I'd%20like%20to%20inquire%20about%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111118] border border-emerald-500/30 hover:border-emerald-400/60 text-neutral-300 hover:text-emerald-300 transition-colors text-xs font-mono group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +91 89761 67611</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href="https://www.instagram.com/rorantswebs?stkn=MWVucGFjN2hqbWdqaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111118] border border-pink-500/30 hover:border-pink-400/60 text-neutral-300 hover:text-pink-300 transition-colors text-xs font-mono group"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram: @rorantswebs</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-pink-400 transition-colors" />
            </a>

            <a
              href="mailto:jdoke4398@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111118] border border-cyan-500/30 hover:border-cyan-400/60 text-neutral-300 hover:text-cyan-300 transition-colors text-xs font-mono group"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>jdoke4398@gmail.com</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom Legal, Statements & Age Badge */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-neutral-400">
            © 2026 Jeevan. Designed with AI. Refined by a human.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111116] border border-white/[0.06] text-[11px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Built by Jeevan • Age 16 • Web Designer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
