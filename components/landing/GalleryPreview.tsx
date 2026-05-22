'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { GALLERY_IMAGES } from '@/lib/data/gallery';

export default function GalleryPreview() {
  const images = GALLERY_IMAGES.slice(0, 6);
  // Duplicate for infinite marquee
  const doubledImages = [...images, ...images];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <SectionHeader title="Moments Captured" subtitle="Glimpses from our events and activities" accent="coral" />
      </div>

      {/* Marquee */}
      <div className="mt-8 group">
        <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {doubledImages.map((img, i) => (
            <div
              key={`${img.id}-${i}`}
              className="relative flex-shrink-0 w-72 md:w-96 aspect-video rounded-xl overflow-hidden group/card"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-cover w-full h-full transition-transform duration-500 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-sm font-semibold text-white">{img.event}</p>
                  <p className="text-xs text-white/70">{img.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide mt-8 flex justify-center">
        <Link href="/gallery" className="btn-secondary">
          View Full Gallery →
        </Link>
      </div>
    </section>
  );
}
