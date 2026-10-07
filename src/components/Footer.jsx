import { SocialLink } from './icons.jsx';
import { company, nav, team } from '../data.js';

export default function Footer() {
  return (
    <footer className="glass !rounded-none border-x-0 border-b-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 py-8 md:flex-row text-center md:text-left">
        <a href="#top" className="text-lg font-extrabold">
          <span className="grad-text">{company.name}</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="muted text-xs sm:text-sm font-medium hover:text-brand-violet transition">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {team.map((m) => (
            <div key={m.name} className="flex items-center gap-1.5">
              <span className="muted text-xs">{m.name.split(' ')[0]}:</span>
              {m.links.map((l) => (
                <SocialLink key={l.url} {...l} size="h-4 w-4" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="muted pb-6 text-center text-xs sm:text-sm">&copy; {company.year} {company.name}. All rights reserved.</p>
    </footer>
  );
}
