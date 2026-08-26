import React, { useState } from 'react';
import { Layers, Terminal, Database, Wrench, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import { TechItem } from '../types';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeTech, setActiveTech] = useState<TechItem | null>(TECH_STACK[0]);

  const categories = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASE', 'TOOLS'];

  const filteredTech = activeCategory === 'ALL'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'FRONTEND':
        return Terminal;
      case 'BACKEND':
        return Server;
      case 'DATABASE':
        return Database;
      case 'TOOLS':
        return Wrench;
      default:
        return Layers;
    }
  };

  return (
    <section id="tech-stack" className="py-24 sm:py-32 relative border-b border-white/10 bg-[#090a0f] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3 font-mono text-xs text-white/40 tracking-widest uppercase">
              <span className="text-[#ff5d38]">04 //</span>
              <span>ENGINEERING ARSENAL</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
              TECH STACK & TOOLS
            </h2>
            <p className="font-mono text-sm text-white/60 mt-2 max-w-xl">
              Battle-tested tools and frameworks utilized across production web systems, administrative panels, and developer workflows.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`tech-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-[#ff5d38] text-black font-bold shadow-lg shadow-[#ff5d38]/20'
                    : 'bg-[#141620] border border-white/10 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Interactive Tech Matrix + Inspector Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredTech.map((tech) => {
              const isSelected = activeTech?.name === tech.name;
              const IconComp = getCategoryIcon(tech.category);

              return (
                <button
                  key={tech.name}
                  id={`tech-item-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveTech(tech)}
                  onMouseEnter={() => setActiveTech(tech)}
                  className={`group relative p-4 rounded-xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#181b28] border-[#ff5d38] shadow-lg shadow-[#ff5d38]/10'
                      : 'bg-[#11131c] border-white/10 hover:border-white/20 hover:bg-[#141622]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-[#ff5d38] transition-colors">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-display font-bold text-base text-white">
                        {tech.name}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/50">
                      {tech.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#a3e635] font-semibold">{tech.level}</span>
                    <span className="text-white/40">{tech.experienceYears}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Inspector Detail Box */}
          <div className="lg:col-span-5 sticky top-28">
            {activeTech && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#12141e] border border-white/15 shadow-2xl relative overflow-hidden frame-corner-tl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs text-white/40 uppercase">
                  <span>INSPECTOR://TECH_SPEC</span>
                  <span className="text-[#a3e635]">ACTIVE HOVER</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5d38]/10 border border-[#ff5d38]/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#ff5d38]" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-2xl text-white">
                      {activeTech.name}
                    </h3>
                    <span className="font-mono text-xs text-[#a3e635] font-bold">
                      {activeTech.level}
                    </span>
                  </div>
                </div>

                {/* Practical Context / Description */}
                <div className="space-y-4 mb-6">
                  <div className="font-mono text-xs text-white/40 uppercase">PRACTICAL USAGE & ROLE:</div>
                  <p className="font-sans text-sm text-white/80 leading-relaxed bg-[#0a0b10] p-4 rounded-xl border border-white/10">
                    {activeTech.description}
                  </p>
                </div>

                {/* Featured Projects Built with this stack */}
                <div className="space-y-2 mb-6">
                  <div className="font-mono text-xs text-white/40 uppercase">DEPLOYED IN PROJECTS:</div>
                  <div className="flex flex-wrap gap-2">
                    {activeTech.featuredProjects.map((p, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#1a1d2c] border border-white/10 text-white/90"
                      >
                        ✦ {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Duration */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/50">
                  <span>PRACTICAL EXPERIENCE</span>
                  <span className="text-white font-bold">{activeTech.experienceYears} active usage</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
