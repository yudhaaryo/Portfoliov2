import React, { useState } from 'react';
import { ArrowUpRight, Filter, Sparkles, ExternalLink, Github, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack Systems', 'Web Apps', 'UI/UX & Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const getAccentStyles = (accent: string) => {
    switch (accent) {
      case 'orange':
        return {
          badge: 'bg-[#ff5d38]/10 text-[#ff5d38] border-[#ff5d38]/30',
          hoverBorder: 'hover:border-[#ff5d38]/60',
          numberColor: 'text-[#ff5d38]',
          glow: 'from-[#ff5d38]/15',
          btnBg: 'bg-[#ff5d38] hover:bg-[#ff704d] text-black',
        };
      case 'lime':
        return {
          badge: 'bg-[#a3e635]/10 text-[#a3e635] border-[#a3e635]/30',
          hoverBorder: 'hover:border-[#a3e635]/60',
          numberColor: 'text-[#a3e635]',
          glow: 'from-[#a3e635]/15',
          btnBg: 'bg-[#a3e635] hover:bg-[#bbf451] text-black',
        };
      case 'blue':
        return {
          badge: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30',
          hoverBorder: 'hover:border-[#38bdf8]/60',
          numberColor: 'text-[#38bdf8]',
          glow: 'from-[#38bdf8]/15',
          btnBg: 'bg-[#38bdf8] hover:bg-[#60cdff] text-black',
        };
      case 'pink':
        return {
          badge: 'bg-[#f43f5e]/10 text-[#f43f5e] border-[#f43f5e]/30',
          hoverBorder: 'hover:border-[#f43f5e]/60',
          numberColor: 'text-[#f43f5e]',
          glow: 'from-[#f43f5e]/15',
          btnBg: 'bg-[#f43f5e] hover:bg-[#fb5876] text-white',
        };
      default:
        return {
          badge: 'bg-white/10 text-white border-white/30',
          hoverBorder: 'hover:border-white/60',
          numberColor: 'text-white',
          glow: 'from-white/10',
          btnBg: 'bg-white hover:bg-white/90 text-black',
        };
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-b border-white/10 bg-[#090a0f] bg-grid-dense">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3 font-mono text-xs text-white/40 tracking-widest uppercase">
              <span className="text-[#ff5d38]">02 //</span>
              <span>PORTFOLIO WORK</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
              SELECTED PROJECTS
            </h2>
            <p className="font-mono text-sm text-white/60 mt-2 max-w-xl">
              A collection of things I've built, designed, and experimented with — from enterprise management systems to developer utilities.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                    : 'bg-[#141620] border border-white/10 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Editorial Cards Grid */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => {
            const styles = getAccentStyles(project.accentColor);
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                id={`project-card-${project.slug}`}
                className={`group relative rounded-3xl bg-[#11131c] border border-white/10 ${styles.hoverBorder} transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-10`}
              >
                {/* Subtle Gradient Glow */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${styles.glow} to-transparent rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity`} />

                {/* Technical Corner Markers */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-white/20 select-none">
                  ┌ REF://{project.slug.substring(0, 10).toUpperCase()}
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/20 select-none">
                  STATUS: VERIFIED ┘
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left (or Right on alternate): Project Info */}
                  <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Project Number & Meta */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className={`font-display font-black text-3xl sm:text-4xl ${styles.numberColor} tracking-tighter`}>
                          PROJECT {project.number}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                            {project.year}
                          </span>
                          <span className={`font-mono text-xs px-2.5 py-1 rounded border font-semibold ${styles.badge}`}>
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle / Client */}
                      <p className="font-mono text-xs text-white/50 uppercase tracking-wider mb-4">
                        {project.client}
                      </p>

                      {/* Short Description */}
                      <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span
                            key={tech.name}
                            className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#181a26] border border-white/10 text-white/80"
                          >
                            {tech.name}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="font-mono text-xs px-2 py-1 rounded-md bg-white/5 text-white/40">
                            +{project.techStack.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button: View Project Detail */}
                    <div className="flex items-center gap-4 pt-2">
                      <button
                        id={`view-project-btn-${project.slug}`}
                        onClick={() => onSelectProject(project)}
                        className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono font-bold text-xs tracking-wider transition-all shadow-lg active:scale-95 ${styles.btnBg}`}
                      >
                        <span>VIEW PROJECT DETAILS</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right (or Left on alternate): Framed Image Preview */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className={`lg:col-span-6 cursor-pointer ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-white/15 group-hover:border-white/40 transition-all duration-300 shadow-2xl bg-[#090a0f]">
                      {/* Window Header Decorator */}
                      <div className="bg-[#181a24] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="truncate max-w-[200px]">preview://{project.slug}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      {/* Image container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#090a0f]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                        {/* Hover Overlay Tag */}
                        <div className="absolute bottom-3 right-3 font-mono text-[10px] px-2 py-1 rounded bg-black/80 backdrop-blur-sm border border-white/20 text-white/80 flex items-center gap-1">
                          <span>CLICK TO EXPAND CASE STUDY</span>
                          <span>↗</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
