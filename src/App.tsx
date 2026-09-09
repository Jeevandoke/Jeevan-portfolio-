/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutIntro } from './components/AboutIntro';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { BeforeAfter } from './components/BeforeAfter';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { AiAdvantage } from './components/AiAdvantage';
import { ToolsSection } from './components/ToolsSection';
import { Testimonials } from './components/Testimonials';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { NavigationTransitionOverlay } from './components/NavigationTransitionOverlay';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isNavTransitioning, setIsNavTransitioning] = useState<boolean>(false);
  const [navTargetLabel, setNavTargetLabel] = useState<string | undefined>(undefined);

  const handleNavigate = (targetHref: string, label?: string) => {
    setNavTargetLabel(label);
    setIsNavTransitioning(true);

    if (targetHref === '#' || targetHref === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(targetHref);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setTimeout(() => {
      setIsNavTransitioning(false);
      setNavTargetLabel(undefined);
    }, 450);
  };

  const handleOpenInquiry = (serviceOrProject?: string) => {
    setSelectedService(serviceOrProject);
    setNavTargetLabel(serviceOrProject ? `Inquiry • ${serviceOrProject}` : 'Opening Project Inquiry');
    setIsNavTransitioning(true);

    setTimeout(() => {
      setIsNavTransitioning(false);
      setIsInquiryOpen(true);
      setNavTargetLabel(undefined);
    }, 180);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
    setSelectedService(undefined);
  };

  const handleScrollToWork = () => {
    handleNavigate('#work', 'Selected Work');
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0a0a0c] text-neutral-200 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Viewport Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Smooth Opacity Navigation Transition Overlay */}
      <NavigationTransitionOverlay 
        isVisible={isNavTransitioning} 
        targetLabel={navTargetLabel} 
      />

      {/* Top Navigation */}
      <Navbar 
        onOpenInquiry={() => handleOpenInquiry()} 
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main id="main-content-flow">
        {/* 1. Hero Section with 3D Futuristic AI Workstation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero 
            onOpenInquiry={() => handleOpenInquiry()} 
            onScrollToWork={handleScrollToWork} 
          />
        </motion.div>

        {/* 2. Introduction: I'm Jeevan, 16, Designer & AI Builder */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <AboutIntro />
        </motion.div>

        {/* 3. Services: What I Build (01 to 06) */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Services onSelectService={(service) => handleOpenInquiry(service)} />
        </motion.div>

        {/* 4. Selected Work: Large Mockups & Concept Project Transparency */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeaturedWork onOpenInquiry={(project) => handleOpenInquiry(project)} />
        </motion.div>

        {/* 5. Before / After: Interactive Draggable Website Transformation Slider */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <BeforeAfter />
        </motion.div>

        {/* 6. Process: 5-Step Timeline with AI vs Human Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Process />
        </motion.div>

        {/* 7. Why Work With Me: Young. Hungry. Different. & 16 / ∞ Stats */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <WhyWorkWithMe />
        </motion.div>

        {/* 8. Dedicated AI Section: AI is my advantage & Interactive Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <AiAdvantage />
        </motion.div>

        {/* 9. Tech & Tools: Tools I Work With */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <ToolsSection />
        </motion.div>

        {/* 10. Testimonials: Transparent Coming Soon Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Testimonials onOpenInquiry={() => handleOpenInquiry()} />
        </motion.div>

        {/* 11. Final Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactCta 
            onOpenInquiry={() => handleOpenInquiry()} 
            onScrollToWork={handleScrollToWork} 
          />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer 
        onOpenInquiry={() => handleOpenInquiry()} 
        onNavigate={handleNavigate}
      />

      {/* Project Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        initialService={selectedService}
      />
    </div>
  );
}
