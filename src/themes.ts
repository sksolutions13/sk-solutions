import type { Preset, Theme as OrbMode } from './components/CrystalizedBall';

export interface SiteTheme {
  id: string;
  name: string;
  /** Orb preset used in the hero for this theme */
  orb: Preset;
  /** Orb render mode (emitted light on dark, ink on light) */
  mode: OrbMode;
  /** Page background (mirrors --bg in index.css) so JS-driven parts can match it */
  bg: string;
  /** Swatch shown in the picker */
  swatch: [string, string];
  tagline: string;
  /** Dynamic favicon for browser tab */
  favicon: string;
  /** Full brand logo */
  logo: string;
  /** Dynamic 1:1 app icon */
  icon: string;
}

export const THEMES: SiteTheme[] = [
  {
    id: 'plasma',
    name: 'Plasma',
    orb: 'plasma',
    mode: 'dark',
    bg: '#07070f',
    swatch: ['#F25BD0', '#7c3aed'],
    tagline: 'Electric magenta',
    favicon: '/favicons/favicon-plasma.png',
    logo: '/logos/logo-plasma.png',
    icon: '/logos/icon-plasma.png',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    orb: 'aurora',
    mode: 'dark',
    bg: '#05100e',
    swatch: ['#5CFFC8', '#0891b2'],
    tagline: 'Ionized emerald',
    favicon: '/favicons/favicon-aurora.png',
    logo: '/logos/logo-aurora.png',
    icon: '/logos/icon-aurora.png',
  },
  {
    id: 'nebula',
    name: 'Nebula',
    orb: 'nebula',
    mode: 'dark',
    bg: '#08061a',
    swatch: ['#9478FF', '#db2777'],
    tagline: 'Deep cosmic violet',
    favicon: '/favicons/favicon-nebula.png',
    logo: '/logos/logo-nebula.png',
    icon: '/logos/icon-nebula.png',
  },
  {
    id: 'ember',
    name: 'Ember',
    orb: 'ember',
    mode: 'dark',
    bg: '#0d0805',
    swatch: ['#FF8A2A', '#dc2626'],
    tagline: 'Warm incandescent',
    favicon: '/favicons/favicon-ember.png',
    logo: '/logos/logo-ember.png',
    icon: '/logos/icon-ember.png',
  },
  {
    id: 'fusion',
    name: 'Fusion',
    orb: 'fusion',
    mode: 'dark',
    bg: '#050a14',
    swatch: ['#0099FF', '#FF6A00'],
    tagline: 'Cobalt and molten orange',
    favicon: '/favicons/favicon-fusion.png',
    logo: '/logos/logo-fusion.png',
    icon: '/logos/icon-fusion.png',
  },
  {
    id: 'daylight',
    name: 'Daylight',
    orb: 'plasma',
    mode: 'light',
    bg: '#f7f5fb',
    swatch: ['#a21caf', '#f7f5fb'],
    tagline: 'Clean light mode',
    favicon: '/favicons/favicon-daylight.png',
    logo: '/logos/logo-daylight.png',
    icon: '/logos/icon-daylight.png',
  },
];

export const DEFAULT_THEME = THEMES[0].id;
export const THEME_KEY = 'sk-theme';
