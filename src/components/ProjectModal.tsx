import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  ExternalLink, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Check, 
  ArrowRight,
  Cpu,
  Layers,
  Palette
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenInquiry }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          id="project-detail-modal"
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
            className="relative w-full max-w-5xl rounded-2xl bg-[#0f0f15] border border-white/[0.12] shadow-2xl shadow-black overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#14141c]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <span className="text-xs text-neutral-400 font-mono">
                {project.category}
              </span>
            </div>
            {project.isConcept && (
              <span className="ml-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-semibold">
                CONCEPT PROJECT
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Viewport device preview toggler */}
            <div className="hidden sm:flex items-center bg-black/40 p-1 rounded-lg border border-white/[0.06] text-neutral-400">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded transition-colors ${deviceView === 'desktop' ? 'bg-cyan-500/20 text-cyan-300' : 'hover:text-white'}`}
                title="Desktop view"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 rounded transition-colors ${deviceView === 'tablet' ? 'bg-cyan-500/20 text-cyan-300' : 'hover:text-white'}`}
                title="Tablet view"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded transition-colors ${deviceView === 'mobile' ? 'bg-cyan-500/20 text-cyan-300' : 'hover:text-white'}`}
                title="Mobile view"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
              aria-label="Close project preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Simulated Browser Frame Showcase */}
          <div className="w-full flex justify-center bg-[#09090d] rounded-xl p-4 sm:p-6 border border-white/[0.06]">
            <div
              className={`transition-all duration-300 rounded-xl overflow-hidden border border-white/[0.12] bg-[#111116] shadow-2xl ${
                deviceView === 'desktop'
                  ? 'w-full max-w-4xl'
                  : deviceView === 'tablet'
                  ? 'w-[540px]'
                  : 'w-[320px]'
              }`}
            >
              {/* Browser bar */}
              <div className="h-8 px-3 bg-[#171720] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500/70"></span>
                </div>
                <div className="text-[10px] font-mono text-neutral-400 truncate max-w-[200px]">
                  https://preview.{project.id}.design
                </div>
                <div className="w-4"></div>
              </div>

              {/* Mockup Image View */}
              <div className="relative aspect-[16/9] w-full overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                    {project.clientType}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.tagline}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Description & Highlights */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                  Key Conversion Highlights
                </h4>
                <div className="space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <div className="p-1 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-400 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: AI & Human Craft Breakdown */}
            <div className="md:col-span-5 space-y-4">
              {/* AI Workflow Card */}
              <div className="p-4 rounded-xl bg-[#14141c] border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>AI Acceleration</span>
                </div>
                <div className="space-y-1 text-xs text-neutral-400">
                  {project.aiToolsUsed.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Human Craft Card */}
              <div className="p-4 rounded-xl bg-[#14141c] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>Human Refinement</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {project.humanCraftFocus}
                </p>
              </div>

              {/* Performance Metric */}
              {project.metrics && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-cyan-400">
                      Target Metric
                    </span>
                    <div className="text-xs text-neutral-300 font-medium">
                      {project.metrics.label}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {project.metrics.value}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="px-6 py-4 bg-[#14141c] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-neutral-400">
            Want a similar website engineered for your business?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(project.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <span>Build Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};
