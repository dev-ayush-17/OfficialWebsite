'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { EVENTS } from '@/lib/data/events';

export default function RecentEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const recentEvents = EVENTS.slice(0, 3);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.from('.event-card', {
      opacity: 0, y: 40, stagger: 0.15, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-wide">
        <SectionHeader title="Recent Events" subtitle="What we've been up to" accent="amber" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {recentEvents.map((event) => (
            <div key={event.id} className="event-card glass-card overflow-hidden group">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={340}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Date badge */}
                <div className="absolute top-3 left-3">
                  <span className="tag bg-[var(--bg-primary)] border-[var(--accent-amber)] text-[var(--accent-amber)]">
                    {new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                  {event.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} label={tag} variant="gray" />
                  ))}
                </div>
                <div className="pt-2">
                  <span className="text-sm font-medium text-[var(--accent-coral)] group-hover:text-[var(--accent-amber)] transition-colors cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/events" className="btn-secondary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
