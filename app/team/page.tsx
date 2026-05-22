import type { Metadata } from 'next';
import { TEAMS } from '@/lib/data/teams';
import TeamSection from '@/components/team/TeamSection';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the talented individuals behind Web & Coding Club NIT Patna. Explore our 7 specialized teams across Web Dev, Blockchain, Gen AI, ML, PR, Social Media, and Design.',
};

export default function TeamPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-8">
        <div className="container-wide">
          <p className="text-mono text-xs mb-4 tracking-[0.2em]">// OUR PEOPLE</p>
          <h1 className="text-display gradient-text-amber mb-4">Our Team</h1>
          <p className="text-body max-w-2xl text-lg">
            A diverse collective of builders, designers, and thinkers organized into 7 specialized teams.
            From Post Bearers who lead, to Senior Members who mentor, to Junior Members who are the future.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Teams */}
      <div className="container-wide">
        {TEAMS.map((team, i) => (
          <div key={team.id}>
            <TeamSection team={team} />
            {i < TEAMS.length - 1 && <hr className="section-divider" />}
          </div>
        ))}
      </div>
    </main>
  );
}
