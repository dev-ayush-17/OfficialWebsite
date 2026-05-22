import type { Metadata } from 'next';
import { DEVELOPERS } from '@/lib/data/developers';
import DeveloperCard from '@/components/developers/DeveloperCard';

export const metadata: Metadata = {
  title: 'Developers',
  description: 'Meet the developers who built the Web & Coding Club NIT Patna website.',
};

export default function DevelopersPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-mono text-xs mb-4 tracking-[0.2em]">// BUILT BY</p>
          <h1 className="text-display gradient-text-coral mb-4">Developers</h1>
          <p className="text-body max-w-2xl text-lg mb-12">
            Meet the talented individuals who designed, developed, and deployed this website.
            Every pixel, every animation, every line of code — crafted with passion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEVELOPERS.map((dev) => (
              <DeveloperCard key={dev.id} developer={dev} />
            ))}
          </div>

          {/* Credit */}
          <div className="mt-16 text-center glass-card p-8">
            <p className="text-mono text-xs tracking-wider mb-3">TECH STACK</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP', 'Lenis', 'Three.js', 'React Three Fiber'].map((tech) => (
                <span key={tech} className="tag border-[var(--accent-sage)] text-[var(--accent-sage)]">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-6">
              Open source on{' '}
              <a href="https://github.com/wncc-nitp" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-coral)] hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
