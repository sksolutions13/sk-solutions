import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from './Section.jsx';
import { projects, projectFilters } from '../data.js';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" title="Our work" subtitle="Sample projects and portfolio highlights across Web, App, AI/ML, and Workshops.">
      {/* Category filter pills (touch-friendly on mobile) */}
      <div className="mb-6 sm:mb-8 flex flex-wrap gap-1.5 sm:gap-2" role="group" aria-label="Project category filter">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`btn !px-3 !py-1.5 sm:!px-4 sm:!py-2 text-xs sm:text-sm ${
              filter === f ? 'btn-primary' : 'btn-ghost'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="glass overflow-hidden transition hover:border-brand-violet/40"
            >
              {p.image && <img src={p.image} alt={p.title} className="h-36 sm:h-40 w-full object-cover" loading="lazy" />}
              <div className="p-4 sm:p-5">
                <span className="muted text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  {p.category}
                </span>
                <h3 className="mt-1 text-base sm:text-lg font-bold">{p.title}</h3>
                <p className="muted mt-2 text-xs sm:text-sm leading-relaxed">{p.text}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border)] bg-white/5 px-2.5 py-0.5 text-[11px] sm:text-xs text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grad-text mt-4 inline-block text-xs sm:text-sm font-semibold hover:underline"
                  >
                    View project →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
