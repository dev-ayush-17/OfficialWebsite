import type { Metadata } from 'next';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/data/gallery';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse photos from Web & Coding Club NIT Patna events, workshops, hackathons, and community activities.',
};

export default function GalleryPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-mono text-xs mb-4 tracking-[0.2em]">// GALLERY</p>
          <h1 className="text-display gradient-text-sage mb-4">Gallery</h1>
          <p className="text-body max-w-2xl text-lg mb-12">
            A visual journey through our events, workshops, and community moments.
            Click any image to view in full screen.
          </p>

          <GalleryGrid images={GALLERY_IMAGES} categories={GALLERY_CATEGORIES} />
        </div>
      </section>
    </main>
  );
}
