import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { process } from '../data.js';

export default function Process() {
  return (
    <Section
      id="process"
      title="Our process"
      subtitle="Six proven steps from first conversation to launch and ongoing support."
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Continuous gradient vertical connector line passing exactly through badge centers */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-blue via-brand-violet to-brand-violet/20"
        />

        <ol className="space-y-4 sm:space-y-6">
          {process.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative flex items-start gap-3 sm:gap-6"
            >
              {/* Step number badge (centered on connector line) */}
              <div
                className="grad-bg z-10 flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full text-xs sm:text-base font-bold text-white shadow-lg shadow-brand-violet/25 ring-4 ring-[var(--bg)] transition-transform hover:scale-105"
                aria-label={`Step ${i + 1}`}
              >
                {i + 1}
              </div>

              {/* Step description card */}
              <div className="glass flex-1 p-4 sm:p-6 transition hover:border-brand-violet/50">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-xl font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <span className="muted hidden text-xs font-semibold sm:inline-block">
                    Step 0{i + 1}
                  </span>
                </div>
                <p className="muted mt-1.5 text-xs sm:text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
