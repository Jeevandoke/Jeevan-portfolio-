import React, { useState } from 'react';
import { ArrowRight, Sparkles, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface FeaturedWorkProps {
  onOpenInquiry: (projectName?: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Restaurant', 'Hospitality', 'Business', 'Local Service'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="work" className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0c0c10]">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-neutral-400">
              “A few websites designed to turn businesses into brands.”
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20'
                    : 'bg-[#15151d] text-neutral-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`group rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-cyan-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Mockup Showcase Container */}
              <div 
                className="relative overflow-hidden cursor-pointer bg-[#181820]"
                onClick={() => setActiveModalProject(project)}
              >
                {/* Browser Frame Top Chrome */}
                <div className="h-9 px-4 bg-[#14141c] border-b border-white/[0.06] flex items-center justify-between z-10 relative">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate max-w-[220px]">
                    https://{project.id}.com
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 opacity-80">
                    <Eye className="w-3 h-3" /> Preview
                  </div>
                </div>

                {/* Main Visual Image with Zoom on Hover */}
                <div className={`relative ${index === 0 ? 'aspect-[16/8] sm:aspect-[21/9]' : 'aspect-[16/10]'} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-90"></div>

                  {/* Badges Over Image */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-cyan-300">
                      {project.category}
                    </span>
                    {project.isConcept && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono font-bold text-amber-300 tracking-wider">
                        CONCEPT PROJECT
                      </span>
                    )}
                  </div>

                  {/* Target metric pill if available */}
                  {project.metrics && (
                    <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs">
                      <span className="text-neutral-400">{project.metrics.label}:</span>
                      <span className="font-mono text-cyan-300 font-bold">{project.metrics.value}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Description & Action */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] text-neutral-300 border border-white/[0.05]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    Client: {project.clientType}
                  </span>
                  
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenInquiry={onOpenInquiry}
      />
    </section>
  );
};
