import React from 'react';
import { 
  Building2, 
  UtensilsCrossed, 
  Zap, 
  RefreshCw, 
  Cpu, 
  MapPin, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0a0a0c]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <span>SPECIALIZED CRAFT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              What I Build
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            Engineered specifically for business owners who want to stand out, command premium pricing, and convert visitors.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              id={`service-card-${service.number}`}
              onClick={() => onSelectService(service.title)}
              className="group relative rounded-2xl bg-[#111116] hover:bg-[#15151c] border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
            >
              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-cyan-400 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#181822] group-hover:bg-cyan-500/20 border border-white/[0.08] group-hover:border-cyan-500/40 flex items-center justify-center text-neutral-300 group-hover:text-cyan-300 transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                  <span>{service.title}</span>
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06] mb-6">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-neutral-300 group-hover:text-cyan-300 transition-colors">
                  <span>Inquire</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
