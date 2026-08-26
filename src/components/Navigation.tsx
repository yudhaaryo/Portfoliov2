import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Sparkles, Command } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCommandPalette: () => void;
  isProjectDetailOpen: boolean;
  onBackToHome: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  onOpenCommandPalette,
  isProjectDetailOpen,
  onBackToHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'tech-stack', label: 'TECH STACK' },
    { id: 'contact', label: 'SOCIAL MEDIA' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isProjectDetailOpen) {
      onBackToHome();
      setTimeout(() => {
        onNavigate(id);
      }, 100);
    } else {
      onNavigate(id);
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            id="brand-logo-button"
            onClick={() => {
              if (isProjectDetailOpen) onBackToHome();
              else onNavigate('hero');
            }}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-md bg-[#161821] border border-white/15 flex items-center justify-center group-hover:border-[#ff5d38] transition-colors">
              <span className="font-mono text-xs font-bold text-[#ff5d38] group-hover:rotate-12 transition-transform duration-300">
                YA
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#ff5d38] transition-colors">
                  {PERSONAL_INFO.name.toUpperCase()}
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-white/5 text-[#a3e635] border border-[#a3e635]/30">
                  DEV
                </span>
              </div>
              <span className="hidden sm:block font-mono text-[10px] text-white/40 tracking-wider">
                YOGYAKARTA • UTC+7
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-[#12141c]/80 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = !isProjectDetailOpen && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-black font-bold bg-[#f2f3f7]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Command Menu Trigger */}
            <button
              id="command-palette-trigger"
              onClick={onOpenCommandPalette}
              aria-label="Open command palette"
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#141620] border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all text-xs font-mono"
              title="Press ⌘K or Ctrl+K"
            >
              <Command className="w-3.5 h-3.5 text-[#ff5d38]" />
              <span className="text-[11px]">⌘K</span>
            </button>

            {/* Primary CTA */}
            <button
              id="nav-contact-cta"
              onClick={() => handleLinkClick('contact')}
              className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-mono font-bold tracking-wider text-black bg-[#ff5d38] hover:bg-[#ff7252] rounded-lg transition-all shadow-lg shadow-[#ff5d38]/20 active:scale-95"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#141620] border border-white/10 text-white hover:text-[#ff5d38] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#090a0f]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-white/10 animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-3">
            <div className="font-mono text-[10px] uppercase text-white/40 tracking-widest px-2 pb-1 border-b border-white/10">
              NAVIGATION
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className="flex items-center justify-between p-3 rounded-xl bg-[#12141c] border border-white/10 text-left font-display font-bold text-lg text-white hover:border-[#ff5d38] hover:text-[#ff5d38] transition-all"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-white/40">↗</span>
              </button>
            ))}

            <button
              id="mobile-command-trigger"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-dashed border-white/15 text-white/70 font-mono text-xs"
            >
              <Command className="w-4 h-4 text-[#ff5d38]" />
              <span>Search & Quick Jumps (⌘K)</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-[#12141c] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-white/60">
              <span>STATUS</span>
              <span className="text-[#10b981] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                AVAILABLE FOR HIRE
              </span>
            </div>
            <div className="text-xs text-white/80 font-mono truncate">
              {PERSONAL_INFO.email}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
