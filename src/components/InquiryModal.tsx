import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Send, 
  Check, 
  Copy, 
  Utensils, 
  Building2, 
  Zap, 
  RefreshCw, 
  Cpu, 
  MapPin, 
  ExternalLink,
  MessageCircle,
  Mail,
  Instagram
} from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialService }) => {
  const [businessName, setBusinessName] = useState('');
  const [clientName, setClientName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [projectType, setProjectType] = useState(initialService || 'Restaurant Websites');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setProjectType(initialService);
    }
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen, initialService]);

  const projectOptions = [
    { label: 'Restaurant Websites', icon: Utensils },
    { label: 'Local Business Websites', icon: MapPin },
    { label: 'Landing Pages', icon: Zap },
    { label: 'Website Redesigns', icon: RefreshCw },
    { label: 'AI-Powered Websites', icon: Cpu },
    { label: 'Business Websites', icon: Building2 },
  ];

  const generatedWhatsAppMessage = `*New Website Inquiry for Jeevan*
👤 *Client Name:* ${clientName || 'Prospective Client'}
🏢 *Business:* ${businessName || 'Not specified'}
📱 *Contact Details:* ${contactInfo || 'Not specified'}
🎯 *Project Type:* ${projectType}
📝 *Vision / Notes:* ${details || 'We want to elevate our website to look modern, trustworthy and premium.'}

_Sent via Jeevan Portfolio (age 16 • AI-powered web designer)_`;

  const generatedEmailBody = `Hi Jeevan,

I would like to discuss a website design project with you.

Project Details:
- Business Name: ${businessName || 'N/A'}
- Client Name: ${clientName || 'N/A'}
- Contact Phone/Email: ${contactInfo || 'N/A'}
- Project Type: ${projectType}
- Notes & Vision: ${details || 'Looking to create a modern, high-converting website.'}

Looking forward to hearing your ideas and strategy!`;

  const whatsappUrl = `https://wa.me/918976167611?text=${encodeURIComponent(generatedWhatsAppMessage)}`;
  const emailUrl = `mailto:jdoke4398@gmail.com?subject=${encodeURIComponent(`Website Project Inquiry: ${businessName || clientName || 'New Project'}`)}&body=${encodeURIComponent(generatedEmailBody)}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedWhatsAppMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendViaWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendViaWhatsApp();
  };

  const handleSendViaEmail = () => {
    setSubmitted(true);
    window.location.href = emailUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="inquiry-project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#0f0f15] border border-white/[0.12] shadow-2xl shadow-black overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Chrome */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#14141c]">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Start a Project with Jeevan
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                16 y/o • AI-Powered Website Designer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Type Picker */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5">
                  Select Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = projectType === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setProjectType(opt.label)}
                        className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2 text-xs font-medium ${
                          isSelected
                            ? 'bg-cyan-950/50 border-cyan-500/60 text-cyan-200 shadow-sm shadow-cyan-500/20'
                            : 'bg-[#14141c] border-white/[0.06] text-neutral-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-cyan-400' : 'text-neutral-400'}`} />
                        <span className="truncate">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Business Name & Contact Name Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Business Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Coastal Bistro, Studio 12"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/[0.08] focus:border-cyan-500/60 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/[0.08] focus:border-cyan-500/60 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors"
                  />
                </div>
              </div>

              {/* Contact Info (WhatsApp / Email) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Your WhatsApp Number or Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +1 (555) 019-2831 or contact@mybusiness.com"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/[0.08] focus:border-cyan-500/60 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Project Notes & Vision (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me a bit about what you want to achieve or improve about your current website..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/[0.08] focus:border-cyan-500/60 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit & Quick Actions */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-100 group-hover:scale-110 transition-transform" />
                    <span>Send via WhatsApp (+91 89761 67611)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="py-3 px-4 rounded-xl text-xs font-semibold text-neutral-200 bg-[#191924] hover:bg-[#222232] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Direct to Jeevan's WhatsApp: +91 89761 67611
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1 font-medium cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                    <span>{copied ? 'Copied' : 'Copy Text'}</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                <Check className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Inquiry Ready to Send!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Click below to dispatch your project details directly to Jeevan on WhatsApp or Email. You'll receive a response within 24 hours.
                </p>
              </div>

              {/* Action Buttons on Confirmation */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp (+91 89761 67611)</span>
                </a>

                <a
                  href={emailUrl}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-neutral-200 bg-[#181824] hover:bg-[#222232] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Send via Email</span>
                </a>

                <a
                  href="https://www.instagram.com/rorantswebs?stkn=MWVucGFjN2hqbWdqaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-semibold text-neutral-300 bg-[#181824] hover:bg-[#222232] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram DM</span>
                </a>
              </div>

              {/* Formatted message box to also send via WhatsApp */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08] text-left max-w-md mx-auto space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>FORMATTED INQUIRY MESSAGE</span>
                  <button
                    onClick={handleCopyMessage}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    {copied ? 'Copied to Clipboard!' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs font-mono text-neutral-300 whitespace-pre-line bg-[#0a0a0e] p-3 rounded-lg border border-white/[0.04]">
                  {generatedWhatsAppMessage}
                </p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
