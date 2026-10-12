// ============================================================
//  ALL SITE CONTENT LIVES HERE. Edit text, links and lists freely.
// ============================================================

export const company = {
  name: 'SK Solutions',
  tagline: 'We build, train, and ship intelligent digital products.',
  year: 2026,
  phone: '+91 9034842518 / +91 9958846946',
  phones: [
    { label: 'Niket', number: '+91 9034842518', href: 'tel:+919034842518' },
    { label: 'Aaditya', number: '+91 9958846946', href: 'tel:+919958846946' },
  ],
  phoneHref: 'tel:+919034842518',

  // Contact form submission targets
  formspreeId: '',
  mailtoTo: 'khuranan592@gmail.com,aadityasharma8707@gmail.com',
};
export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  story:
    'SK Solutions is a technology company that builds websites and mobile/web apps, trains custom AI/ML models, and delivers complete projects and training modules. We work directly with our clients from the first conversation to launch and beyond.',
  mission:
    'Our mission is to turn ideas into working, reliable software, and to make AI practical for businesses and learners.',
  values: [
    { title: 'Clarity', text: 'Plain-language plans, honest timelines, and regular updates.' },
    { title: 'Quality', text: 'Clean, tested code that is easy to maintain.' },
    { title: 'Ownership', text: 'We treat every project as if it were our own product.' },
    { title: 'Learning', text: 'We keep up with new tools and share what we learn through training.' },
  ],
};

export const team = [
  {
    name: 'Niket Khurana',
    role: 'Founder',
    skills: 'Data Science, Machine Learning, AI Engineering, Full-Stack Development',
    email: 'khuranan592@gmail.com',
    links: [
      { type: 'linkedin', label: 'Niket Khurana on LinkedIn', url: 'https://linkedin.com/in/niketkhurana' },
      { type: 'github', label: 'Niket Khurana on GitHub (nikhurana13)', url: 'https://github.com/nikhurana13' },
      { type: 'github', label: 'Niket Khurana on GitHub (NiranjanHr59)', url: 'https://github.com/NiranjanHr59' },
    ],
  },
  {
    name: 'Aaditya Sharma',
    role: 'Co-Founder',
    skills: 'Backend Systems, Cloud Infrastructure, UI/UX Engineering',
    email: 'aadityasharma8707@gmail.com',
    links: [
      { type: 'linkedin', label: 'Aaditya Sharma on LinkedIn', url: 'https://linkedin.com/in/aaditya-sharma-0192302b7' },
      { type: 'github', label: 'Aaditya Sharma on GitHub', url: 'https://github.com/aadityasharma8707' },
    ],
  },
];

// `icon` must match a key in components/Services.jsx
export const services = [
  { icon: 'globe', title: 'Website Development', text: 'Fast, responsive websites built to represent your business.' },
  { icon: 'phone', title: 'Mobile & Web Apps', text: 'Cross-platform apps from prototype to production.' },
  { icon: 'brain', title: 'AI/ML Model Development & Training', text: 'Custom models trained on your data and shaped to your problem.' },
  { icon: 'chart', title: 'Data Analytics & Dashboards', text: 'Clean data and clear dashboards that support decisions.' },
  { icon: 'server', title: 'APIs & Backend Systems', text: 'Secure, documented APIs and services that scale.' },
  { icon: 'cap', title: 'Custom Training Modules & Workshops', text: 'Hands-on learning material for teams and students.' },
  { icon: 'rocket', title: 'Deployment & Maintenance', text: 'Hosting, monitoring, updates and ongoing support.' },
];

// Tech tiles (no skill percentages, so nothing here claims a level)
export const skills = [
  { name: 'Python', group: 'Language' }, { name: 'SQL', group: 'Language' },
  { name: 'Pandas', group: 'Data' }, { name: 'NumPy', group: 'Data' },
  { name: 'Scikit-learn', group: 'ML' }, { name: 'TensorFlow / PyTorch', group: 'Deep learning' },
  { name: 'FastAPI', group: 'Backend' }, { name: 'React', group: 'Frontend' },
  { name: 'MongoDB', group: 'Database' }, { name: 'Docker', group: 'DevOps' },
  { name: 'Git', group: 'Tooling' }, { name: 'Power BI', group: 'Analytics' },
];

export const projectFilters = ['All', 'Web', 'App', 'AI-ML', 'Training'];

// PLACEHOLDERS: replace title/text/tags with your real projects.
// Add `image: '/projects/your-image.png'` (file in /public/projects) to replace the placeholder block.
export const projects = [
  {
    title: 'Emotion Detection AI System', category: 'AI-ML', tags: ['Python', 'Deep Learning'],
    text: 'Placeholder description: an AI system that recognises emotions from input data. Replace with your real summary.', link: ''
  },
  {
    title: 'Multimodal Deepfake Detection System', category: 'AI-ML', tags: ['Python', 'PyTorch'],
    text: 'Placeholder description: a detector that combines multiple signals to flag manipulated media. Replace with your real summary.', link: ''
  },
  {
    title: 'Food-Tech Platform', category: 'Web', tags: ['React', 'FastAPI', 'MongoDB'],
    text: 'Placeholder description: a web platform for the food-tech space. Replace with your real summary.', link: ''
  },
  {
    title: 'Mobile App (placeholder)', category: 'App', tags: ['Mobile', 'API'],
    text: 'Placeholder card. Add one of your real mobile or cross-platform apps here.', link: ''
  },
  {
    title: 'Data Dashboard (placeholder)', category: 'Web', tags: ['Power BI', 'SQL'],
    text: 'Placeholder card. Add a real analytics or dashboard project here.', link: ''
  },
  {
    title: 'AI/ML Training Module (placeholder)', category: 'Training', tags: ['Workshop', 'Python'],
    text: 'Placeholder card. Add a real training module or workshop here.', link: ''
  },
];

export const process = [
  { title: 'Discuss', text: 'We learn your goals, users and constraints.' },
  { title: 'Design', text: 'Wireframes, architecture and a clear scope.' },
  { title: 'Develop', text: 'Iterative builds with regular demos.' },
  { title: 'Test', text: 'Functional, device and performance testing.' },
  { title: 'Deliver', text: 'Launch, handover and documentation.' },
  { title: 'Support', text: 'Fixes, updates and improvements after launch.' },
];

// Counters are facts about this site's own content. Replace with real numbers (e.g. projects delivered) when you have them.
export const stats = [
  { value: 7, label: 'Services offered' },
  { value: 12, label: 'Technologies we work with' },
  { value: 6, label: 'Step delivery process' },
  { value: 2, label: 'Founders on every project' },
];

export const serviceOptions = services.map((s) => s.title).concat('Other');
