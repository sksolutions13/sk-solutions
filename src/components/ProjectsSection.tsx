import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, PROJECT_ITEMS } from '../projects';

// The WebGL carousel is the heaviest part of the page, so it is code-split and only
// loaded + mounted once the section is about to scroll into view.
const FlexCarousel = lazy(() => import('./FlexCarousel'));

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

function supportsWebGL2(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2');
  } catch {
    return false;
  }
}

/** Returns true once the element is within `margin` of the viewport (and stays true). */
function useNearViewport<T extends Element>(margin = '500px') {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    if (typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin, near]);
  return [ref, near] as const;
}

/** Placeholder with the carousel's exact height, so nothing jumps while it loads. */
function CarouselSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 px-6" aria-hidden="true">
      {[0.55, 1, 0.55].map((o, i) => (
        <div
          key={i}
          className="h-[38%] sm:h-[46%] flex-1 max-w-[520px] rounded-2xl border border-line bg-surface animate-pulse"
          style={{ opacity: o }}
        />
      ))}
    </div>
  );
}

/** Used when WebGL2 isn't available: a native scroll-snap gallery with the same optimized images. */
function ProjectGallery() {
  return (
    <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 [scrollbar-width:thin]">
      {PROJECTS.map((p, i) => (
        <li key={p.key} className="snap-center shrink-0 w-[85%] sm:w-[480px]">
          <article className="rounded-2xl border border-line bg-surface overflow-hidden h-full">
            <img
              src={p.image}
              alt={`${p.title} screenshot`}
              width={1200}
              height={600}
              loading={i < 1 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full aspect-[2/1] object-cover"
            />
            <div className="p-5">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent-text">{p.category}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-body leading-relaxed">{p.text}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectsSection() {
  const [project, setProject] = useState(0);
  const [sectionRef, near] = useNearViewport<HTMLElement>();
  const [webgl, setWebgl] = useState(true);
  useEffect(() => setWebgl(supportsWebGL2()), []);

  const active = PROJECTS[project];

  return (
    <section id="projects" ref={sectionRef} className="relative pt-12 pb-28 overflow-hidden" aria-labelledby="projects-title">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-96"
        style={{
          background:
            'radial-gradient(ellipse at center, color-mix(in srgb, var(--accent-2) 14%, transparent), transparent 65%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div {...fade} className="max-w-2xl mb-4">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-text mb-4">Selected work</p>
          <h2 id="projects-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Products we&apos;ve built, trained and shipped.
          </h2>
        </motion.div>
      </div>

      {webgl ? (
        <>
          <motion.div {...fade} className="relative">
            <div className="h-[540px] sm:h-[640px] w-full relative text-ink">
              {near ? (
                <Suspense fallback={<CarouselSkeleton />}>
                  <FlexCarousel
                    items={PROJECT_ITEMS}
                    preset="liquid"
                    intro="rise"
                    cardHeight={0.5}
                    gap={12}
                    radius={16}
                    squeeze={0.2}
                    focusOnClick
                    captions
                    // Let the page scroll normally over the carousel; horizontal swipes/trackpad still drive it.
                    captureWheel={false}
                    onChange={setProject}
                  />
                </Suspense>
              ) : (
                <CarouselSkeleton />
              )}
            </div>
          </motion.div>

          <div className="relative max-w-2xl mx-auto px-6 text-center mt-2 min-h-[120px]" aria-live="polite">
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm sm:text-base text-body leading-relaxed">{active.text}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {active.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-line text-body">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
            <p className="mt-5 text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
              Drag, swipe or use arrow keys · Click a project to focus it
            </p>
          </div>

          {/* All projects stay in the DOM as real text for search engines and screen readers. */}
          <ul className="sr-only">
            {PROJECTS.map((p) => (
              <li key={p.key}>
                <h3>{p.title}</h3>
                <p>
                  {p.category}. {p.text} Technologies: {p.tags.join(', ')}.
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="relative mt-8">
          <ProjectGallery />
        </div>
      )}
    </section>
  );
}
