'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { TEAMS } from '@/lib/data/teams';

export default function TeamsOverview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.from('.team-card', {
      opacity: 0, y: 30, stagger: 0.08, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-wide">
        <SectionHeader title="Our Teams" subtitle="7 specialized divisions driving innovation" accent="sage" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {TEAMS.map((team) => (
            <Link
              key={team.id}
              href={`/team#${team.slug}`}
              className="team-card glass-card p-6 group cursor-pointer"
              style={{ borderLeft: `3px solid ${team.color}` }}
            >
              <span className="text-3xl mb-4 block">{team.icon}</span>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-coral)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                {team.name}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-4">
                {team.description}
              </p>
              <span className="text-mono text-[0.6rem]">
                {team.members.length + 1} members
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
