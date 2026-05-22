'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/lib/types';

interface GalleryGridProps {
  images: GalleryImage[];
  categories: readonly string[];
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filtered.length - 1));
  }, [filtered.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : 0));
  }, [filtered.length]);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`tag cursor-pointer transition-all duration-300 ${
              activeCategory === cat
                ? 'border-[var(--accent-coral)] text-[var(--accent-coral)] bg-[var(--accent-coral-dim)]'
                : 'hover:border-[var(--accent-coral)] hover:text-[var(--accent-coral)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((img, index) => (
          <div
            key={img.id}
            className="break-inside-avoid rounded-xl overflow-hidden group cursor-pointer relative"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-sm font-semibold text-white">{img.event}</p>
                <p className="text-xs text-white/70">{img.date} · {img.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Previous"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={filtered[lightboxIndex].width}
              height={filtered[lightboxIndex].height}
              className="max-h-[80vh] w-auto object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-sm text-white">{filtered[lightboxIndex].event}</p>
              <p className="text-xs text-white/50 mt-1">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Next"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
