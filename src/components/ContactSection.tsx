import React, { useState } from 'react';
import { Mail, Linkedin, MessageSquare, Instagram, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { CONTACT_LINKS, PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Construct mailto link with encoded parameters
    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name} via Portfolio`);
    const body = encodeURIComponent(
      `Hello Yudha,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const getContactIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return Mail;
      case 'Linkedin':
        return Linkedin;
      case 'MessageSquare':
        return MessageSquare;
      case 'Instagram':
        return Instagram;
      default:
        return Mail;
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-b border-white/10 bg-[#0a0b12] bg-grid-dense">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3 font-mono text-xs text-white/40 tracking-widest uppercase">
            <span className="text-[#ff5d38]">05 //</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
            LET'S CONNECT & BUILD.
          </h2>
          <p className="font-mono text-sm text-white/60 mt-3 max-w-2xl">
            Have a project in mind, a developer position to fill, or need an experienced full-stack builder for systems engineering? Reach out across any channel below.
          </p>
        </div>

        {/* 4 Large Interactive Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {CONTACT_LINKS.map((link) => {
            const IconComp = getContactIcon(link.icon);

            return (
              <a
                key={link.id}
                id={`contact-card-${link.id}`}
                href={link.url}
                target={link.id === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-[#12141f] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[190px] relative overflow-hidden shadow-xl hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                }}
              >
                {/* Top: Label and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-xs font-bold px-2.5 py-1 rounded border"
                    style={{
                      color: link.accent,
                      borderColor: `${link.accent}40`,
                      backgroundColor: `${link.accent}10`,
                    }}
                  >
                    {link.label}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Center / Value */}
                <div>
                  <div className="font-display font-bold text-lg text-white group-hover:text-white transition-colors">
                    {link.name}
                  </div>
                  <div className="font-mono text-xs text-white/50 truncate mt-1">
                    {link.value}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/70 group-hover:text-white">
                  <span>{link.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Two-Column Bottom Area: Direct Quick Inquiry Form + Availability Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Email Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#11131c] border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 font-mono text-xs text-white/40 uppercase">
              <span>DIRECT MESSAGE COMPOSER</span>
              <span className="text-[#a3e635]">INSTANT DISPATCH</span>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#121820] border border-[#a3e635]/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#a3e635]/20 border border-[#a3e635]/40 flex items-center justify-center mx-auto text-[#a3e635]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">Opening Email Client</h3>
                <p className="font-mono text-xs text-white/70">
                  Your message has been formatted. If your client didn't open automatically, send directly to <span className="text-[#ff5d38]">{PERSONAL_INFO.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 mb-1.5 uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder:text-white/30 focus:border-[#ff5d38] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 mb-1.5 uppercase">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder:text-white/30 focus:border-[#ff5d38] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 mb-1.5 uppercase">SUBJECT / TOPIC</label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Developer Role / Project Consultation"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder:text-white/30 focus:border-[#ff5d38] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/60 mb-1.5 uppercase">MESSAGE *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project scope, timeline, or engineering opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder:text-white/30 focus:border-[#ff5d38] focus:outline-none transition-colors resize-none font-sans text-sm"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-form-btn"
                  className="w-full py-4 rounded-xl bg-[#ff5d38] hover:bg-[#ff7252] text-black font-mono font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff5d38]/20 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH INQUIRY TO YUDHA</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Copy & Status Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#12141e] border border-white/10 space-y-4">
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider">
                DIRECT INBOX ACCESS
              </div>
              <p className="font-sans text-sm text-white/75 leading-relaxed">
                Prefer direct email communication? Copy my address to your clipboard or send an invite directly.
              </p>

              <div className="p-3 rounded-xl bg-[#090a0f] border border-white/10 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-white/90 truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  id="contact-copy-email-button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#ff5d38] hover:text-black text-white font-mono text-xs font-bold transition-all shrink-0 flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2 font-mono text-xs text-white/60">
                <div className="flex items-center justify-between">
                  <span>RESPONSE TIME</span>
                  <span className="text-[#a3e635] font-bold">Within 24 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>LOCATION / TIMEZONE</span>
                  <span className="text-white">Surabaya (WIB / UTC+7)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>WORK ARRANGEMENT</span>
                  <span className="text-white">On-site / Hybrid / Remote</span>
                </div>
              </div>
            </div>

            {/* Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#161926] to-[#10121a] border border-white/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#a3e635]/15 border border-[#a3e635]/30 flex items-center justify-center shrink-0 text-[#a3e635]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white uppercase">
                  HAVE A BOLD IDEA?
                </div>
                <p className="font-mono text-xs text-white/60 mt-0.5">
                  Let’s turn technical complexity into a sleek, deployed reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
