import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Mail, Menu, Palette, Phone, X } from 'lucide-react';
import CrystalizedBall from './components/CrystalizedBall';
import CircularCarousel from './components/CircularCarousel';
import ProjectsSection from './components/ProjectsSection';
import DepthCarousel from './components/DepthCarousel';
import ProfileCard from './components/ProfileCard';
import { silhouetteArt, PATTERN_ART } from './teamArt';
import { SERVICES, SERVICE_ITEMS } from './serviceArt';
import { STEPS, buildProcessItems } from './process';
import { THEMES, DEFAULT_THEME, THEME_KEY } from './themes';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const TEAM: {
  name: string;
  role: string;
  handle: string;
  email: string;
  /** Optional cut-out portrait (PNG/WebP with transparency), e.g. '/team/niket.png'. Falls back to a generated silhouette. */
  photo?: string;
  links: { label: string; href: string }[];
}[] = [
  {
    name: 'Niket Khurana',
    role: 'Founder',
    handle: 'nikhurana13',
    email: 'khuranan592@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/niketkhurana' },
      { label: 'GitHub', href: 'https://github.com/nikhurana13' },
      { label: 'GitHub (2)', href: 'https://github.com/NiranjanHr59' },
    ],
  },
  {
    name: 'Aaditya Sharma',
    role: 'Co-founder',
    handle: 'aadityasharma8707',
    email: 'aadityasharma8707@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/aaditya-sharma-0192302b7' },
      { label: 'GitHub', href: 'https://github.com/aadityasharma8707' },
    ],
  },
];

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

function loadTheme(): string {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved && THEMES.some((t) => t.id === saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  return DEFAULT_THEME;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [picker, setPicker] = useState(false);
  const [service, setService] = useState(0);
  const [step, setStep] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);
  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const [themeId, setThemeId] = useState<string>(loadTheme);
  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];
  // Process card artwork follows the theme's accent colours (Daylight uses its violet instead of the pale swatch).
  const stepItems = useMemo(
    () => buildProcessItems(theme.swatch[0], theme.id === 'daylight' ? '#7c3aed' : theme.swatch[1]),
    [theme],
  );
  // Team card styling follows the theme: dark themes use a deep accent backdrop, Daylight uses the light card.
  const card = useMemo(() => {
    const light = theme.id === 'daylight';
    return {
      theme: (light ? 'light' : 'dark') as 'light' | 'dark',
      backdrop: light ? '#e6dcf7' : theme.swatch[1],
      statusColor: theme.swatch[0],
      avatar: light ? silhouetteArt('#4c3a78', '#241a3f') : silhouetteArt('#14101f', '#05040a'),
    };
  }, [theme]);
  // The step tracker drives the carousel by pressing its own dot buttons.
  const goToStep = (i: number) =>
    stepsRef.current?.querySelectorAll<HTMLButtonElement>('.depth-carousel__dot')[i]?.click();

  // Apply the theme to the document and remember the choice.
  useEffect(() => {
    document.documentElement.dataset.theme = theme.id;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.bg);

    // Update dynamic favicon & touch icon
    const fav = document.getElementById('favicon-link') as HTMLLinkElement | null;
    if (fav) fav.href = theme.favicon;
    const appleFav = document.getElementById('apple-touch-icon') as HTMLLinkElement | null;
    if (appleFav) appleFav.href = theme.favicon;

    try {
      localStorage.setItem(THEME_KEY, theme.id);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const chooseTheme = (id: string) => {
    setThemeId(id);
    setPicker(false);
  };

  return (
    <div className="min-h-screen bg-bg text-ink font-sans transition-colors duration-500">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-line group-hover:ring-accent/50 shadow-sm transition-all duration-300">
              <img
                src={theme.icon}
                alt={`${theme.name} SK Solutions Icon`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-semibold tracking-tight text-ink text-base">SK Solutions</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-body">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme picker */}
            <div className="relative">
              <button
                onClick={() => setPicker((p) => !p)}
                aria-label="Change theme"
                aria-expanded={picker}
                className="flex items-center gap-2 h-9 pl-2.5 pr-3 rounded-lg border border-line text-xs font-medium text-body hover:text-ink hover:bg-surface transition-colors"
              >
                <Palette className="w-4 h-4" />
                <img
                  src={theme.icon}
                  alt={theme.name}
                  className="w-4 h-4 rounded-sm object-cover ring-1 ring-ink/20"
                />
                <span className="hidden sm:inline">{theme.name}</span>
              </button>

              {picker && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setPicker(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-12 z-50 w-72 rounded-2xl border border-line bg-bg/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/30"
                  >
                    <p className="px-3 pt-2 pb-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted">Theme</p>
                    {THEMES.map((t) => {
                      const active = t.id === theme.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => chooseTheme(t.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                            active ? 'bg-surface' : 'hover:bg-surface'
                          }`}
                        >
                          <img
                            src={t.icon}
                            alt={t.name}
                            className="w-8 h-8 rounded-lg object-cover ring-1 ring-line shrink-0"
                          />
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-medium text-ink">{t.name}</span>
                            <span className="block text-xs text-muted truncate">{t.tagline}</span>
                          </span>
                          {active && <Check className="w-4 h-4 text-accent-text shrink-0" />}
                        </button>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </div>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors"
            >
              Start a project <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              className="md:hidden p-2 text-body"
              onClick={() => setMenu((m) => !m)}
              aria-label="Toggle menu"
            >
              {menu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menu && (
          <div className="md:hidden border-t border-line bg-bg/95 px-6 py-4 flex flex-col gap-4 text-sm text-body">
            <div className="flex items-center gap-3 pb-3 border-b border-line">
              <img
                src={theme.icon}
                alt={theme.name}
                className="w-7 h-7 rounded-lg object-cover ring-1 ring-line"
              />
              <span className="font-semibold text-ink text-sm">SK Solutions</span>
            </div>
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenu(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero: orb is the background, animation untouched. Its preset follows the theme. */}
      <section id="top" className="relative h-screen min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <CrystalizedBall preset={theme.orb} theme={theme.mode} size={0.7} interactive />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg pointer-events-none" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-20 pointer-events-none">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-accent-text mb-5"
          >
            Websites · Apps · AI / ML
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.05] max-w-4xl"
          >
            We build, train, and ship intelligent digital products.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-3 pointer-events-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors shadow-lg shadow-accent/30"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg border border-line text-ink hover:bg-surface transition-colors"
            >
              Explore services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services: circular carousel */}
      <section id="services" className="relative py-28 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-1/3 h-96"
          style={{
            background:
              'radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 16%, transparent), transparent 65%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div {...fade} className="max-w-2xl mb-6">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-text mb-4">What we do</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Everything from the first idea to the deployed product.
            </h2>
          </motion.div>
        </div>

        <motion.div {...fade} className="relative">
          <div className="h-[440px] sm:h-[640px] w-full relative text-ink">
            <CircularCarousel
              items={SERVICE_ITEMS}
              preset="cylinder"
              intro="rise"
              cardWidth={300}
              aspectRatio={600 / 720}
              gap={22}
              speed={10}
              tilt={-6}
              cornerRadius={20}
              depthFade={0.7}
              fadeColor={theme.bg}
              innerShade={0.5}
              captions
              onChange={setService}
              onItemClick={(_, i) => setService(i)}
            />
          </div>
        </motion.div>

        <div className="relative max-w-2xl mx-auto px-6 text-center mt-2 min-h-[72px]">
          <motion.p
            key={service}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm sm:text-base text-body leading-relaxed"
          >
            {SERVICES[service].text}
          </motion.p>
          <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
            Drag, scroll or click a card to explore
          </p>
        </div>
      </section>

      {/* Projects: lazy-loaded WebGL carousel with a no-WebGL fallback */}
      <ProjectsSection />

      {/* Process: depth carousel + step tracker */}
      <section id="process" className="relative border-y border-line overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 78% 55%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <motion.div {...fade} className="max-w-2xl mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-text mb-4">How we work</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              A simple process, so you always know where things stand.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* Step details + tracker */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="min-h-[250px]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-white flex items-center justify-center shadow-lg shadow-accent/30">
                    <svg
                      viewBox="0 0 24 24"
                      width="26"
                      height="26"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: STEPS[step].glyph }}
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent-text">
                    Step {STEPS[step].n} / {String(STEPS.length).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink mb-4">{STEPS[step].title}</h3>
                <p className="text-base text-body leading-relaxed max-w-md mb-6">{STEPS[step].text}</p>
                <div className="flex flex-wrap gap-2">
                  {STEPS[step].chips.map((c) => (
                    <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-line bg-surface text-body">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tracker: click a step to bring its card to the front */}
              <div className="mt-10 max-w-md">
                <div className="relative flex justify-between">
                  <div className="absolute left-3 right-3 top-3 h-px bg-line" />
                  <div
                    className="absolute left-3 top-3 h-px bg-gradient-to-r from-accent to-accent-2 transition-all duration-500"
                    style={{ width: `calc((100% - 1.5rem) * ${step / (STEPS.length - 1)})` }}
                  />
                  {STEPS.map((s, i) => {
                    const done = i <= step;
                    return (
                      <button
                        key={s.n}
                        onClick={() => goToStep(i)}
                        aria-label={`Go to step ${s.n}: ${s.title}`}
                        className="relative z-10 flex flex-col items-center gap-2 group"
                      >
                        <span
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 bg-bg ${
                            done ? 'border-accent' : 'border-line group-hover:border-accent/60'
                          } ${i === step ? 'ring-4 ring-accent/25 scale-110' : ''}`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              done ? 'bg-accent' : 'bg-transparent'
                            }`}
                          />
                        </span>
                        <span
                          className={`text-[11px] font-mono uppercase tracking-[0.15em] transition-colors ${
                            i === step ? 'text-ink' : 'text-muted group-hover:text-body'
                          }`}
                        >
                          {s.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stacked depth cards */}
            <motion.div {...fade} className="lg:col-span-7 order-1 lg:order-2">
              <div ref={stepsRef} className="relative h-[480px] sm:h-[560px] w-full">
                <DepthCarousel
                  items={stepItems}
                  cardWidth={340}
                  cardHeight={420}
                  radius={26}
                  tint="#05060a"
                  depth={200}
                  spread={narrow ? 44 : 82}
                  tilt={20}
                  tiltDirection="right"
                  perspective={1500}
                  visibleCards={3}
                  falloff={0.22}
                  blur={5}
                  autoplay
                  autoplayDelay={4200}
                  loop
                  onChange={(i) => setStep(i)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-6xl mx-auto px-6 py-28">
        <motion.div {...fade} className="max-w-2xl mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-text mb-4">The team</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">Two founders, building hands-on.</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-14 justify-items-center">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              {...fade}
              transition={{ ...fade.transition, delay: i * 0.12 }}
              className="flex flex-col items-center w-full max-w-[340px]"
            >
              <ProfileCard
                name={m.name}
                title={m.role}
                handle={m.handle}
                status="Open to new projects"
                statusColor={card.statusColor}
                contactText="Contact"
                avatarUrl={m.photo ?? card.avatar}
                iconUrl={PATTERN_ART}
                backdropColor={card.backdrop}
                theme={card.theme}
                holo={0.8}
                glare={0.5}
                tiltStrength={12}
                parallax={8}
                radius={16}
                enableMobileTilt
                onContactClick={() => {
                  window.location.href = `mailto:${m.email}`;
                }}
              />
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {m.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-line text-body hover:border-accent/50 hover:text-ink transition-colors"
                  >
                    {l.label} <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 pb-28">
        <motion.div
          {...fade}
          className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-surface to-bg p-10 sm:p-16 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink max-w-3xl mx-auto leading-tight">
            Have a product in mind? Let&apos;s build it.
          </h2>
          <p className="mt-5 text-body max-w-xl mx-auto">
            Tell us what you need, a website, an app, an AI model or a training program, and we&apos;ll get back to you.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:khuranan592@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors"
            >
              <Mail className="w-4 h-4" /> Email us
            </a>
            <a
              href="tel:+919034842518"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-line text-ink hover:bg-surface transition-colors"
            >
              <Phone className="w-4 h-4" /> 9034842518
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-line py-12 px-6 flex flex-col items-center justify-center gap-4 text-center text-xs text-muted">
        <a href="#top" className="flex flex-col items-center gap-2 group transition-transform hover:scale-105">
          <img
            src={theme.logo}
            alt="SK Solutions"
            className="h-12 sm:h-14 w-auto object-contain transition-opacity duration-300 opacity-90 group-hover:opacity-100"
          />
        </a>
        <p>© {new Date().getFullYear()} SK Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
