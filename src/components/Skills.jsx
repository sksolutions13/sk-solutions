import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <Section id="skills" title="Skills and tech stack" subtitle="The modern tools and technologies we use to build, train, and ship.">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: i * 0.02 }}
            className="glass p-3 sm:p-4 text-center transition hover:-translate-y-0.5 hover:border-brand-violet/50"
          >
            <p className="text-xs sm:text-sm font-semibold text-[var(--fg)] break-words">{s.name}</p>
            <p className="muted mt-1 text-[11px] sm:text-xs">{s.group}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
