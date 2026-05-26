'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { FEATURES } from '@/lib/data/features';
import Image from 'next/image';

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo('.bento-item',
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.bento-grid-container', start: 'top 85%' },
      }
    );
  }, { scope: sectionRef });

  // Get specific feature by ID from features data array
  const getFeature = (id: string) => {
    return FEATURES.find((f) => f.id === id) || {
      id,
      title: '',
      description: '',
      icon: '',
      color: '#FFFFFF',
      stat: '',
      statLabel: ''
    };
  };

  // Render high-fidelity stroke line SVG icons matching the reference image
  const renderIcon = (id: string) => {
    const commonProps = {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#e4e4e7", // sleek light gray
      strokeWidth: "1.75",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    switch (id) {
      case 'tech-talks':
        return (
          <svg {...commonProps}>
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        );
      case 'hackathons':
        return (
          <svg {...commonProps}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'open-source':
        return (
          <svg {...commonProps}>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        );
      case 'workshops':
        return (
          <svg {...commonProps}>
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case 'peer-learning':
        return (
          <svg {...commonProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'community-events':
        return (
          <svg {...commonProps}>
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
          </svg>
        );
      case 'project-mentoring':
        return (
          <svg {...commonProps}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'code-challenges':
        return (
          <svg {...commonProps}>
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
            <path d="M12 2a6 6 0 0 1 6 6v3.58a6 6 0 0 1-6 5.42 6 6 0 0 1-6-5.42V8a6 6 0 0 1 6-6Z" />
          </svg>
        );
      case 'industry-connect':
        return (
          <svg {...commonProps}>
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderImage = (id: string, isHorizontal: boolean) => {
    if (id === 'tech-talks') {
      return (
        <div className="absolute right-0 bottom-0 w-[100%] h-[70%] pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/images/bentoGrid/screen.png"
            alt="Tech Talks Screen"
            fill
            className="object-contain object-right-bottom opacity-30 group-hover:opacity-45 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      );
    }
    if (id === 'open-source') {
      return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-12%] w-[100%] h-[70%] pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/images/bentoGrid/opensource.png"
            alt="Open Source"
            fill
            className="object-contain object-center-bottom opacity-35 group-hover:opacity-50 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      );
    }

    if (id === 'industry-connect') {
      return (
        <div className="absolute right-2 bottom-0 w-[70%] h-[92%] pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/images/bentoGrid/industry_connect.png"
            alt="Industry Guidance"
            fill
            className="object-contain object-right-bottom opacity-35 group-hover:opacity-50 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      );
    }

    if (id === 'hackathons') {
      return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[12%] w-[100%] h-[70%] pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/images/bentoGrid/hack.png"
            alt="Hackathons"
            fill
            className="object-contain object-center-bottom opacity-35 group-hover:opacity-50 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      );
    }

    if (id === 'code-challenges') {
      return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-5%] w-[95%] h-[55%] pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/images/bentoGrid/code.png"
            alt="Code Challenges"
            fill
            className="object-contain object-center-bottom opacity-35 group-hover:opacity-50 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      );
    }

    if (id === 'peer-learning') {
      return null;
    }

    if (id === 'community-events') {
      return null;
    }

    if (id === 'project-mentoring') {
      return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] w-[95%] h-[48%] pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/images/bentoGrid/project.png"
            alt="Project Guidance"
            fill
            className="object-contain object-center-bottom opacity-35 group-hover:opacity-50 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      );
    }

    if (id === 'workshops') {
      return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[30%] w-[95%] h-[55%] pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/images/bentoGrid/workshops.png"
            alt="Workshops"
            fill
            className="object-contain object-center-bottom opacity-35 group-hover:opacity-50 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      );
    }

    return <div className={`flex-1 w-full h-full min-h-[100px] ${isHorizontal ? 'ml-4' : 'mt-2'}`} />;
  };

  const renderCard = (id: string, gridClasses: string, isHorizontal: boolean = false) => {
    const feature = getFeature(id);
    const icon = renderIcon(id);

    return (
      <div
        className={`bento-item bento-${id} p-8 flex flex-col justify-between group cursor-default relative overflow-hidden rounded-[24px] border border-[#222222] bg-white/5 backdrop-blur-lg hover:border-neutral-700 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(255,255,255,0.03)] min-h-[300px] ${gridClasses}`}
      >
        {/* Subtle, extremely dark hover light source glow centered on the top edge */}
        <div
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        {isHorizontal ? (
          <div className="flex flex-col justify-between h-full w-full">
            {/* Left Content Column (vertically stacked like others) */}
            <div className="relative z-10 flex flex-col max-w-[50%] md:max-w-[55%]">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e1e1e] border border-neutral-800/80 shadow-md select-none group-hover:bg-[#222222] transition-colors duration-500">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-5 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                {feature.description}
              </p>

              {/* Dynamic statistics for horizontal card */}
              {feature.stat && (
                <div className="mt-4 relative z-10 flex flex-col gap-1">
                  <span className="text-4xl font-extrabold text-white tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                    <AnimatedCounter target={parseInt(feature.stat)} suffix={feature.stat.replace(/\d+/, '')} />
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-neutral-500">
                    {feature.statLabel}
                  </p>
                </div>
              )}
            </div>

            {/* Right Illustration */}
            {renderImage(id, true)}
          </div>
        ) : (
          <>
            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e1e1e] border border-neutral-800/80 shadow-md select-none self-start flex-shrink-0 group-hover:bg-[#222222] transition-colors duration-500">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-5 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>

            {/* Image or Placeholder */}
            {renderImage(id, false)}

            {/* Dynamic statistics at bottom for cards with stats */}
            {feature.stat && (
              <div className="mt-auto relative z-10 flex flex-col gap-1">
                <span className="text-5xl font-extrabold text-white tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                  <AnimatedCounter target={parseInt(feature.stat)} suffix={feature.stat.replace(/\d+/, '')} />
                </span>
                <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-neutral-500">
                  {feature.statLabel}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="section-padding bg-black text-white overflow-hidden py-20 md:py-28">
      <div className="container-wide px-4 md:px-8 mx-auto">
        <SectionHeader title="What We Offer" subtitle="A complete ecosystem for tech enthusiasts" accent="primary" />

        {/* Bento Grid Matrix Container */}
        <div className="bento-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-12 max-w-[1240px] mx-auto h-auto auto-rows-auto lg:h-[1300px] lg:grid-rows-[repeat(8,_minmax(0,_1fr))]">
          {/* Row 1-2 */}
          {renderCard('tech-talks', 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2')}
          {renderCard('hackathons', 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-4')}
          {renderCard('open-source', 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2')}

          {/* Row 3-6 */}
          {renderCard('workshops', 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-4')}
          {renderCard('project-mentoring', 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-4')}

          {/* Row 5-6 */}
          {renderCard('peer-learning', 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2')}
          {renderCard('community-events', 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2')}

          {/* Row 7-8 */}
          {renderCard('code-challenges', 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2')}
          {renderCard('industry-connect', 'col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-2', true)}
        </div>
      </div>
    </section>
  );
}