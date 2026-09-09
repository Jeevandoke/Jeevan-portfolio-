import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Spring smoothing for a fluid, natural feel as the user scrolls
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.0005,
  });

  // Calculate opacity so the track is subtle at the very top and fully vivid as scrolling starts
  const glowOpacity = useTransform(scrollYProgress, [0, 0.05], [0.3, 1]);

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none bg-white/[0.03]"
      aria-hidden="true"
    >
      {/* Animated progress bar fill */}
      <motion.div
        id="scroll-progress-bar"
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.85)] relative"
      >
        {/* Leading glow dot at the progress edge */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_10px_#22d3ee] -mr-1"
        />
      </motion.div>
    </div>
  );
};
