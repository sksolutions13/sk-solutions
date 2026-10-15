/** Generated artwork for the team ProfileCards (no image files needed). */

const uri = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

/**
 * Transparent portrait placeholder (a bust silhouette). The card's holo foil shows around it,
 * so it stays see-through everywhere except the figure. Replace it per person with a real cut-out
 * photo by setting `photo` in the TEAM list.
 */
export function silhouetteArt(top: string, bottom: string): string {
  return uri(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' preserveAspectRatio='xMidYMax slice'>
      <defs>
        <linearGradient id='b' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stop-color='${top}'/>
          <stop offset='1' stop-color='${bottom}'/>
        </linearGradient>
      </defs>
      <path d='M40 500 C40 400 110 352 200 352 C290 352 360 400 360 500 Z' fill='url(#b)'/>
      <rect x='172' y='300' width='56' height='64' rx='24' fill='url(#b)'/>
      <ellipse cx='200' cy='238' rx='72' ry='84' fill='url(#b)'/>
    </svg>`,
  );
}

/** Tileable alpha pattern the holo foil is revealed through (diamonds + dots). */
export const PATTERN_ART = uri(
  `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'>
    <g fill='none' stroke='#000' stroke-width='3'>
      <path d='M48 8 L88 48 L48 88 L8 48 Z'/>
      <path d='M48 26 L70 48 L48 70 L26 48 Z'/>
    </g>
    <circle cx='48' cy='48' r='5' fill='#000'/>
    <circle cx='0' cy='0' r='6' fill='#000'/><circle cx='96' cy='0' r='6' fill='#000'/>
    <circle cx='0' cy='96' r='6' fill='#000'/><circle cx='96' cy='96' r='6' fill='#000'/>
  </svg>`,
);
