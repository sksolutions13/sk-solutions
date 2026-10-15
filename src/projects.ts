// Project data and card artwork for the Projects carousel (FlexCarousel).

import zeFoodImg from './assets/projects/zefood.webp';
import omnifaceImg from './assets/projects/omniface.webp';
import emotionsImg from './assets/projects/emotion-intelligence.webp';
import nidsImg from './assets/projects/nids-x.webp';
import voxImg from './assets/projects/voxbridge.webp';
import gestureImg from './assets/projects/gesture-ai.webp';
import dashImg from './assets/projects/customer-dashboard.webp';

export interface Project {
  key: string;
  title: string;
  category: string;
  text: string;
  tags: string[];
  accent: string;
  accent2: string;
  glyph: string;
  w: number;
  h: number;
  image: string;
}

const S = 'fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';

const GLYPHS: Record<string, string> = {
  hotel: `<g ${S}><rect x="28" y="12" width="64" height="96" rx="6"/><path d="M52 108V92H68V108"/><path d="M40 12V6H80V12"/></g><g fill="currentColor"><rect x="40" y="26" width="14" height="12" rx="2"/><rect x="66" y="26" width="14" height="12" rx="2"/><rect x="40" y="46" width="14" height="12" rx="2"/><rect x="66" y="46" width="14" height="12" rx="2"/><rect x="40" y="66" width="14" height="12" rx="2"/><rect x="66" y="66" width="14" height="12" rx="2"/></g>`,
  face: `<g ${S}><path d="M14 38V22Q14 14 22 14H38M82 14H98Q106 14 106 22V38M106 82V98Q106 106 98 106H82M38 106H22Q14 106 14 98V82"/><ellipse cx="60" cy="60" rx="22" ry="28"/><path d="M50 74Q60 82 70 74"/></g><g fill="currentColor"><circle cx="51" cy="52" r="3"/><circle cx="69" cy="52" r="3"/><circle cx="60" cy="62" r="2"/></g>`,
  emotion: `<g ${S}><circle cx="52" cy="60" r="34"/><path d="M36 70Q52 86 68 70"/><path d="M96 44Q106 60 96 76M104 32Q122 60 104 88"/></g><g fill="currentColor"><circle cx="40" cy="52" r="4"/><circle cx="64" cy="52" r="4"/></g>`,
  nids: `<g ${S}><path d="M60 10L100 24V58C100 84 82 100 60 110C38 100 20 84 20 58V24Z"/><path d="M60 46L42 72M60 46L78 72M42 72H78"/></g><g fill="currentColor"><circle cx="60" cy="46" r="7"/><circle cx="42" cy="72" r="6"/><circle cx="78" cy="72" r="6"/></g>`,
  vox: `<g ${S}><path d="M10 90H110"/><path d="M14 80Q60 18 106 80"/><path d="M32 64V90M60 48V90M88 64V90"/></g><g fill="currentColor"><rect x="44" y="14" width="4" height="14" rx="2"/><rect x="54" y="8" width="4" height="26" rx="2"/><rect x="64" y="12" width="4" height="18" rx="2"/><rect x="74" y="16" width="4" height="10" rx="2"/></g>`,
  gesture: `<g ${S}><path d="M36 64V38M48 58V24M60 56V18M72 58V26M86 70L98 50"/><path d="M34 64Q34 98 60 102Q86 98 86 70"/></g><g fill="currentColor"><circle cx="36" cy="36" r="4"/><circle cx="48" cy="22" r="4"/><circle cx="60" cy="16" r="4"/><circle cx="72" cy="24" r="4"/><circle cx="98" cy="48" r="4"/></g>`,
  dash: `<g ${S}><rect x="8" y="12" width="104" height="96" rx="8"/><path d="M8 30H112"/><rect x="18" y="40" width="26" height="16" rx="3"/><rect x="50" y="40" width="26" height="16" rx="3"/><rect x="82" y="40" width="20" height="16" rx="3"/><path d="M20 98V80M34 98V70M48 98V84M62 98V64"/><path d="M74 90L84 76L94 82L104 66"/></g>`,
};

export const PROJECTS: Project[] = [
  {
    key: 'hotel',
    title: 'ZEfood',
    category: 'Food & Hospitality Platform',
    text: 'An AI-powered dining and hotel room service platform delivering hot meals from top restaurants and 24/7 hotel pantry service directly to rooms or doorsteps.',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Real-time'],
    accent: '#FF8A2A',
    accent2: '#FFD36E',
    glyph: GLYPHS.hotel,
    w: 900,
    h: 680,
    image: zeFoodImg,
  },
  {
    key: 'omniface',
    title: 'OmniFace',
    category: 'Computer Vision & Forensics',
    text: 'Automated multimodal deepfake forensics and media verification engine with research-grade synthetic manipulation detection and physiological rPPG pulse analysis in real time.',
    tags: ['Deepfake Forensics', 'Computer Vision', 'rPPG Analysis', 'Python', 'Real-time'],
    accent: '#5CE1FF',
    accent2: '#3B82F6',
    glyph: GLYPHS.face,
    w: 640,
    h: 800,
    image: omnifaceImg,
  },
  {
    key: 'eis',
    title: 'Emotion Intelligence System',
    category: 'Multimodal AI',
    text: 'Multimodal AI for real-time emotion detection from face + voice, using ViT-B/16 for facial signals and CNN + BiLSTM for vocal signals, fused via cross-modal attention with memory-augmented intelligent response generation.',
    tags: ['ViT-B/16', 'CNN + BiLSTM', 'Cross-modal Attention', 'Redis', 'FAISS'],
    accent: '#F25BD0',
    accent2: '#7C3AED',
    glyph: GLYPHS.emotion,
    w: 760,
    h: 760,
    image: emotionsImg,
  },
  {
    key: 'nids',
    title: 'NIDS-X',
    category: 'Cybersecurity',
    text: 'A next-generation network intrusion detection system securing digital infrastructure by using machine learning models to spot suspicious traffic and flag active threats.',
    tags: ['Network Security', 'Machine Learning', 'Threat Intel', 'Python'],
    accent: '#5CFFC8',
    accent2: '#06B6D4',
    glyph: GLYPHS.nids,
    w: 640,
    h: 800,
    image: nidsImg,
  },
  {
    key: 'vox',
    title: 'VoxBridge AI',
    category: 'Speech AI',
    text: 'A full-stack real-time voice communication platform with AI-powered responses, live multilingual translation, WebSocket streaming, and persistent memory.',
    tags: ['Speech AI', 'NLP', 'WebSocket', 'MongoDB', 'Firebase'],
    accent: '#9478FF',
    accent2: '#F25BD0',
    glyph: GLYPHS.vox,
    w: 900,
    h: 680,
    image: voxImg,
  },
  {
    key: 'gesture',
    title: 'Gesture.AI',
    category: 'Computer Vision',
    text: 'Real-time hand-gesture recognition matrix with CNN 10-class neural probability mapping for touchless software and hardware control.',
    tags: ['Computer Vision', 'CNN 10-Class', 'OpenCV', 'Real-time', 'Python'],
    accent: '#FF8A2A',
    accent2: '#5CFFC8',
    glyph: GLYPHS.gesture,
    w: 700,
    h: 800,
    image: gestureImg,
  },
  {
    key: 'dashboard',
    title: 'Customer Intelligence Dashboard',
    category: 'Data & BI',
    text: 'An interactive RFM customer intelligence and analytics dashboard providing in-depth customer segmentation, recency-frequency-monetary analysis and revenue performance metrics.',
    tags: ['Analytics', 'RFM Segmentation', 'BI Dashboard', 'SQL', 'Visualization'],
    accent: '#FFD36E',
    accent2: '#5CFFC8',
    glyph: GLYPHS.dash,
    w: 960,
    h: 680,
    image: dashImg,
  },
];

const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function cardSvg(p: Project, index: number): string {
  const { w: W, h: H, key: id } = p;
  const n = String(index + 1).padStart(2, '0');
  const total = String(PROJECTS.length).padStart(2, '0');
  const size = Math.min(W, H);
  const scale = (size * 0.46) / 120;
  const gx = (W - 120 * scale) / 2;
  const gy = H * 0.5 - 60 * scale;
  const fs = Math.round(size * 0.034);
  const pad = Math.round(size * 0.07);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
<linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15122e"/><stop offset="1" stop-color="#080812"/></linearGradient>
<radialGradient id="glow-${id}" cx="0.5" cy="0.48" r="0.62"><stop offset="0" stop-color="${p.accent}" stop-opacity="0.42"/><stop offset="0.6" stop-color="${p.accent2}" stop-opacity="0.12"/><stop offset="1" stop-color="${p.accent2}" stop-opacity="0"/></radialGradient>
<linearGradient id="line-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.accent}"/><stop offset="1" stop-color="${p.accent2}"/></linearGradient>
<pattern id="grid-${id}" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0V44" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern>
<filter id="blur-${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg-${id})"/>
<rect width="${W}" height="${H}" fill="url(#grid-${id})"/>
<rect width="${W}" height="${H}" fill="url(#glow-${id})"/>
<rect x="14" y="14" width="${W - 28}" height="${H - 28}" rx="22" fill="none" stroke="url(#line-${id})" stroke-opacity="0.5" stroke-width="1.5"/>
<text x="${pad}" y="${pad + fs}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="${fs}" fill="${p.accent}" fill-opacity="0.95" letter-spacing="3">${n} / ${total}</text>
<circle cx="${W - pad}" cy="${pad + fs * 0.6}" r="${fs * 0.3}" fill="${p.accent}"/>
<g transform="translate(${gx} ${gy}) scale(${scale})" color="${p.accent}">
<g filter="url(#blur-${id})" opacity="0.85">${p.glyph}</g>
<g>${p.glyph}</g>
</g>
<rect x="${pad}" y="${H - pad - fs * 2.6}" width="${size * 0.16}" height="4" rx="2" fill="url(#line-${id})"/>
<text x="${pad}" y="${H - pad}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="${fs}" fill="#ffffff" fill-opacity="0.6" letter-spacing="4">${esc(p.category.toUpperCase())}</text>
</svg>`;
}

export const PROJECT_ITEMS = PROJECTS.map((p, i) => ({
  src: p.image || `data:image/svg+xml;charset=utf-8,${encodeURIComponent(cardSvg(p, i))}`,
  alt: `${p.title}: ${p.text}`,
  title: p.title,
  subtitle: p.category,
}));
