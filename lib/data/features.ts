// ============================================================
// Bento Grid Features
// ============================================================

import type { Feature } from '@/lib/types';

export const FEATURES: Feature[] = [
  {
    id: 'hackathons',
    title: 'Hackathons',
    description:
      'Weekend-long coding marathons where teams build projects from scratch. Cash prizes, mentorship, and real-world problem statements.',
    icon: '⚡',
    size: 'large',
    color: '#D4643B',
    stat: '10+',
    statLabel: 'Hackathons/year',
  },
  {
    id: 'workshops',
    title: 'Workshops',
    description:
      'Hands-on technical workshops on cutting-edge topics — from React to Rust, from ML pipelines to smart contracts.',
    icon: '🛠',
    size: 'medium',
    color: '#D9A84E',
    stat: '25+',
    statLabel: 'Workshops conducted',
  },
  {
    id: 'project-mentoring',
    title: 'Project Mentoring',
    description:
      'Senior members guide juniors through real-world projects. Get code reviews, architecture advice, and deploy to production.',
    icon: '🚀',
    size: 'medium',
    color: '#7A9A6B',
    stat: '50+',
    statLabel: 'Projects mentored',
  },
  {
    id: 'tech-talks',
    title: 'Tech Talks',
    description:
      'Industry professionals and alumni share insights on trends, career paths, and emerging technologies.',
    icon: '🎤',
    size: 'small',
    color: '#8A8A8A',
  },
  {
    id: 'open-source',
    title: 'Open Source',
    description:
      'Contributing to open-source projects and building tools used by the community. Learn git workflows and collaborative development.',
    icon: '🌐',
    size: 'small',
    color: '#D4643B',
  },
  {
    id: 'peer-learning',
    title: 'Peer Learning',
    description:
      'Study groups, coding sessions, and DSA practice circles. Learn together, grow together.',
    icon: '🤝',
    size: 'small',
    color: '#D9A84E',
  },
  {
    id: 'industry-connect',
    title: 'Industry Connect',
    description:
      'Networking opportunities with tech companies, startup founders, and NIT Patna alumni in the industry.',
    icon: '🔗',
    size: 'large',
    color: '#7A9A6B',
    stat: '15+',
    statLabel: 'Industry partners',
  },
];
