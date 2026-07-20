import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import {
  galleryFilters,
  type FilterCategory,
  type GalleryImage,
} from "@/data/galleryData";
import { autoGalleryImages } from "@/data/galleryImagesAuto";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const INITIAL_IMAGE_COUNT = 12;

const GalleryPage = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0 });

  const [filter, setFilter] = useState<FilterCategory>("all");
  const [visibleImageCount, setVisibleImageCount] =
    useState(INITIAL_IMAGE_COUNT);
  const [lightboxImage, setLightboxImage] =
    useState<GalleryImage | null>(null);

  const filteredImages =
    filter === "all"
      ? autoGalleryImages
      : autoGalleryImages.filter((img) => img.category === filter);

  const visibleImages = filteredImages.slice(0, visibleImageCount);

  const handleFilterChange = (nextFilter: FilterCategory) => {
    setFilter(nextFilter);
    setVisibleImageCount(INITIAL_IMAGE_COUNT);
  };

  // Gallery tile content component
  const GalleryTileContent = ({
    image,
  }: {
    image: GalleryImage;
  }) => {
    return (
      <div className="relative h-full w-full">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-all duration-700 ease-premium group-hover:scale-110 group-hover:brightness-110"
          style={{
            WebkitTapHighlightColor: "transparent",
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
          }}
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/50 opacity-0 transition-all duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 transition-all duration-500 sm:opacity-0 sm:group-hover:opacity-100" />
  
        {/* Border */}
        <div className="absolute inset-0 rounded-inherit border-2 border-transparent transition-all duration-500 group-hover:border-gold/50" />
        <div className="absolute inset-[2px] rounded-inherit border border-white/10 transition-all duration-500 group-hover:border-white/20" />
  
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-all duration-500 ease-premium sm:p-4 lg:p-6 sm:group-hover:translate-y-0">
          <div className="rounded-lg border border-white/10 bg-black/60 p-2 backdrop-blur-lg sm:border-white/20 sm:bg-white/10 sm:p-3 lg:p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gold shadow-gold" />
  
              <span className="micro-label text-[10px] font-semibold tracking-wider text-gold lg:text-xs">
                {image.category.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
  
        {/* Corner Accents */}
        <div className="absolute left-1.5 top-1.5 h-6 w-6 rounded-tl-lg border-l border-t border-gold/20 transition-all duration-400 group-hover:border-gold/60 sm:left-2 sm:top-2 sm:h-8 sm:w-8 sm:border-gold/30 sm:group-hover:border-gold/60" />
        <div className="absolute right-1.5 top-1.5 h-6 w-6 rounded-tr-lg border-r border-t border-gold/20 transition-all duration-400 group-hover:border-gold/60 sm:right-2 sm:top-2 sm:h-8 sm:w-8 sm:border-gold/30 sm:group-hover:border-gold/60" />
        <div className="absolute bottom-1.5 left-1.5 h-6 w-6 rounded-bl-lg border-b border-l border-gold/20 transition-all duration-400 group-hover:border-gold/60 sm:bottom-2 sm:left-2 sm:h-8 sm:w-8 sm:border-gold/30 sm:group-hover:border-gold/60" />
        <div className="absolute bottom-1.5 right-1.5 h-6 w-6 rounded-br-lg border-b border-r border-gold/20 transition-all duration-400 group-hover:border-gold/60 sm:bottom-2 sm:right-2 sm:h-8 sm:w-8 sm:border-gold/30 sm:group-hover:border-gold/60" />
  
        {/* Shimmer */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main ref={ref}>
        {/* Header */}
        <div className="relative overflow-hidden py-16 sm:py-24 md:py-32">
  <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

  <div className="relative z-10 section-container">
    <div
      className={cn(
        "px-4 sm:px-0 text-center mb-8 sm:mb-12 transition-all duration-700 ease-premium",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
    >
      <span className="micro-label block mb-3 sm:mb-4">
        Our Portfolio
      </span>

      <h1 className="headline-lg mb-3 sm:mb-4">
        <span className="text-gold-gradient">Complete</span>{" "}
        Gallery
      </h1>

      <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
        Browse our complete collection of transformations. Each project
        showcases our commitment to perfection.
      </p>
    </div>

    {/* Filter Buttons */}
    <div
      className={cn(
        "flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0",
        "transition-all duration-700 ease-premium delay-100",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
    >
      {galleryFilters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => handleFilterChange(value)}
          className={cn(
            "rounded-full px-4 py-2 sm:px-6",
            "text-xs sm:text-sm font-medium uppercase tracking-wider",
            "transition-all duration-300",
            filter === value
              ? "bg-gold text-background"
              : "border border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-gold"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
</div>

        {/* Gallery Grid - Bento Grid */}
        <div className="section-container pb-16 sm:pb-24 md:pb-32">
  <div className="w-full px-0 sm:px-4 md:px-0">
    <div className="grid h-full auto-rows-[200px] grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 md:gap-4">
      {visibleImages.map((image, index) => (
        <div
          key={image.id}
          onClick={() => setLightboxImage(image)}
          style={{ transitionDelay: `${index * 50}ms` }}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-xl",
            "bg-gradient-to-br from-card/50 to-card/80 hover:from-gold/20 hover:to-gold/30",
            "shadow-lg shadow-black/10 transition-all duration-700 ease-premium",
            "hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20",
            "active:scale-95",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          )}
        >
          <GalleryTileContent image={image} />
        </div>
      ))}
    </div>

    {filteredImages.length === 0 && (
      <div className="py-16 text-center">
        <p className="text-lg text-muted-foreground">
          No images found for this category.
        </p>
      </div>
    )}

    {visibleImageCount < filteredImages.length && (
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() =>
            setVisibleImageCount(
              (count) => count + INITIAL_IMAGE_COUNT
            )
          }
          className="rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-background"
        >
          Load More Images
        </button>
      </div>
    )}
  </div>
</div>
      </main>
      
    {/* Footer */}
<Footer />

{/* Lightbox */}
{lightboxImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-3 backdrop-blur-xl sm:p-4"
    onClick={() => setLightboxImage(null)}
  >
    <button
      aria-label="Close lightbox"
      onClick={() => setLightboxImage(null)}
      className="absolute right-3 top-3 z-10 p-2 text-muted-foreground transition-colors hover:text-gold sm:right-6 sm:top-6"
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

      <button
        onClick={(e) => {
          e.stopPropagation();

          const currentIndex = filteredImages.findIndex(
            (img) => img.id === lightboxImage.id
          );

          const prevIndex =
            currentIndex > 0
              ? currentIndex - 1
              : filteredImages.length - 1;

          setLightboxImage(filteredImages[prevIndex]);
        }}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/80"
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

          const currentIndex = filteredImages.findIndex(
            (img) => img.id === lightboxImage.id
          );

          const nextIndex =
            currentIndex < filteredImages.length - 1
              ? currentIndex + 1
              : 0;

          setLightboxImage(filteredImages[nextIndex]);
        }}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/80"
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
    </div>
  </div>
)}
</div>
);
};

export default GalleryPage;