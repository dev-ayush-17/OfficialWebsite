'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS, SITE_CONFIG } from '@/lib/constants';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false });

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-tag', { opacity: 0, y: 20, duration: 0.5, delay: 0.3 })
      .from('.hero-title', { opacity: 0, y: 40, duration: 0.8 }, '-=0.2')
      .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
      .from('.hero-tagline', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
      .from('.hero-stats > div', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.2')
      .from('.hero-cta', { opacity: 0, y: 20, stagger: 0.15, duration: 0.5 }, '-=0.2')
      .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.1');
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Graffiti Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/graffiti/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.7)] via-[rgba(10,10,10,0.5)] to-[var(--bg-primary)]" />
      </div>

      {/* Particle Field */}
      <div className="absolute inset-0 z-[1]">
        <ParticleField />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay z-[2] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-narrow text-center flex flex-col items-center gap-6 py-32">
        <span className="hero-tag text-mono text-xs tracking-[0.2em]">
          // ESTABLISHED 2018 — NIT PATNA
        </span>

        <h1 className="hero-title text-display gradient-text-coral">
          Web & Coding
          <br />
          Club
        </h1>

        <p className="hero-subtitle text-heading text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-display)' }}>
          NIT Patna
        </p>

        <p className="hero-tagline text-body max-w-lg text-lg">
          {SITE_CONFIG.tagline}. {SITE_CONFIG.description.slice(0, 120)}...
        </p>

        {/* Stats */}
        <div className="hero-stats flex flex-wrap justify-center gap-8 md:gap-12 mt-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-mono text-[0.65rem]">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/team" className="hero-cta btn-primary">
            Explore Teams
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/events" className="hero-cta btn-secondary">
            View Events
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll mt-12 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-coral)" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
