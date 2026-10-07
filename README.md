# S&K_solutions Portfolio

React (Vite) + Tailwind CSS + Framer Motion single-page site. **All text lives in `src/data.js`.**

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the build locally
```

## Things to edit before launch
1. `src/data.js` -> Aaditya's skills (marked TODO), real projects, phone label, stats.
2. Contact form: create a form at https://formspree.io and paste its ID into `formspreeId` in `data.js`. Until then the form opens the visitor's email app (mailto).
3. Project images: put files in `public/projects/` and set `image: '/projects/name.png'` on a project.
4. SEO: set your real URL in `index.html` and add `public/og-image.png` (1200x630).

## Deploy
**Vercel:** push to GitHub -> vercel.com -> Import Project (preset: Vite, build `npm run build`, output `dist`).
**Netlify:** push to GitHub -> Add new site -> Import (build `npm run build`, publish `dist`).
Or drag the `dist` folder into Netlify Drop after `npm run build`.
