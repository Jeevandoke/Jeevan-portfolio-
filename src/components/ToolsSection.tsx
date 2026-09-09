import React from 'react';
import { 
  Sparkles, 
  Code2, 
  Layout, 
  FileCode, 
  Palette, 
  GitBranch, 
  Bot, 
  Cpu, 
  Terminal,
  Layers
} from 'lucide-react';
import { TECH_TOOLS } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'AI Studio':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Google AI':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'React':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'JavaScript':
        return <FileCode className="w-5 h-5 text-yellow-400" />;
      case 'HTML5':
        return <Layout className="w-5 h-5 text-orange-400" />;
      case 'CSS / Tailwind':
        return <Palette className="w-5 h-5 text-teal-400" />;
      case 'Figma':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'GitHub':
        return <GitBranch className="w-5 h-5 text-neutral-300" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="tools" className="py-20 md:py-24 relative border-b border-white/[0.06] bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              <span>STACK & ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Tools I Work With
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            Genuinely applied in daily production. No inflated percentages or simulated claims — just the exact modern stack used to engineer high-performance websites.
          </p>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {TECH_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-xl bg-[#111116] border border-white/[0.07] hover:border-cyan-500/30 hover:bg-[#15151e] transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#181824] border border-white/[0.06] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getToolIcon(tool.name)}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400">
                  {tool.category}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-snug">
                  {tool.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
