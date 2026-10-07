import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import Section from './Section.jsx';
import { stats } from '../data.js';

/** Counts from 0 to `to` once, when scrolled into view (respects reduced motion). */
function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setN(to);
      return;
    }
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, shouldReduceMotion]);

  return <span ref={ref}>{n}</span>;
}

export default function Stats() {
  return (
    <Section id="stats" className="!py-8 sm:!py-14">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass p-4 sm:p-6 text-center transition hover:border-brand-violet/40">
            <p className="grad-text text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              <Counter to={s.value} />
            </p>
            <p className="muted mt-1.5 sm:mt-2 text-xs sm:text-sm leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
