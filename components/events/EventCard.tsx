'use client';

import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import type { ClubEvent } from '@/lib/types';

const statusColors: Record<string, 'sage' | 'coral' | 'amber'> = {
  completed: 'sage',
  upcoming: 'coral',
  ongoing: 'amber',
};

export default function EventCard({ event }: { event: ClubEvent }) {
  return (
    <div className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          width={600}
          height={340}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="tag bg-[var(--bg-primary)]/90 border-[var(--accent-amber)] text-[var(--accent-amber)]">
            {new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <Badge label={event.status} variant={statusColors[event.status]} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
          {event.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center gap-2 text-mono text-[0.6rem]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {event.location}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {event.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="gray" />
          ))}
        </div>
      </div>
    </div>
  );
}
