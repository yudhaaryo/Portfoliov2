import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative border-b border-white/10 bg-[#0a0b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3 font-mono text-xs text-white/40 tracking-widest uppercase">
            <span className="text-[#ff5d38]">03 //</span>
            <span>TRACK RECORD & ROLES</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            EXPERIENCE & CAREER
          </h2>
          <p className="font-mono text-sm text-white/60 mt-2 max-w-xl">
            A chronological look at institutional engineering roles, full-stack client deliveries, and technical mentorship.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative border-l border-white/15 ml-3 sm:ml-6 space-y-12 sm:space-y-16 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} id={`exp-item-${exp.id}`} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#090a0f] border-2 border-[#ff5d38] group-hover:bg-[#ff5d38] group-hover:scale-125 transition-all duration-300 shadow-lg shadow-[#ff5d38]/30" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#12141e] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-xl">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-[#ff5d38]/10 text-[#ff5d38] border border-[#ff5d38]/30">
                      {exp.period}
                    </span>
                    <span className="font-mono text-xs text-white/50 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider">
                    {exp.type}
                  </span>
                </div>

                {/* Role and Organization */}
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="font-mono text-sm text-[#a3e635] font-semibold mt-1 mb-4">
                  {exp.organization}
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 mb-6">
                  <div className="font-mono text-xs font-bold text-white/40 uppercase tracking-wider mb-2">
                    KEY CONTRIBUTIONS & IMPACT:
                  </div>
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-white/70">
                      <span className="font-mono text-[#ff5d38] font-bold shrink-0 mt-0.5">✦</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Key Highlight Banner */}
                {exp.highlight && (
                  <div className="p-3.5 rounded-xl bg-white/5 border border-dashed border-white/15 text-xs font-mono text-white/90 flex items-center gap-2 mb-6">
                    <span className="text-[#a3e635] font-bold">HIGHLIGHT:</span>
                    <span>{exp.highlight}</span>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#181a26] border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
