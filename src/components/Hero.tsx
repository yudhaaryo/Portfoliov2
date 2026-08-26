import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Code2, Layers, Cpu, CheckCircle2, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onConnect }) => {
  const [terminalOutput, setTerminalOutput] = useState<string>('System initialized. Ready for production deployments.');
  const [isRunningSnippet, setIsRunningSnippet] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleRunSnippet = () => {
    setIsRunningSnippet(true);
    setTerminalOutput('Compiling route pipelines & database relations...');
    setTimeout(() => {
      setTerminalOutput('Build succeeded. 0 errors, 100% test coverage. Ready to build something remarkable.');
      setIsRunningSnippet(false);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-grid-pattern border-b border-white/10"
    >
      {/* Background Lighting & Coordinate Markers */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff5d38]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[400px] h-[300px] bg-[#38bdf8]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Decorative Technical Coordinate Markers */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-[11px] text-white/30 tracking-widest hidden lg:block select-none">
        [COORD: 07°47'S 110°22'E] • SYS.STATUS: NOMINAL
      </div>
      <div className="absolute top-28 right-6 sm:right-12 font-mono text-[11px] text-white/30 tracking-widest hidden lg:block select-none">
        REF: YA-2026 // BUILD.04
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Annotation Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161822] border border-white/15 text-xs font-mono text-white/90">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
            <span className="text-[#10b981] font-bold">AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60">
            <Code2 className="w-3.5 h-3.5 text-[#ff5d38]" />
            <span>FULL-STACK & IT DEVELOPER</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60">
            <span>✦ YOGYAKARTA, ID</span>
          </div>
        </div>

        {/* Main Grid Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Big Typographic Statement */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Small Editorial / Handwritten Style Tag */}
            <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#ff5d38] font-bold mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#ff5d38]" />
              HELLO, I'M
            </div>

            {/* Oversized Name */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tight text-white uppercase leading-[0.92] mb-6">
              YUDHA <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
                ARYO.
              </span>
            </h1>

            {/* Sub-headline / Big Statement */}
            <div className="relative mb-6 sm:mb-8">
              <p className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-white/95 leading-tight tracking-tight uppercase max-w-2xl">
                IT DEVELOPER WHO BUILDS <span className="text-[#a3e635] underline decoration-[#a3e635]/40 decoration-2 underline-offset-4">USEFUL DIGITAL EXPERIENCES</span> & ROBUST SYSTEMS.
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-white/70 max-w-xl font-sans leading-relaxed mb-8 sm:mb-10">
              I specialize in full-stack web applications, database-driven management systems, and high-performance user interfaces. Based in Yogyakarta, turning complex operational workflows into intuitive, resilient code.
            </p>

            {/* Primary Action CTAs & Floating Labels */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                id="hero-view-projects-btn"
                onClick={onExploreProjects}
                className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#ff5d38] hover:bg-[#ff704d] text-black font-mono font-bold text-sm tracking-wider rounded-xl transition-all shadow-xl shadow-[#ff5d38]/25 hover:shadow-[#ff5d38]/40 active:scale-95"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-connect-btn"
                onClick={onConnect}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#141622] hover:bg-[#1a1e2c] border border-white/15 hover:border-white/30 text-white font-mono font-bold text-sm tracking-wider rounded-xl transition-all active:scale-95"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#a3e635]" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Interactive Sandbox / Floating Badge Card */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Playful Rotating Stamp / Badge */}
            <div className="relative p-5 rounded-2xl bg-[#12141d]/90 border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden frame-corner-tl">
              {/* Corner Coordinate */}
              <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-3 border-b border-white/10 pb-2.5">
                <span>TERMINAL://DEV-CONSOLE</span>
                <span className="text-[#a3e635]">LIVE</span>
              </div>

              {/* Code Snippet & Interactive Tester */}
              <div className="bg-[#090a0f] rounded-lg p-3.5 border border-white/10 font-mono text-xs space-y-2 mb-3">
                <div className="text-white/40">// Developer Manifest</div>
                <div className="text-white/80">
                  <span className="text-[#ff5d38]">const</span> developer = &#123;
                </div>
                <div className="pl-4 text-white/90">
                  name: <span className="text-[#a3e635]">'Yudha Aryo'</span>,
                </div>
                <div className="pl-4 text-white/90">
                  focus: <span className="text-[#38bdf8]">['Full-Stack', 'Systems', 'UI/UX']</span>,
                </div>
                <div className="pl-4 text-white/90">
                  stack: <span className="text-[#f43f5e]">'Laravel' | 'React' | 'Filament'</span>,
                </div>
                <div className="pl-4 text-white/90">
                  passionate: <span className="text-[#fbbf24]">true</span>
                </div>
                <div className="text-white/80">&#125;;</div>
              </div>

              {/* Output Preview */}
              <div className="p-2.5 rounded bg-white/5 border border-white/5 font-mono text-[11px] text-white/70 min-h-[48px] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                  <span className="line-clamp-2">{terminalOutput}</span>
                </div>
                <button
                  id="run-snippet-button"
                  onClick={handleRunSnippet}
                  disabled={isRunningSnippet}
                  className="p-1.5 rounded bg-white/10 hover:bg-[#ff5d38] hover:text-black text-white transition-colors shrink-0"
                  title="Run snippet"
                >
                  <Play className={`w-3 h-3 ${isRunningSnippet ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Quick Copy Email Ribbon */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="text-[11px] font-mono text-white/50 truncate">
                  {PERSONAL_INFO.email}
                </div>
                <button
                  id="quick-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="text-[11px] font-mono font-bold px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
                >
                  {copiedEmail ? 'COPIED!' : 'COPY'}
                </button>
              </div>
            </div>

            {/* Playful Floating Annotation Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#13151f] border border-white/10 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase text-white/40 tracking-wider">
                  EXPERIENCE
                </span>
                <span className="font-display font-black text-2xl text-white mt-1">
                  3+ <span className="text-xs font-mono font-normal text-white/50">Years</span>
                </span>
                <span className="font-mono text-[10px] text-[#a3e635] mt-1">
                  Full-Cycle Delivery
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#13151f] border border-white/10 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase text-white/40 tracking-wider">
                  SPECIALTY
                </span>
                <span className="font-display font-black text-xl text-white mt-1">
                  SYSTEMS
                </span>
                <span className="font-mono text-[10px] text-[#ff5d38] mt-1">
                  Laravel • React • DB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Playful Bottom Ticker / Badges */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/50">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="text-[#ff5d38]">✦</span> PROBLEM SOLVER
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="text-[#a3e635]">✦</span> CLEAN ARCHITECTURE
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="text-[#38bdf8]">✦</span> RAPID PROTOTYPING
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="text-[#f43f5e]">✦</span> VOCATIONAL IT BACKGROUND
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/40 text-[11px]">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#ff5d38]" />
          </div>
        </div>
      </div>
    </section>
  );
};
