import { Mail } from 'lucide-react';
import Section from './Section.jsx';
import { SocialLink } from './icons.jsx';
import { about, team } from '../data.js';

export default function About() {
  return (
    <Section id="about" title="About us" subtitle={about.story}>
      <p className="mb-8 max-w-3xl text-base sm:text-lg leading-relaxed">
        <span className="font-semibold text-brand-blue">Mission: </span>
        {about.mission}
      </p>

      {/* Values Grid */}
      <div className="grid gap-3.5 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {about.values.map((v) => (
          <div key={v.title} className="glass p-4 sm:p-5 transition hover:border-brand-violet/40">
            <h3 className="font-semibold text-base">{v.title}</h3>
            <p className="muted mt-1.5 text-xs sm:text-sm leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>

      {/* Team Cards */}
      <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2">
        {team.map((m) => (
          <article key={m.name} className="glass p-5 sm:p-6 transition hover:border-brand-violet/40">
            <div className="flex items-center gap-4">
              <div
                className="grad-bg flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full text-lg sm:text-xl font-bold text-white shadow-md shadow-brand-violet/20"
                aria-hidden="true"
              >
                {m.name
                  .split(' ')
                  .map((w) => w[0])
                  .join('')}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">{m.name}</h3>
                <p className="grad-text font-semibold text-sm sm:text-base">{m.role}</p>
              </div>
            </div>

            <p className="muted mt-3 text-xs sm:text-sm leading-relaxed">{m.skills}</p>

            <a
              href={`mailto:${m.email}`}
              className="muted mt-4 inline-flex items-center gap-2 text-xs sm:text-sm break-all hover:text-brand-violet"
            >
              <Mail size={15} className="shrink-0" />
              <span>{m.email}</span>
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {m.links.map((l) => (
                <SocialLink key={l.url} {...l} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
