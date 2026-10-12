import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { nav, company } from '../data.js';

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 !rounded-none border-x-0 border-t-0 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group" aria-label={company.name}>
          <img
            src="/logo-mark.png"
            alt={company.name}
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
          />
          <span className="text-base sm:text-lg font-black tracking-tight leading-none">
            <span className="text-slate-900 dark:text-white font-extrabold">SK</span>{' '}
            <span className="grad-text font-black">SOLUTIONS</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="muted text-sm font-medium transition hover:text-brand-violet"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls: Theme Toggle & Mobile Menu Hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle light/dark theme"
            className="glass flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center transition hover:border-brand-violet/50"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="glass flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center md:hidden transition hover:border-brand-violet/50"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--border)] px-4 pb-4 pt-2 md:hidden">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
