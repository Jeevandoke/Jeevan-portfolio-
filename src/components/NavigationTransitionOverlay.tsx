import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface NavigationTransitionOverlayProps {
  isVisible: boolean;
  targetLabel?: string;
}

export const NavigationTransitionOverlay: React.FC<NavigationTransitionOverlayProps> = ({
  isVisible,
  targetLabel,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="nav-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="fixed inset-0 z-45 pointer-events-none flex flex-col justify-between overflow-hidden"
          aria-hidden="true"
        >
          {/* Subtle dark backdrop veil with gentle blur */}
          <div className="absolute inset-0 bg-[#060608]/45 backdrop-blur-[3px]" />

          {/* Top glowing laser line accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[2.5px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.9)] origin-left relative z-10"
          />

          {/* Floating Minimalist Status Pill */}
          {targetLabel && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="px-4 py-1.5 rounded-full bg-[#101017]/95 border border-cyan-500/40 text-white text-xs font-mono flex items-center gap-2 shadow-2xl shadow-black/80"
              >
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span className="tracking-wide text-neutral-200">{targetLabel}</span>
              </motion.div>
            </div>
          )}

          {/* Bottom subtle gradient vignette */}
          <div className="h-16 w-full bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
