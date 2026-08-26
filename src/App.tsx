import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ExperienceSection } from './components/ExperienceSection';
import { TechStackSection } from './components/TechStackSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);

  // Sync hash routing (e.g., #projects/sistem-informasi-inventarisasi...)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#projects/')) {
        const slug = hash.replace('#projects/', '');
        const found = PROJECTS.find((p) => p.slug === slug);
        if (found) {
          setSelectedProject(found);
          return;
        }
      }
      if (hash === '' || hash === '#') {
        setSelectedProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    if (selectedProject) return;

    const sections = ['hero', 'about', 'projects', 'experience', 'tech-stack', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const scrollToSection = (sectionId: string) => {
    setSelectedProject(null);
    if (window.location.hash) {
      window.history.pushState(null, '', ' ');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `#projects/${project.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f2f3f7] selection:bg-[#ff5d38] selection:text-black font-sans relative">
      {/* Top Sticky Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        isProjectDetailOpen={!!selectedProject}
        onBackToHome={handleBackToHome}
      />

      {/* Main View: Project Detail Page OR Full Home Portfolio */}
      <main>
        {selectedProject ? (
          <ProjectDetailPage
            project={selectedProject}
            onBack={handleBackToHome}
            onSelectProject={handleSelectProject}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onExploreProjects={() => scrollToSection('projects')}
              onConnect={() => scrollToSection('contact')}
            />

            {/* About / Introduction */}
            <AboutSection />

            {/* Projects Showcase */}
            <ProjectsSection onSelectProject={handleSelectProject} />

            {/* Experience Timeline */}
            <ExperienceSection />

            {/* Tech Stack Explorer */}
            <TechStackSection />

            {/* Contact & Social Links */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigateSection={scrollToSection}
        onSelectProject={handleSelectProject}
      />
    </div>
  );
}
