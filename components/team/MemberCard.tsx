'use client';

import Link from 'next/link';
import type { TeamMember } from '@/lib/types';

const socialIcons: Record<string, string> = {
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  github: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z',
  email: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 2l-8 5-8-5v12h16V6z',
};

const hierarchyColors: Record<string, { bg: string; text: string; label: string }> = {
  'post-bearer': { bg: 'var(--accent-coral-dim)', text: 'var(--accent-coral)', label: 'Post Bearer' },
  senior: { bg: 'var(--accent-amber-dim)', text: 'var(--accent-amber)', label: 'Senior' },
  junior: { bg: 'var(--accent-sage-dim)', text: 'var(--accent-sage)', label: 'Junior' },
};

export default function MemberCard({ member }: { member: TeamMember }) {
  const initials = member.name.split(' ').map((n) => n[0]).join('');
  const hierarchy = hierarchyColors[member.hierarchy];

  return (
    <div className="glass-card p-5 flex flex-col items-center text-center gap-3 group hover:-translate-y-1 transition-all duration-300">
      {/* Avatar */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-lg"
        style={{ background: `linear-gradient(135deg, ${hierarchy.text}, var(--accent-amber))` }}
      >
        {initials}
      </div>

      <div>
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">{member.name}</h4>
        <p className="text-mono text-[0.6rem] mt-1">{member.role}</p>
      </div>

      {/* Hierarchy Badge */}
      <span
        className="text-[0.6rem] font-medium px-3 py-1 rounded-full uppercase tracking-wider"
        style={{ background: hierarchy.bg, color: hierarchy.text }}
      >
        {hierarchy.label}
      </span>

      {/* Social links */}
      <div className="flex items-center gap-3 mt-1">
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-coral)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={socialIcons.linkedin} /></svg>
          </a>
        )}
        {member.socials.github && (
          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-coral)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={socialIcons.github} /></svg>
          </a>
        )}
        {member.socials.email && (
          <a href={`mailto:${member.socials.email}`} className="text-[var(--text-muted)] hover:text-[var(--accent-coral)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={socialIcons.email} /></svg>
          </a>
        )}
      </div>
    </div>
  );
}
