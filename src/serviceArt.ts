// Generates the illustrated card images used by the Services carousel.
// Each card is an inline SVG (data URI), so there are no image files to host.

export interface Service {
  key: string;
  title: string;
  subtitle: string;
  text: string;
  accent: string;
  accent2: string;
  glyph: string;
}

const S = 'fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';

const GLYPHS: Record<string, string> = {
  web: `<g ${S}><rect x="10" y="22" width="100" height="76" rx="10"/><path d="M10 42H110"/><path d="M26 62H66M26 76H92"/><rect x="76" y="54" width="20" height="12" rx="3"/></g><g fill="currentColor"><circle cx="22" cy="32" r="2.5"/><circle cx="32" cy="32" r="2.5"/><circle cx="42" cy="32" r="2.5"/></g>`,
  mobile: `<g ${S}><rect x="36" y="8" width="48" height="104" rx="10"/><path d="M52 100H68"/><path d="M48 32H72M48 48H72M48 64H62"/></g>`,
  webapp: `<g ${S}><rect x="12" y="16" width="96" height="88" rx="10"/><path d="M40 16V104"/><rect x="52" y="30" width="22" height="22" rx="4"/><rect x="82" y="30" width="16" height="22" rx="4"/><rect x="52" y="62" width="46" height="30" rx="4"/><path d="M22 34H32M22 48H32M22 62H32"/></g>`,
  ai: `<g ${S}><path d="M30 30L60 42M30 60L60 42M30 60L60 80M30 90L60 80M60 42L92 60M60 80L92 60"/></g><g fill="currentColor"><circle cx="30" cy="30" r="7"/><circle cx="30" cy="60" r="7"/><circle cx="30" cy="90" r="7"/><circle cx="60" cy="42" r="7"/><circle cx="60" cy="80" r="7"/><circle cx="92" cy="60" r="9"/></g>`,
  train: `<g ${S}><path d="M16 14V104H108"/><path d="M26 28C44 30 46 76 66 84C80 90 92 88 104 88"/></g><g fill="currentColor"><circle cx="104" cy="88" r="6"/><circle cx="26" cy="28" r="4"/></g>`,
  analytics: `<g ${S}><rect x="20" y="62" width="18" height="40" rx="3"/><rect x="51" y="40" width="18" height="62" rx="3"/><rect x="82" y="18" width="18" height="84" rx="3"/><path d="M10 108H110"/></g>`,
  layers: `<g ${S}><path d="M60 12L108 36L60 60L12 36Z"/><path d="M12 56L60 80L108 56"/><path d="M12 76L60 100L108 76"/></g>`,
  cap: `<g ${S}><path d="M60 20L112 46L60 72L8 46Z"/><path d="M28 58V82C28 94 92 94 92 82V58"/><path d="M112 46V78"/></g>`,
};

export const SERVICES: Service[] = [
  {
    key: 'web',
    title: 'Websites',
    subtitle: 'Design & Development',
    text: 'Fast, responsive business sites and portfolios, designed and engineered end to end.',
    accent: '#F25BD0',
    accent2: '#7C3AED',
    glyph: GLYPHS.web,
  },
  {
    key: 'mobile',
    title: 'Mobile Apps',
    subtitle: 'Android & iOS',
    text: 'Polished mobile applications built for real users, from the first screen to the store release.',
    accent: '#5CE1FF',
    accent2: '#3B82F6',
    glyph: GLYPHS.mobile,
  },
  {
    key: 'webapp',
    title: 'Web Apps',
    subtitle: 'Products & Dashboards',
    text: 'Production-ready web applications for your customers or your internal teams.',
    accent: '#9478FF',
    accent2: '#F25BD0',
    glyph: GLYPHS.webapp,
  },
  {
    key: 'ai',
    title: 'AI / ML Models',
    subtitle: 'Custom Intelligence',
    text: 'Custom machine learning models designed around your problem and built into your product.',
    accent: '#5CFFC8',
    accent2: '#06B6D4',
    glyph: GLYPHS.ai,
  },
  {
    key: 'train',
    title: 'Model Training',
    subtitle: 'Train, Tune, Evaluate',
    text: 'We train and tune models on your data, then validate them before they go anywhere near production.',
    accent: '#FF8A2A',
    accent2: '#F25BD0',
    glyph: GLYPHS.train,
  },
  {
    key: 'analytics',
    title: 'Data Analytics',
    subtitle: 'Insight & Dashboards',
    text: 'Dashboards and analysis that turn raw data into decisions you can act on.',
    accent: '#FFD36E',
    accent2: '#FF8A2A',
    glyph: GLYPHS.analytics,
  },
  {
    key: 'e2e',
    title: 'End-to-end Projects',
    subtitle: 'Idea to Deployment',
    text: 'From the first idea to deployment, one team owns the whole build.',
    accent: '#F25BD0',
    accent2: '#9478FF',
    glyph: GLYPHS.layers,
  },
  {
    key: 'training',
    title: 'Training Modules',
    subtitle: 'Learn by Building',
    text: 'Hands-on training programs in development, data and AI for students and teams.',
    accent: '#5CFFC8',
    accent2: '#5CE1FF',
    glyph: GLYPHS.cap,
  },
];

const W = 600;
const H = 720;

function cardSvg(s: Service, index: number): string {
  const n = String(index + 1).padStart(2, '0');
  const id = s.key;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
<linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15122e"/><stop offset="1" stop-color="#090913"/></linearGradient>
<radialGradient id="glow-${id}" cx="0.5" cy="0.42" r="0.6"><stop offset="0" stop-color="${s.accent}" stop-opacity="0.38"/><stop offset="0.6" stop-color="${s.accent2}" stop-opacity="0.10"/><stop offset="1" stop-color="${s.accent2}" stop-opacity="0"/></radialGradient>
<linearGradient id="line-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${s.accent}"/><stop offset="1" stop-color="${s.accent2}"/></linearGradient>
<pattern id="grid-${id}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.045"/></pattern>
<filter id="blur-${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg-${id})"/>
<rect width="${W}" height="${H}" fill="url(#grid-${id})"/>
<rect width="${W}" height="${H}" fill="url(#glow-${id})"/>
<rect x="18" y="18" width="${W - 36}" height="${H - 36}" rx="26" fill="none" stroke="url(#line-${id})" stroke-opacity="0.55" stroke-width="1.5"/>
<text x="46" y="82" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="22" fill="${s.accent}" fill-opacity="0.9" letter-spacing="3">${n} / 08</text>
<circle cx="${W - 56}" cy="72" r="6" fill="${s.accent}"/>
<g transform="translate(${(W - 330) / 2} 210) scale(2.75)" color="${s.accent}">
<g filter="url(#blur-${id})" opacity="0.85">${s.glyph}</g>
<g>${s.glyph}</g>
</g>
<rect x="46" y="${H - 108}" width="120" height="4" rx="2" fill="url(#line-${id})"/>
<text x="46" y="${H - 58}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="20" fill="#ffffff" fill-opacity="0.55" letter-spacing="4">SK SOLUTIONS</text>
</svg>`;
}

export const SERVICE_ITEMS = SERVICES.map((s, i) => ({
  src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(cardSvg(s, i))}`,
  alt: `${s.title}: ${s.text}`,
  title: s.title,
  subtitle: s.subtitle,
}));
