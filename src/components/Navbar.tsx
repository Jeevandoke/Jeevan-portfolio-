import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
  onNavigate?: (href: string, label?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Process', href: '#process' },
    { label: 'AI Advantage', href: '#ai-advantage' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href, label);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, '#top', 'Top')}
          className="flex items-center gap-2.5 group focus:outline-none cursor-pointer"
          id="brand-logo-btn"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-base tracking-wider shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
            J
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-base tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
              JEEVAN
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] text-neutral-400 font-medium tracking-wide">
                16 y/o • AI Designer
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141419]/80 border border-white/[0.08] shadow-inner shadow-black/40">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.label)}
              className="px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-150 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://wa.me/918976167611?text=Hi%20Jeevan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-400/60 transition-all shadow-sm group"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>WhatsApp</span>
          </a>

          <button
            id="nav-start-project-btn"
            onClick={onOpenInquiry}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/918976167611?text=Hi%20Jeevan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 sm:hidden"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
          </a>

          <button
            id="mobile-start-btn"
            onClick={onOpenInquiry}
            className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors sm:hidden"
          >
            Inquire
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-white/10 bg-[#0c0c10]/98 backdrop-blur-2xl px-5 pt-4 pb-6 overflow-hidden space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.label)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.08] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/918976167611?text=Hi%20Jeevan,%20I'd%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp: +91 89761 67611</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
