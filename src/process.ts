// Process steps + generated card artwork for the DepthCarousel.
// The artwork is rebuilt from the active theme's colours, so the stack matches whichever theme is selected.

export interface Step {
  n: string;
  title: string;
  text: string;
  chips: string[];
  /** Inner SVG for a 24x24 stroke icon (lucide style) */
  glyph: string;
}

export const STEPS: Step[] = [
  {
    n: '01',
    title: 'Discover',
    text: 'We learn your goal, users and constraints before writing a line of code.',
    chips: ['Goals', 'Users', 'Scope'],
    glyph: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  },
  {
    n: '02',
    title: 'Design',
    text: 'Wireframes and architecture agreed with you, so the build has no surprises.',
    chips: ['Wireframes', 'Architecture', 'Sign-off'],
    glyph: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  },
  {
    n: '03',
    title: 'Build',
    text: 'Iterative development with regular demos and clean, maintainable code.',
    chips: ['Sprints', 'Demos', 'Clean code'],
    glyph: '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
  },
  {
    n: '04',
    title: 'Ship',
    text: 'Deployment, handover and support so the product keeps working after launch.',
    chips: ['Deploy', 'Handover', 'Support'],
    glyph:
      '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  },
];

const W = 680;
const H = 840;
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text: string, max: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max) {
      lines.push(line);
      line = word;
    } else {
      line = (line + ' ' + word).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

function cardSvg(step: Step, i: number, accent: string, accent2: string): string {
  const pad = 56;
  const badge = 104;
  const lines = wrap(step.text, 33);
  let cx = pad;
  const chips = step.chips
    .map((c) => {
      const w = c.length * 13 + 44;
      const out = `<rect x="${cx}" y="${H - 160}" width="${w}" height="48" rx="24" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.2"/><text x="${cx + w / 2}" y="${H - 129}" text-anchor="middle" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="22" fill="#d4d9e6">${esc(c)}</text>`;
      cx += w + 14;
      return out;
    })
    .join('');
  const prog = ((i + 1) / STEPS.length) * (W - pad * 2);
  const text = lines
    .map(
      (l, k) =>
        `<text x="${pad}" y="${548 + k * 40}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="29" fill="#aab3c8">${esc(l)}</text>`,
    )
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15122e"/><stop offset="1" stop-color="#080811"/></linearGradient>
<radialGradient id="glow" cx="0.85" cy="0.1" r="0.75"><stop offset="0" stop-color="${accent}" stop-opacity="0.42"/><stop offset="0.55" stop-color="${accent2}" stop-opacity="0.12"/><stop offset="1" stop-color="${accent2}" stop-opacity="0"/></radialGradient>
<linearGradient id="ln" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${accent}"/><stop offset="1" stop-color="${accent2}"/></linearGradient>
<pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0V44" fill="none" stroke="#ffffff" stroke-opacity="0.045"/></pattern>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect width="${W}" height="${H}" fill="url(#grid)"/>
<rect width="${W}" height="${H}" fill="url(#glow)"/>
<rect x="2" y="2" width="${W - 4}" height="${H - 4}" rx="30" fill="none" stroke="url(#ln)" stroke-opacity="0.55" stroke-width="2"/>
<text x="${pad}" y="104" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="22" letter-spacing="6" fill="${accent}">STEP ${step.n} / 0${STEPS.length}</text>
<text x="${pad - 6}" y="330" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="230" font-weight="800" fill="none" stroke="url(#ln)" stroke-width="2.5" stroke-opacity="0.6">${step.n}</text>
<rect x="${W - pad - badge}" y="${pad}" width="${badge}" height="${badge}" rx="30" fill="url(#ln)"/>
<g transform="translate(${W - pad - badge + (badge - 62) / 2} ${pad + (badge - 62) / 2}) scale(2.6)" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${step.glyph}</g>
<text x="${pad}" y="452" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="72" font-weight="700" fill="#ffffff">${esc(step.title)}</text>
<rect x="${pad}" y="478" width="84" height="5" rx="2.5" fill="url(#ln)"/>
${text}
${chips}
<rect x="${pad}" y="${H - 80}" width="${W - pad * 2}" height="6" rx="3" fill="#ffffff" fill-opacity="0.1"/>
<rect x="${pad}" y="${H - 80}" width="${prog}" height="6" rx="3" fill="url(#ln)"/>
</svg>`;
}

export function buildProcessItems(accent: string, accent2: string) {
  return STEPS.map((s, i) => ({
    image: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(cardSvg(s, i, accent, accent2))}`,
    alt: `Step ${s.n}: ${s.title}. ${s.text}`,
  }));
}
