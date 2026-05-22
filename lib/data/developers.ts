// ============================================================
// Developers Data (Website Contributors)
// ============================================================

import type { Developer } from '@/lib/types';

export const DEVELOPERS: Developer[] = [
  {
    id: 'dev-1',
    name: 'Anurag Sharma',
    role: 'Lead Developer & Architect',
    image: '/images/team/placeholder-1.png',
    socials: {
      linkedin: 'https://linkedin.com/in/anurag-sharma',
      github: 'https://github.com/anurag3407',
      email: 'anurag.sharma@nitp.ac.in',
    },
    contributions: [
      'Project Architecture',
      'Landing Page',
      'CI/CD Pipeline',
      'Performance Optimization',
    ],
    techStack: ['Next.js', 'TypeScript', 'GSAP', 'Three.js', 'Tailwind CSS'],
  },
  {
    id: 'dev-2',
    name: 'Priya Sharma',
    role: 'Frontend Developer',
    image: '/images/team/placeholder-2.png',
    socials: {
      linkedin: 'https://linkedin.com/in/priya-sharma',
      github: 'https://github.com/priyasharma',
      email: 'priya.sharma@nitp.ac.in',
    },
    contributions: [
      'Team Page',
      'Gallery Component',
      'Responsive Design',
      'Accessibility',
    ],
    techStack: ['React', 'CSS', 'Framer Motion', 'Figma'],
  },
  {
    id: 'dev-3',
    name: 'Vikram Singh',
    role: 'Full Stack Developer',
    image: '/images/team/placeholder-3.png',
    socials: {
      linkedin: 'https://linkedin.com/in/vikram-singh',
      github: 'https://github.com/vikramsingh',
      email: 'vikram.singh@nitp.ac.in',
    },
    contributions: [
      'Blog System',
      'Contact Form API',
      'Events Page',
      'SEO Optimization',
    ],
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
  },
  {
    id: 'dev-4',
    name: 'Sanya Kapoor',
    role: 'UI/UX Designer & Developer',
    image: '/images/team/placeholder-19.png',
    socials: {
      linkedin: 'https://linkedin.com/in/sanya-kapoor',
      github: 'https://github.com/sanyakapoor',
      email: 'sanya.kapoor@nitp.ac.in',
    },
    contributions: [
      'Design System',
      'UI Components',
      'Dark Theme',
      'Illustrations',
    ],
    techStack: ['Figma', 'CSS', 'GSAP', 'Adobe Suite'],
  },
];
