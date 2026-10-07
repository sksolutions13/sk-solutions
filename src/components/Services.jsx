import { motion } from 'framer-motion';
import { Globe, Smartphone, BrainCircuit, BarChart3, Server, GraduationCap, Rocket } from 'lucide-react';
import Section from './Section.jsx';
import { services } from '../data.js';

const icons = {
  globe: Globe,
  phone: Smartphone,
  brain: BrainCircuit,
  chart: BarChart3,
  server: Server,
  cap: GraduationCap,
  rocket: Rocket,
};

export default function Services() {
  return (
    <Section id="services" title="What we do" subtitle="From first prototype to production support.">
      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] || Globe;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.04 }}
              className="glass p-5 sm:p-6 transition hover:-translate-y-1 hover:border-brand-violet/50"
            >
              <div className="grad-bg mb-3.5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl text-white shadow-md shadow-brand-blue/20">
                <Icon size={20} className="sm:size-[22px]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold">{s.title}</h3>
              <p className="muted mt-2 text-xs sm:text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
