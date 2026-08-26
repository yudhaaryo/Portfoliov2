import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, Layers, Cpu, Shield, Sparkles, Terminal, BookOpen, AlertCircle, TrendingUp } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onSelectProject,
}) => {
  // Scroll to top when opening a new project detail
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  // Find next project
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];
  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const prevProject = PROJECTS[prevIndex];

  return (
    <div id="project-detail-container" className="pt-28 pb-32 min-h-screen bg-[#090a0f] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <button
            id="back-to-projects-btn"
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141620] border border-white/15 text-white/80 hover:text-white hover:border-[#ff5d38] font-mono text-xs font-bold tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#ff5d38]" />
            <span>← BACK TO PROJECTS</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/40">
              PROJECT {project.number} OF {PROJECTS.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Project Header Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#ff5d38]/15 border border-[#ff5d38]/40 text-[#ff5d38] font-bold">
              {project.category}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              YEAR: {project.year}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              CLIENT: {project.client}
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight">
            {project.title}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff5d38] hover:bg-[#ff7252] text-black font-mono font-bold text-xs tracking-wider transition-all shadow-lg"
              >
                <span>OPEN REPOSITORY / DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141622] hover:bg-[#1a1e2e] border border-white/15 text-white font-mono font-bold text-xs tracking-wider transition-all"
              >
                <Github className="w-4 h-4" />
                <span>SOURCE CODE</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Banner Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-16 bg-[#11131c]">
          <div className="bg-[#181a24] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              CASE_STUDY://{project.slug}
            </span>
            <span>ROLE: {project.role}</span>
          </div>

          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Project Meta Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl bg-[#12141d] border border-white/10">
          <div>
            <div className="font-mono text-[11px] text-white/40 uppercase">ROLE</div>
            <div className="font-mono text-xs sm:text-sm font-bold text-white mt-1">{project.role}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] text-white/40 uppercase">TIMELINE</div>
            <div className="font-mono text-xs sm:text-sm font-bold text-white mt-1">{project.year}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] text-white/40 uppercase">CATEGORY</div>
            <div className="font-mono text-xs sm:text-sm font-bold text-[#38bdf8] mt-1">{project.category}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] text-white/40 uppercase">OUTCOME STATUS</div>
            <div className="font-mono text-xs sm:text-sm font-bold text-[#a3e635] mt-1">Production Deployed</div>
          </div>
        </div>

        {/* Executive Overview / Problem / Solution Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#12141e] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#f43f5e] font-bold uppercase mb-3">
                <AlertCircle className="w-4 h-4" />
                <span>THE PROBLEM</span>
              </div>
              <p className="font-sans text-sm text-white/75 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#12141e] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#38bdf8] font-bold uppercase mb-3">
                <Sparkles className="w-4 h-4" />
                <span>THE GOAL</span>
              </div>
              <p className="font-sans text-sm text-white/75 leading-relaxed">
                {project.goal}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#12141e] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#a3e635] font-bold uppercase mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>THE SOLUTION</span>
              </div>
              <p className="font-sans text-sm text-white/75 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Narrative Section */}
        <div className="space-y-16">
          {/* Full Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-white/40 uppercase tracking-widest">
              <span className="text-[#ff5d38]">01 //</span>
              <span>SYSTEM ARCHITECTURE & CONTEXT</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase">
              PROJECT OVERVIEW
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-white/40 uppercase tracking-widest">
              <span className="text-[#ff5d38]">02 //</span>
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase">
              KEY FEATURES & MODULES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#13151f] border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-base text-white">
                      {feature.title}
                    </h3>
                    {feature.badge && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/70">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-sm text-white/65 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Breakdown Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-white/40 uppercase tracking-widest">
              <span className="text-[#ff5d38]">03 //</span>
              <span>TECHNICAL SPECIFICATIONS</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase">
              TECHNOLOGY STACK SELECTION
            </h2>

            <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#11131c]">
              <div className="grid grid-cols-12 bg-[#181a26] px-4 py-3 border-b border-white/10 font-mono text-xs text-white/50 uppercase">
                <div className="col-span-4 sm:col-span-3">TECHNOLOGY</div>
                <div className="col-span-3 sm:col-span-3">CATEGORY</div>
                <div className="col-span-5 sm:col-span-6">ROLE & JUSTIFICATION</div>
              </div>
              <div className="divide-y divide-white/5 font-mono text-xs">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="grid grid-cols-12 px-4 py-3.5 items-center hover:bg-white/5 transition-colors">
                    <div className="col-span-4 sm:col-span-3 font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5d38]" />
                      {tech.name}
                    </div>
                    <div className="col-span-3 sm:col-span-3 text-white/60">
                      {tech.category}
                    </div>
                    <div className="col-span-5 sm:col-span-6 text-white/80 font-sans text-xs">
                      {tech.roleInProject}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Gallery */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-white/40 uppercase tracking-widest">
                <span className="text-[#ff5d38]">04 //</span>
                <span>VISUAL ARTIFACTS</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase">
                INTERFACE SCREENSHOTS & VIEWS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.galleryImages.map((img, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#12141c] aspect-[16/10]">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="font-mono text-xs text-white/50 px-1">
                      // {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lessons Learned */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-white/40 uppercase tracking-widest">
              <span className="text-[#ff5d38]">05 //</span>
              <span>RETROSPECTIVE</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase">
              LESSONS LEARNED
            </h2>

            <div className="p-6 rounded-2xl bg-[#12141e] border border-white/10 space-y-3 font-sans text-sm text-white/80">
              {project.lessonsLearned.map((lesson, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#ff5d38] shrink-0 mt-0.5 font-bold">↳</span>
                  <span className="leading-relaxed">{lesson}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Navigation Footer */}
        <div className="mt-20 pt-10 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            id="prev-project-btn"
            onClick={() => onSelectProject(prevProject)}
            className="group flex items-center gap-3 text-left p-4 rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 text-white/40 group-hover:text-[#ff5d38] group-hover:-translate-x-1 transition-all" />
            <div>
              <div className="font-mono text-[10px] text-white/40 uppercase">PREVIOUS PROJECT</div>
              <div className="font-display font-bold text-sm text-white group-hover:text-[#ff5d38] transition-colors">{prevProject.title}</div>
            </div>
          </button>

          <button
            id="next-project-btn"
            onClick={() => onSelectProject(nextProject)}
            className="group flex items-center gap-3 text-right p-4 rounded-xl bg-[#131520] hover:bg-[#1a1d2c] border border-white/10 hover:border-[#ff5d38] transition-all w-full sm:w-auto justify-end"
          >
            <div>
              <div className="font-mono text-[10px] text-[#ff5d38] uppercase font-bold">NEXT PROJECT →</div>
              <div className="font-display font-bold text-sm text-white group-hover:text-[#ff5d38] transition-colors">{nextProject.title}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#ff5d38] group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};
