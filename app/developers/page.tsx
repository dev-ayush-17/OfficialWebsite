import type { Metadata } from 'next';
import { DEVELOPERS } from '@/lib/data/developers';
import DeveloperCard from '@/components/developers/DeveloperCard';

export const metadata: Metadata = {
  title: 'Developers',
  description: 'Meet the developers who built the Web & Coding Club NIT Patna website.',
};

export default function DevelopersPage() {
  return (
    <main className="pt-24 min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Subtle Dark Abstract Art Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-50 blur-[6px]"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/dq1fhihvx/image/upload/v1779799317/original-images/tv5jy4b1nivenk2asih0.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Extremely subtle glowing orbs matching card accents */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#ff5e13] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#fccc0a] opacity-[0.02] blur-[150px]" />
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-[#ff3300] opacity-[0.02] blur-[100px]" />

        {/* Very faint structural grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <section className="section-padding relative z-10 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-mono text-xs mb-4 tracking-[0.2em] text-[#ff5e13] font-bold uppercase">// THE BUILDERS</p>
            <h1 className="text-display text-white mb-4 text-5xl md:text-7xl font-black tracking-tight">Developers</h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Meet the talented individuals who designed, developed, and deployed this website.
              Every pixel, every animation, every line of code — crafted with passion.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {DEVELOPERS.map((dev) => (
              <DeveloperCard key={dev.id} developer={dev} />
            ))}
          </div>

          {/* Credit */}
          <div className="mt-24 text-center glass-card p-8 bg-black/40 border border-white/5 backdrop-blur-md rounded-2xl max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
            <p className="text-mono text-xs tracking-wider mb-4 text-white/50">TECH STACK</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP', 'Lenis', 'Three.js', 'React Three Fiber'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs border border-white/10 rounded-full text-white/80 bg-white/5 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-8">
              Open source on{' '}
              <a href="https://github.com/wncc-nitp" target="_blank" rel="noopener noreferrer" className="text-[#ff5e13] hover:text-[#e3a020] transition-colors hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
