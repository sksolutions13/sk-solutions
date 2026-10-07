/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Sora', 'system-ui', 'sans-serif'] },
      colors: { brand: { blue: '#3b82f6', violet: '#8b5cf6' } },
    },
  },
  plugins: [],
};
