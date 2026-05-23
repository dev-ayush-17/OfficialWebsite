'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { PI_PROFILE, PRESIDENT_PROFILE } from '@/lib/constants';
import type { LeaderProfile } from '@/lib/types';

function LeadershipPanel({
  leader,
  accent,
}: {
  leader: LeaderProfile;
  accent: string;
}) {
  return (
    <div className="leader-card relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10">

      {/* Background Glow */}
      <div
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: accent }}
      />

      {/* Huge Background Text */}
      <h1 className="absolute bottom-0 right-4 text-[90px] lg:text-[140px] font-black text-white/[0.03] select-none leading-none">
        WNCC
      </h1>

      <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          <div
            className="inline-flex px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase border mb-6"
            style={{
              borderColor: accent,
              color: accent,
            }}
          >
            Leadership
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {leader.name}
          </h2>

          <p
            className="mt-3 text-sm uppercase tracking-[0.25em]"
            style={{ color: accent }}
          >
            {leader.designation}
          </p>

          <p className="mt-2 text-white/60">
            {leader.department}
          </p>

          <blockquote
            className="mt-8 border-l-2 pl-5 italic text-white/75 leading-relaxed"
            style={{ borderColor: accent }}
          >
            “{leader.quote}”
          </blockquote>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button
              className="px-6 py-3 rounded-full text-black font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: accent }}
            >
              Explore Profile
            </button>

            <button className="px-6 py-3 rounded-full border border-white/15 text-white hover:bg-white/5 transition">
              View Contributions
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div
            className="absolute inset-0 blur-3xl opacity-30 rounded-full"
            style={{ backgroundColor: accent }}
          />

          <Image
            src={leader.image}
            alt={leader.name}
            width={420}
            height={520}
            className="relative z-10 h-[420px] w-[320px] object-cover rounded-[28px] border border-white/10"
          />
        </div>
      </div>
    </div>
  );
}

export default function PIPresidentSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from('.leader-card', {
      opacity: 0,
      y: 60,
      stagger: 0.25,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow relative z-10">

        <SectionHeader
          title="Our Leadership"
          subtitle="Visionaries driving innovation, collaboration, and technical excellence at WnCC"
          accent="amber"
        />

        <div className="mt-14 space-y-10">
          <LeadershipPanel
            leader={PI_PROFILE}
            accent="#D9A84E"
          />

          <LeadershipPanel
            leader={PRESIDENT_PROFILE}
            accent="#D4643B"
          />
        </div>
      </div>
    </section>
  );
}
