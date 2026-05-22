// ============================================================
// WnCC NIT Patna — Site-Wide Constants
// ============================================================

import type { LeaderProfile } from '@/lib/types';

export const SITE_CONFIG = {
  name: 'Web & Coding Club',
  shortName: 'WnCC',
  institution: 'NIT Patna',
  fullName: 'Web and Coding Club, NIT Patna',
  tagline: 'Where Ideas Become Reality',
  description:
    'A thriving community of builders, coders, and developers at NIT Patna. We turn ideas into impactful projects through collaboration, innovation, and relentless learning.',
  url: 'https://wncc-nitpatna.org',
  email: 'wncc@nitp.ac.in',
  address: 'NIT Patna, Ashok Rajpath, Patna, Bihar - 800005',
} as const;

export const PI_PROFILE: LeaderProfile = {
  name: 'Dr. Rajesh Kumar',
  title: 'Professor-in-Charge',
  department: 'Department of Computer Science & Engineering',
  image: '/images/team/pi-placeholder.png',
  quote:
    'Technology is the bridge between imagination and reality. WnCC empowers students to cross that bridge every day.',
  designation: 'PI, Web & Coding Club',
};

export const PRESIDENT_PROFILE: LeaderProfile = {
  name: 'Anurag Sharma',
  title: 'President',
  department: 'B.Tech CSE, 3rd Year',
  image: '/images/team/president-placeholder.png',
  quote:
    'Building together is not just about code — it\'s about community, growth, and pushing boundaries as one.',
  designation: 'President, WnCC NIT Patna',
};

export const STATS = [
  { value: 500, suffix: '+', label: 'Active Members' },
  { value: 50, suffix: '+', label: 'Projects Built' },
  { value: 30, suffix: '+', label: 'Events Hosted' },
  { value: 7, suffix: '', label: 'Specialized Teams' },
] as const;

/** Retro-industrial color palette */
export const COLORS = {
  coral: '#D4643B',
  amber: '#D9A84E',
  sage: '#7A9A6B',
  gray: '#8A8A8A',
  cream: '#F5F0E8',
  black: '#0a0a0a',
  darkGray: '#141414',
  midGray: '#1e1e1e',
} as const;

export const CONTACT_API_ENDPOINT = 'https://api.example.com/contact';
