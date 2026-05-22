// ============================================================
// Gallery Data
// ============================================================

import type { GalleryImage } from '@/lib/types';

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: '/images/events/hackathon.png',
    alt: 'HackFest 2025 — Teams brainstorming',
    event: 'HackFest 2025',
    date: '2025-03-15',
    category: 'Hackathon',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-2',
    src: '/images/hero/about-illustration.png',
    alt: 'Coding session at WnCC lab',
    event: 'Weekly Sessions',
    date: '2025-02-20',
    category: 'Workshop',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-3',
    src: '/images/events/hackathon.png',
    alt: 'AI Summit keynote presentation',
    event: 'AI Summit 2025',
    date: '2025-04-05',
    category: 'Summit',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-4',
    src: '/images/hero/about-illustration.png',
    alt: 'Web3 workshop hands-on session',
    event: 'Web3 Workshop',
    date: '2025-02-10',
    category: 'Workshop',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-5',
    src: '/images/events/hackathon.png',
    alt: 'React Bootcamp final presentations',
    event: 'React Bootcamp',
    date: '2025-01-25',
    category: 'Bootcamp',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-6',
    src: '/images/hero/about-illustration.png',
    alt: 'Team photo at Open Source Day',
    event: 'Open Source Day',
    date: '2025-05-01',
    category: 'Community',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-7',
    src: '/images/events/hackathon.png',
    alt: 'Kaggle Night competition',
    event: 'Kaggle Night',
    date: '2025-04-20',
    category: 'Competition',
    width: 1200,
    height: 800,
  },
  {
    id: 'gallery-8',
    src: '/images/hero/about-illustration.png',
    alt: 'WnCC annual meetup group photo',
    event: 'Annual Meetup',
    date: '2025-01-05',
    category: 'Community',
    width: 1200,
    height: 800,
  },
];

export const GALLERY_CATEGORIES = [
  'All',
  'Hackathon',
  'Workshop',
  'Summit',
  'Bootcamp',
  'Competition',
  'Community',
] as const;
