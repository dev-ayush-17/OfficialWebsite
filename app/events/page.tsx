import type { Metadata } from 'next';
import { EVENTS } from '@/lib/data/events';
import EventCard from '@/components/events/EventCard';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Explore all events hosted by Web & Coding Club NIT Patna — hackathons, workshops, bootcamps, tech talks, and more.',
};

export default function EventsPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-mono text-xs mb-4 tracking-[0.2em]">// EVENTS</p>
          <h1 className="text-display gradient-text-coral mb-4">Events</h1>
          <p className="text-body max-w-2xl text-lg mb-12">
            From 48-hour hackathons to intensive bootcamps — we organize events that challenge,
            inspire, and build the tech community at NIT Patna.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
