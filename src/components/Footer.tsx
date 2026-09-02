import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Instagram, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_LINKS } from '../data/portfolioData';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="main-footer" className="py-16 bg-[#08090d] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          {/* Brand & Statement */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-white">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#a3e635] border border-[#a3e635]/30">
                ACTIVE
              </span>
            </div>
            <p className="font-mono text-xs text-white/50">
              Developer / IT Professional • Systems, Web & UI/UX
            </p>
            <div className="font-mono text-xs text-[#ff5d38] font-bold pt-1">
              "BUILT WITH CURIOSITY + CODE."
            </div>
          </div>

          {/* Timezone & Location */}
          <div className="md:col-span-4 font-mono text-xs text-white/60 space-y-1">
            <div className="flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>SURABAYA, ID (WIB / UTC+7)</span>
            </div>
            <div className="text-white/80 font-mono font-bold text-sm">
              LIVE LOCAL: {currentTime || '07:37:00'}
            </div>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              id="footer-back-to-top-btn"
              onClick={onBackToTop}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141622] hover:bg-[#1e2235] border border-white/10 hover:border-white/30 text-white font-mono text-xs transition-all"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#ff5d38]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and social pills */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38bdf8] transition-colors"
            >
              LINKEDIN
            </a>
            <span>•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#ff5d38] transition-colors"
            >
              EMAIL
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f43f5e] transition-colors"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
