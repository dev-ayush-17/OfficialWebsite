'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/lib/constants';

const values = [
  { icon: '⚡', title: 'Innovation', desc: 'Pushing boundaries with cutting-edge tech' },
  { icon: '🤝', title: 'Collaboration', desc: 'Building together, growing together' },
  { icon: '📚', title: 'Learning', desc: 'Continuous growth through hands-on projects' },
  { icon: '🌍', title: 'Community', desc: 'A family of passionate technologists' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.from('.about-text', {
      opacity: 0, x: -40, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
    gsap.from('.about-image', {
      opacity: 0, x: 40, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
    gsap.from('.about-value', {
      opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.about-values', start: 'top 85%' },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="container-wide">
        <SectionHeader title="About Us" subtitle="What drives us forward" accent="coral" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mt-8">
          {/* Text */}
          <div className="about-text lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
              {SITE_CONFIG.description}
            </p>
            <p className="text-body">
              From weekend hackathons to structured bootcamps, from blockchain experiments
              to AI research — we provide the platform, mentorship, and community for students
              to transform their ideas into impactful projects. With 7 specialized teams and
              a growing family of 500+ members, WnCC is where the next generation of tech
              leaders is being built.
            </p>

            {/* Values Grid */}
            <div className="about-values grid grid-cols-2 gap-4 mt-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="about-value glass-card p-4 flex flex-col gap-2"
                >
                  <span className="text-2xl">{v.icon}</span>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">{v.title}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="about-image lg:col-span-2">
            <div className="glass-card gradient-border p-3 rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/about-illustration.png"
                alt="WnCC team collaboration"
                width={600}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
