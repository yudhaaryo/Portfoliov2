import React from 'react';
import { Layers, Zap, Terminal, ShieldCheck, Database, Layout } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const skillLabels = [
    { name: 'WEB DEVELOPMENT', color: 'border-[#ff5d38]/40 text-[#ff5d38] bg-[#ff5d38]/5', icon: Layout },
    { name: 'SYSTEM ARCHITECTURE', color: 'border-[#a3e635]/40 text-[#a3e635] bg-[#a3e635]/5', icon: Layers },
    { name: 'PROBLEM SOLVING', color: 'border-[#38bdf8]/40 text-[#38bdf8] bg-[#38bdf8]/5', icon: Zap },
    { name: 'DATABASE DESIGN', color: 'border-[#f43f5e]/40 text-[#f43f5e] bg-[#f43f5e]/5', icon: Database },
    { name: 'UI / UX CRAFT', color: 'border-white/30 text-white bg-white/5', icon: Terminal },
    { name: 'API INTEGRATION', color: 'border-[#fbbf24]/40 text-[#fbbf24] bg-[#fbbf24]/5', icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-b border-white/10 overflow-hidden bg-[#0a0b10]">
      {/* Decorative Technical Grid Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Metadata Header */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs text-white/40 tracking-widest uppercase">
          <span className="text-[#ff5d38]">01 //</span>
          <span>INTRODUCTION & PHILOSOPHY</span>
          <div className="h-[1px] flex-1 bg-white/10 max-w-xs" />
        </div>

        {/* Large Statement */}
        <div className="max-w-5xl mb-12 sm:mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.08]">
            "I LIKE TURNING <span className="text-[#ff5d38]">COMPLEX PROBLEMS</span> INTO SIMPLE, POWERFUL <span className="text-[#a3e635]">DIGITAL EXPERIENCES</span>."
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-white/75 font-sans leading-relaxed">
            <p>
              With an academic foundation in Information Technology and vocational engineering from Yogyakarta, I build reliable web systems, backend architectures, and high-clarity user interfaces that solve tangible everyday challenges.
            </p>
            <p className="text-white/60">
              Whether architecting institutional inventory systems with barcode scanners, creating logistics tracking dashboards with live telemetry, or polishing modern responsive web apps, I prioritize maintainability, security, and delightful user ergonomics over unnecessary fluff.
            </p>

            {/* Interactive Focus Tags */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {skillLabels.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border font-mono text-xs font-semibold tracking-wider transition-transform hover:-translate-y-0.5 cursor-default ${skill.color}`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Technical Stats / Info Box */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#12141e] border border-white/10 relative overflow-hidden">
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>DEV PROFILE MATRIX</span>
                <span className="text-[#38bdf8] font-bold">VERIFIED</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-white/50">EDUCATION / FOCUS</span>
                  <span className="text-white font-medium text-right">Informatics & IT Systems</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-white/50">PRIMARY STACK</span>
                  <span className="text-[#ff5d38] font-bold text-right">Laravel • React • MySQL</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-white/50">LOCATION</span>
                  <span className="text-white font-medium text-right">Yogyakarta, Indonesia</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-white/50">CORE MOTTO</span>
                  <span className="text-[#a3e635] font-bold text-right">Clean Code. Real Utility.</span>
                </div>
              </div>
            </div>

            {/* Quick Quote / Note Card */}
            <div className="p-5 rounded-xl bg-white/5 border border-dashed border-white/15 text-xs text-white/70 font-mono italic leading-relaxed">
              "Great software should feel effortless to the end user while remaining uncompromisingly robust under the hood."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
