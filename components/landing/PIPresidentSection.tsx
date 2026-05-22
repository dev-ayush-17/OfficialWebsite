'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { PI_PROFILE, PRESIDENT_PROFILE } from '@/lib/constants';
import type { LeaderProfile } from '@/lib/types';

function LeaderCard({ leader, accent }: { leader: LeaderProfile; accent: string }) {
  const initials = leader.name.split(' ').map((n) => n[0]).join('');

  return (
    <div className="glass-card gradient-border p-8 flex flex-col items-center text-center gap-5">
      {/* Avatar with initials */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white"
        style={{ background: `linear-gradient(135deg, ${accent}, var(--accent-amber))` }}
      >
        {initials}
      </div>

      <div>
        <h3 className="text-subheading text-[var(--text-primary)]">{leader.name}</h3>
        <p className="text-mono text-xs mt-1" style={{ color: accent }}>
          {leader.designation}
        </p>
        <p className="text-sm text-[var(--text-muted)] mt-1">{leader.department}</p>
      </div>

      {/* Quote */}
      <blockquote className="relative pl-4 border-l-2 text-sm italic text-[var(--text-secondary)] leading-relaxed" style={{ borderColor: accent }}>
        &ldquo;{leader.quote}&rdquo;
      </blockquote>
    </div>
  );
}

export default function PIPresidentSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.from('.leader-card', {
      opacity: 0, y: 40, stagger: 0.2, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-narrow">
        <SectionHeader title="Our Leadership" subtitle="Guiding the club towards excellence" accent="amber" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="leader-card">
            <LeaderCard leader={PI_PROFILE} accent="var(--accent-amber)" />
          </div>
          <div className="leader-card">
            <LeaderCard leader={PRESIDENT_PROFILE} accent="var(--accent-coral)" />
          </div>
        </div>
      </div>
    </section>
  );
}
