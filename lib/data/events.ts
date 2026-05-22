// ============================================================
// Events Data
// ============================================================

import type { ClubEvent } from '@/lib/types';

export const EVENTS: ClubEvent[] = [
  {
    id: 'hackfest-2025',
    title: 'HackFest 2025',
    date: '2025-03-15',
    endDate: '2025-03-17',
    description:
      '48-hour hackathon with 200+ participants. Build solutions for real-world problems across healthcare, education, and sustainability.',
    longDescription:
      'HackFest 2025 was our flagship hackathon bringing together 200+ participants from colleges across Bihar and beyond. Over 48 intense hours, teams ideated, built, and pitched solutions to real-world problems. With mentors from top tech companies and cash prizes worth ₹1,00,000, this event set a new benchmark for student hackathons at NIT Patna.',
    image: '/images/events/hackathon.png',
    tags: ['Hackathon', 'Competition', 'Prizes'],
    location: 'NIT Patna Auditorium',
    status: 'completed',
  },
  {
    id: 'web3-workshop',
    title: 'Web3 & Blockchain Workshop',
    date: '2025-02-10',
    description:
      'Deep dive into Ethereum, Solidity, and building decentralized applications. Hands-on smart contract deployment.',
    image: '/images/events/hackathon.png',
    tags: ['Workshop', 'Blockchain', 'Web3'],
    location: 'CS Department Lab',
    status: 'completed',
  },
  {
    id: 'ai-summit',
    title: 'AI Summit 2025',
    date: '2025-04-05',
    description:
      'A full-day summit on Generative AI — covering LLMs, RAG pipelines, fine-tuning, and deploying AI applications at scale.',
    image: '/images/events/hackathon.png',
    tags: ['Summit', 'AI', 'Gen AI'],
    location: 'NIT Patna Convention Hall',
    status: 'completed',
  },
  {
    id: 'react-bootcamp',
    title: 'React Bootcamp',
    date: '2025-01-20',
    endDate: '2025-01-25',
    description:
      '5-day intensive bootcamp on React, Next.js, and modern frontend development. Build and deploy a complete project.',
    image: '/images/events/hackathon.png',
    tags: ['Bootcamp', 'React', 'Web Dev'],
    location: 'Online + In-person',
    status: 'completed',
  },
  {
    id: 'open-source-day',
    title: 'Open Source Contribution Day',
    date: '2025-05-01',
    description:
      'A day dedicated to contributing to open-source projects. Learn git workflows, find issues, and make your first PR.',
    image: '/images/events/hackathon.png',
    tags: ['Open Source', 'GitHub', 'Community'],
    location: 'CS Lab 3',
    status: 'completed',
  },
  {
    id: 'ml-kaggle-night',
    title: 'Kaggle Night',
    date: '2025-04-20',
    description:
      'Late-night Kaggle competition solving. Teams compete on live datasets with real-time leaderboard. Pizza included.',
    image: '/images/events/hackathon.png',
    tags: ['ML', 'Competition', 'Data Science'],
    location: 'CS Department Lab',
    status: 'completed',
  },
];
