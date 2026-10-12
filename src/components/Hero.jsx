import { motion } from 'framer-motion';
import { company } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative gradient glows (contained so they never cause mobile overflow) */}
      <div className="pointer-events-none absolute -left-24 sm:-left-32 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-blue/20 sm:bg-brand-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 sm:-right-32 top-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-violet/20 sm:bg-brand-violet/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[75vh] sm:min-h-[85vh] max-w-6xl flex-col justify-center px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border-brand-blue/30 w-fit mb-5 text-xs sm:text-sm font-medium"
        >
          <img src="/logo-mark.png" alt="" className="h-4 w-auto object-contain drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
          <span className="grad-text font-semibold">SK Solutions</span>
          <span className="muted hidden sm:inline">&bull; Web, Apps &amp; AI/ML Systems</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
        >
          <span className="grad-text">{company.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="muted mt-4 sm:mt-6 max-w-2xl text-base sm:text-xl lg:text-2xl leading-relaxed"
        >
          {company.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className="btn btn-primary w-full sm:w-auto text-center justify-center">
            View Our Work
          </a>
          <a href="#contact" className="btn btn-ghost w-full sm:w-auto text-center justify-center">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
