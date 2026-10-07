import { motion } from 'framer-motion';

/** Shared section wrapper: id for nav anchors, title, optional subtitle. Fully responsive. */
export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20 ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="muted mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
}
