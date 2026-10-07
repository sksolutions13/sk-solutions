import { Mail, Phone, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import Section from './Section.jsx';
import { SocialLink, WhatsAppIcon } from './icons.jsx';
import { company, team } from '../data.js';

export default function Contact() {
  const whatsappUrl =
    'https://wa.me/919034842518?text=' +
    encodeURIComponent('Hi S&K_solutions, I would like to discuss a project with your team.');

  const emailBothUrl = `mailto:${company.mailtoTo?.split(',')[0] || 'khuranan592@gmail.com'}?cc=${
    encodeURIComponent(company.mailtoTo?.split(',')[1] || 'aadityasharma8707@gmail.com')
  }&subject=${encodeURIComponent('Project Inquiry - S&K_solutions')}`;

  return (
    <Section
      id="contact"
      title="Get in touch"
      subtitle="Ready to build your next website, app, or custom AI solution? Connect directly with our founders."
    >
      <div className="grid gap-5 sm:gap-6 grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Instant WhatsApp & Direct Calling */}
        <div className="space-y-4 sm:space-y-6">
          {/* WhatsApp Primary Highlight Card */}
          <div className="glass relative overflow-hidden p-5 sm:p-6 transition hover:border-[#25D366]/40">
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#25D366]/10 blur-2xl" />

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/15 px-2.5 py-1 text-xs font-semibold text-[#25D366]">
                <Sparkles size={13} /> Instant Response
              </span>
              <span className="muted flex items-center gap-1 text-xs">
                <Clock size={13} /> Active now
              </span>
            </div>

            <div className="mt-4 flex items-start gap-3.5 sm:gap-4">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25">
                <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Chat on WhatsApp</h3>
                <p className="muted mt-1 text-xs sm:text-sm leading-relaxed">
                  The quickest way to reach us. Discuss requirements, get estimates, or schedule a quick intro call.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] font-semibold text-black hover:bg-[#20ba59]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>Start WhatsApp Chat</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Direct Phone Lines */}
          <div className="glass p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Phone className="text-brand-violet" size={18} />
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-brand-violet">
                Direct Phone Lines
              </h3>
            </div>
            <p className="muted mt-1 text-xs sm:text-sm">
              Call us directly for urgent inquiries or consultations:
            </p>

            <div className="mt-4 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
              {(company.phones || [
                { label: 'Niket Khurana', number: '+91 9034842518', href: 'tel:+919034842518' },
                { label: 'Aaditya Sharma', number: '+91 9958846946', href: 'tel:+919958846946' },
              ]).map((p) => (
                <a
                  key={p.number}
                  href={p.href}
                  className="group flex flex-col rounded-xl border border-[var(--border)] bg-white/5 p-3.5 sm:p-4 transition hover:-translate-y-0.5 hover:border-brand-violet hover:bg-white/10"
                >
                  <span className="muted text-xs font-medium">{p.label}</span>
                  <span className="mt-1 font-semibold text-sm sm:text-base group-hover:text-brand-violet">
                    {p.number}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-brand-blue">
                    Tap to call <ArrowUpRight size={12} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Founder Email & Profile Cards */}
        <div className="space-y-4 sm:space-y-6">
          <div className="glass p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Mail className="text-brand-blue" size={18} />
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-brand-blue">
                Email the Founders Directly
              </h3>
            </div>
            <p className="muted mt-1 text-xs sm:text-sm">
              Send your project brief or RFP directly to either founder, or email both at once:
            </p>

            {/* Individual Founder Cards */}
            <div className="mt-4 space-y-3">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="flex flex-col justify-between gap-3 rounded-xl border border-[var(--border)] bg-white/5 p-3.5 sm:p-4 sm:flex-row sm:items-center"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm sm:text-base">{m.name}</span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] sm:text-xs text-brand-violet shrink-0">
                        {m.role}
                      </span>
                    </div>
                    <a
                      href={`mailto:${m.email}`}
                      className="muted mt-1 inline-flex items-center gap-1.5 text-xs sm:text-sm break-all hover:text-brand-blue"
                    >
                      <Mail size={13} className="shrink-0" />
                      <span>{m.email}</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                    {m.links.map((l) => (
                      <SocialLink key={l.url} {...l} size="h-4 w-4" />
                    ))}
                    <a
                      href={`mailto:${m.email}`}
                      className="btn btn-ghost !px-3 !py-1.5 text-xs font-medium hover:text-brand-blue"
                    >
                      Email
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Joint Email Action */}
            <div className="mt-4 sm:mt-5 rounded-xl border border-dashed border-brand-violet/40 bg-brand-violet/5 p-4 text-center">
              <p className="text-xs sm:text-sm font-medium">Want to reach both founders together?</p>
              <a
                href={emailBothUrl}
                className="btn btn-primary mt-3 inline-flex w-full sm:w-auto items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <Mail size={15} />
                <span>Email Both Founders</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
