'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { FEATURES } from '@/lib/data/features';

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.from('.bento-item', {
      opacity: 0, y: 30, stagger: 0.08, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.bento-grid-container', start: 'top 85%' },
    });
  }, { scope: sectionRef });

  const sizeClass = (size: string) => {
    switch (size) {
      case 'large': return 'bento-large';
      case 'medium': return 'bento-medium';
      default: return 'bento-small';
    }
  };

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-wide">
        <SectionHeader title="What We Offer" subtitle="A complete ecosystem for tech enthusiasts" accent="sage" />

        <div className="bento-grid-container bento-grid mt-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`bento-item glass-card p-6 md:p-8 flex flex-col justify-between gap-4 group cursor-default ${sizeClass(feature.size)}`}
              style={{ borderLeft: `3px solid ${feature.color}` }}
            >
              <div>
                <span className="text-3xl mb-3 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {feature.stat && (
                <div className="mt-auto pt-4 border-t border-[var(--border-subtle)]">
                  <span className="text-2xl md:text-3xl font-bold" style={{ color: feature.color, fontFamily: 'var(--font-display)' }}>
                    <AnimatedCounter target={parseInt(feature.stat)} suffix={feature.stat.replace(/\d+/, '')} />
                  </span>
                  <p className="text-mono text-[0.6rem] mt-1">{feature.statLabel}</p>
                </div>
              )}

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${feature.color}08, transparent 70%)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
