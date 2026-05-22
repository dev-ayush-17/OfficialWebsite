'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import MemberCard from './MemberCard';
import type { Team } from '@/lib/types';

export default function TeamSection({ team }: { team: Team }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.from(sectionRef.current.querySelectorAll('.member-card'), {
      opacity: 0, y: 30, stagger: 0.08, duration: 0.5, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
    });
  }, { scope: sectionRef });

  const leaderInitials = team.leader.name.split(' ').map((n) => n[0]).join('');
  const seniors = team.members.filter((m) => m.hierarchy === 'senior');
  const juniors = team.members.filter((m) => m.hierarchy === 'junior');

  return (
    <section ref={sectionRef} id={team.slug} className="py-16 scroll-mt-24">
      {/* Team Header */}
      <div className="flex items-start gap-4 mb-10" style={{ borderLeft: `3px solid ${team.color}` }}>
        <div className="pl-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{team.icon}</span>
            <h2 className="text-heading text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              {team.name}
            </h2>
          </div>
          <p className="text-body max-w-2xl">{team.description}</p>
        </div>
      </div>

      {/* Team Leader */}
      <div className="mb-10">
        <h3 className="text-mono text-xs mb-4 tracking-wider">TEAM LEAD</h3>
        <div className="glass-card gradient-border p-6 md:p-8 max-w-lg">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${team.color}, var(--accent-amber))` }}
            >
              {leaderInitials}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[var(--text-primary)]">{team.leader.name}</h4>
              <p className="text-mono text-[0.6rem]" style={{ color: team.color }}>{team.leader.role}</p>
            </div>
          </div>
          {team.leader.quote && (
            <blockquote
              className="mt-4 pl-4 border-l-2 text-sm italic text-[var(--text-secondary)]"
              style={{ borderColor: team.color }}
            >
              &ldquo;{team.leader.quote}&rdquo;
            </blockquote>
          )}
        </div>
      </div>

      {/* Senior Members */}
      {seniors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-mono text-xs mb-4 tracking-wider">SENIOR MEMBERS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {seniors.map((member) => (
              <div key={member.id} className="member-card">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Junior Members */}
      {juniors.length > 0 && (
        <div>
          <h3 className="text-mono text-xs mb-4 tracking-wider">JUNIOR MEMBERS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {juniors.map((member) => (
              <div key={member.id} className="member-card">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
