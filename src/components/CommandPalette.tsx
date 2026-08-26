import React, { useState, useEffect } from 'react';
import { Search, Command, ArrowRight, FolderKanban, Briefcase, Cpu, Mail, Sparkles, X, Copy, Check } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectProject: (project: Project) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : undefined;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNavs = [
    { id: 'projects', label: 'View Selected Projects', icon: FolderKanban, group: 'Sections' },
    { id: 'experience', label: 'View Career Experience & Roles', icon: Briefcase, group: 'Sections' },
    { id: 'tech-stack', label: 'Explore Tech Stack & Skills', icon: Cpu, group: 'Sections' },
    { id: 'about', label: 'About Yudha & Philosophy', icon: Sparkles, group: 'Sections' },
    { id: 'contact', label: 'Get in Touch / Social Links', icon: Mail, group: 'Sections' },
  ];

  const filteredProjects = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some((t) => t.name.toLowerCase().includes(query.toLowerCase())) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNavs = quickNavs.filter((n) =>
    n.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="command-palette-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-28 px-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="command-palette-modal"
        className="w-full max-w-2xl rounded-2xl bg-[#11131c] border border-white/20 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#161824]">
          <Search className="w-4 h-4 text-white/40" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command, section, or project name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-mono text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-white/10 text-white/50 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 font-mono text-xs">
          {/* Projects List */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] text-white/40 uppercase tracking-widest">
                PROJECT CASE STUDIES
              </div>
              <div className="space-y-1 mt-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onSelectProject(proj);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#ff5d38]">
                        {proj.number}
                      </span>
                      <span className="text-white group-hover:text-[#ff5d38] font-sans font-medium text-sm">
                        {proj.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-white/40 px-2 py-0.5 rounded bg-white/5">
                      {proj.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sections List */}
          {filteredNavs.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] text-white/40 uppercase tracking-widest">
                QUICK NAVIGATION
              </div>
              <div className="space-y-1 mt-1">
                {filteredNavs.map((nav) => {
                  const Icon = nav.icon;
                  return (
                    <button
                      key={nav.id}
                      onClick={() => {
                        onNavigateSection(nav.id);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors group"
                    >
                      <div className="flex items-center gap-3 text-white/80 group-hover:text-white">
                        <Icon className="w-4 h-4 text-[#a3e635]" />
                        <span>{nav.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Actions */}
          <div>
            <div className="px-2 py-1 text-[10px] text-white/40 uppercase tracking-widest">
              DIRECT ACTIONS
            </div>
            <div className="space-y-1 mt-1">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors text-white/80 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#38bdf8]" />
                  <span>Copy Direct Email ({PERSONAL_INFO.email})</span>
                </div>
                {copied ? <Check className="w-4 h-4 text-[#a3e635]" /> : <Copy className="w-4 h-4 text-white/30" />}
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#090a0f] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
          <span>NAVIGATION: [ESC] TO CLOSE • [ENTER] TO SELECT</span>
          <span className="text-[#a3e635]">YUDHA.DEV COMMAND CONSOLE</span>
        </div>
      </div>
    </div>
  );
};
