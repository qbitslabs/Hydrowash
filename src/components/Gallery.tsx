import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import {
  galleryFilters,
  type FilterCategory,
  type GalleryImage,
} from '@/data/galleryData';
import { autoGalleryImages } from '@/data/galleryImagesAuto';

const DISPLAY_COUNT = 8;

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();

  const [filter, setFilter] = useState<FilterCategory>('all');
  const [lightboxImage, setLightboxImage] =
    useState<GalleryImage | null>(null);

  const images =
    filter === 'all'
      ? autoGalleryImages
      : autoGalleryImages.filter((img) => img.category === filter);

  const filteredImages = images.slice(0, DISPLAY_COUNT);
  const hasMoreImages = images.length > DISPLAY_COUNT;

  const GalleryTileContent = ({
    image,
  }: {
    image: GalleryImage;
  }) => (
    <div className="relative h-full w-full">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105 sm:group-hover:scale-110"
        style={{
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100" />

      <div className="absolute inset-0 rounded-inherit border border-transparent transition-colors duration-500 group-hover:border-gold/40" />

      <div className="absolute inset-[2px] rounded-inherit border border-white/10 transition-colors duration-500 group-hover:border-white/20" />

      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 ease-premium group-hover:translate-y-0">
        <div className="rounded-lg border border-white/10 bg-black/60 p-3 backdrop-blur-lg">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gold shadow-gold" />

            <span className="micro-label text-[10px] font-semibold tracking-wider text-gold sm:text-xs">
              {image.category.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-2 top-2 h-8 w-8 rounded-tl-lg border-l border-t border-gold/30 transition-colors duration-300 group-hover:border-gold/60" />
      <div className="absolute right-2 top-2 h-8 w-8 rounded-tr-lg border-r border-t border-gold/30 transition-colors duration-300 group-hover:border-gold/60" />
      <div className="absolute bottom-2 left-2 h-8 w-8 rounded-bl-lg border-b border-l border-gold/30 transition-colors duration-300 group-hover:border-gold/60" />
      <div className="absolute bottom-2 right-2 h-8 w-8 rounded-br-lg border-b border-r border-gold/30 transition-colors duration-300 group-hover:border-gold/60" />

      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </div>
  );
           return (
  <section id="gallery" className="relative overflow-hidden py-16 sm:py-24 md:py-32">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

    <div ref={ref} className="section-container relative z-10">
      {/* Header */}
      <div
        className={cn(
          "mb-8 px-4 text-center transition-all duration-700 ease-premium sm:mb-12 sm:px-0",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        )}
      >
        <span className="micro-label mb-4 block">
          Our Portfolio
        </span>

        <h2 className="headline-lg mb-4">
          <span className="text-gold-gradient">
            Transformation
          </span>{" "}
          Gallery
        </h2>

        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
          Witness the remarkable transformations we deliver.
          Every project reflects our commitment to premium
          detailing and protection.
        </p>
      </div>

      {/* Filters */}
      <div
        className={cn(
          "mb-8 flex flex-wrap justify-center gap-2 px-4 transition-all duration-700 delay-100 sm:mb-12 sm:gap-4 sm:px-0",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        )}
      >
        {galleryFilters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 sm:px-6 sm:text-sm",
              filter === item.value
                ? "border-gold bg-gold text-background"
                : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-gold"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setLightboxImage(image)}
            style={{ transitionDelay: `${index * 80}ms` }}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-xl bg-card/60 shadow-lg transition-all duration-500",
              "hover:-translate-y-1 hover:scale-[1.02]",
              "hover:shadow-xl hover:shadow-black/20",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <GalleryTileContent image={image} />
          </div>
        ))}
      </div>          


 {/* Gallery Navigation Buttons */}
          {hasMoreImages && (
            <div className="mt-8 text-center">
              <Link
                to="/gallery"
                className="btn-gold inline-flex items-center gap-2 px-8 py-4"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                View Full Gallery
              </Link>
            </div>
          )}
        </div>

        {/* CTA */}
        <div
          className={cn(
            "mt-10 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/5 to-card p-8 text-center transition-all duration-700 sm:p-12",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Transform Your{" "}
            <span className="text-gold-gradient">
              Vehicle?
            </span>
          </h3>

          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Experience premium detailing, ceramic coating, paint protection
            film and professional car care trusted by hundreds of customers.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/918888899936"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>

              Book on WhatsApp
            </a>

            <a
              href="tel:+918888899936"
              className="inline-flex items-center justify-center rounded-xl border border-gold/30 px-8 py-4 font-semibold text-gold transition-all duration-300 hover:bg-gold/10"
            >
              Call Our Experts
            </a>
          </div>
        </div>

{/* Lightbox */}

{lightboxImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-3 sm:p-4"
    onClick={() => setLightboxImage(null)}
  >
    <button
      className="absolute top-3 right-3 z-10 p-2 text-muted-foreground transition-colors hover:text-gold sm:top-6 sm:right-6"
      onClick={() => setLightboxImage(null)}
      aria-label="Close lightbox"
    >
      <X className="h-6 w-6 sm:h-8 sm:w-8" />
    </button>

<div
  className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl p-4 sm:rounded-2xl"
  onClick={(e) => e.stopPropagation()}
>
  <img
    src={lightboxImage.src}
    alt={lightboxImage.alt}
    className="max-h-full max-w-full object-contain"
  />

  {(() => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === lightboxImage.id
    );

    const prevIndex =
      currentIndex > 0
        ? currentIndex - 1
        : filteredImages.length - 1;

    const nextIndex =
      currentIndex < filteredImages.length - 1
        ? currentIndex + 1
        : 0;

    return (
      <>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLightboxImage(filteredImages[prevIndex]);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition hover:bg-black/80"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setLightboxImage(filteredImages[nextIndex]);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition hover:bg-black/80"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </>
    );
  })()}

    </div>
  </div>
)}</section>
);
};

export default Gallery;
