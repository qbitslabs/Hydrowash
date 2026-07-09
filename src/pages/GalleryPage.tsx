import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { galleryFilters, type FilterCategory, type GalleryImage } from '@/data/galleryData';
import { autoGalleryImages } from '@/data/galleryImagesAuto';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0 });
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [comparePosition, setComparePosition] = useState(50);
  const [imageDimensions, setImageDimensions] = useState<Record<number, { width: number; height: number; aspectRatio: number }>>({});

  // Load image dimensions
  useEffect(() => {
    const loadDimensions = async () => {
      const dimensions: Record<number, { width: number; height: number; aspectRatio: number }> = {};
      
      const promises = autoGalleryImages.map((image) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            dimensions[image.id] = {
              width: img.naturalWidth,
              height: img.naturalHeight,
              aspectRatio: img.naturalWidth / img.naturalHeight
            };
            resolve();
          };
          img.onerror = () => {
            // Fallback dimensions if image fails to load
            dimensions[image.id] = {
              width: 800,
              height: 600,
              aspectRatio: 1.33
            };
            resolve();
          };
          img.src = image.src;
        });
      });

      await Promise.all(promises);
      setImageDimensions(dimensions);
    };

    loadDimensions();
  }, []);

  const filteredImages = filter === 'all'
    ? autoGalleryImages
    : autoGalleryImages.filter(img => img.category === filter);

  // Gallery tile content component
  const GalleryTileContent = ({ 
    image, 
    config, 
    isVisible, 
    index 
  }: { 
    image: GalleryImage; 
    config: { type: string; gridClass: string; label: string }; 
    isVisible: boolean; 
    index: number;
  }) => {
    const isLargeCinematic = config.type === 'cinematic';
    const isCraftsmanship = config.type === 'craftsmanship';
    const isVerticalReel = config.type === 'reel';
    const isBeforeAfter = config.type === 'beforeAfter';
    const isLuxuryShowcase = config.type === 'luxury';

    return (
      <div className="relative w-full h-full">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-all duration-700 ease-premium group-hover:scale-105 group-hover:brightness-105 sm:group-hover:scale-110 sm:group-hover:brightness-110"
          loading="lazy"
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none'
          }}
        />
        
        {/* Mobile-optimized overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500" />
        
        {/* Premium border frame */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-all duration-500 rounded-inherit" />
        <div className="absolute inset-[2px] border border-white/10 group-hover:border-white/20 transition-all duration-500 rounded-inherit" />
        
        {/* Dynamic caption based on tile type */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 transition-all duration-500 ease-premium",
          isLargeCinematic || isLuxuryShowcase ? "p-4 sm:p-6 lg:p-8" : "p-3 sm:p-4 lg:p-6",
          isLargeCinematic || isLuxuryShowcase || isVerticalReel ? "translate-y-0" : "translate-y-full sm:translate-y-full sm:group-hover:translate-y-0"
        )}>
          <div className={cn(
            "backdrop-blur-lg border rounded-lg",
            isLargeCinematic || isLuxuryShowcase ? "bg-black/60 border-white/10 p-3 sm:p-4 lg:p-6" : "bg-black/60 sm:bg-white/10 border-white/10 sm:border-white/20 p-2 sm:p-3 lg:p-4"
          )}>
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className={cn(
                "rounded-full bg-gold shadow-gold",
                isLargeCinematic || isLuxuryShowcase ? "w-2 h-2 sm:w-3 sm:h-3" : "w-1.5 h-1.5 sm:w-2 sm:h-2"
              )} />
              <span className={cn(
                "micro-label text-gold font-semibold tracking-wider",
                isLargeCinematic || isLuxuryShowcase ? "text-[10px] sm:text-xs lg:text-sm" : "text-[9px] sm:text-[10px] lg:text-xs"
              )}>
                {image.category.toUpperCase()}
                {isBeforeAfter && " • BEFORE/AFTER"}
                {isVerticalReel && " • REEL"}
                {isLuxuryShowcase && " • LUXURY SHOWCASE"}
                {isCraftsmanship && " • CRAFTSMANSHIP"}
              </span>
            </div>
            {image.before && (
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                <svg className={cn(
                  "text-gold fill-none",
                  isLargeCinematic || isLuxuryShowcase ? "w-3 h-3 sm:w-4 sm:h-4" : "w-2.5 h-2.5 sm:w-3 sm:h-3"
                )} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span className={cn(
                  "text-white/80 font-medium",
                  isLargeCinematic || isLuxuryShowcase ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"
                )}>
                  {isBeforeAfter ? "Swipe to compare" : "Tap to compare"}
                </span>
              </div>
            )}
            {isVerticalReel && (
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                <svg className={cn(
                  "text-gold fill-none",
                  isLargeCinematic || isLuxuryShowcase ? "w-3 h-3 sm:w-4 sm:h-4" : "w-2.5 h-2.5 sm:w-3 sm:h-3"
                )} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={cn(
                  "text-white/80 font-medium",
                  isLargeCinematic || isLuxuryShowcase ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"
                )}>
                  Tap to play
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile-optimized corner accents */}
        <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-6 h-6 sm:w-8 sm:h-8 border-t border-l border-gold/20 sm:border-gold/30 group-hover:border-gold/40 sm:group-hover:border-gold/60 transition-all duration-400 rounded-tl-lg" />
        <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 border-t border-r border-gold/20 sm:border-gold/30 group-hover:border-gold/40 sm:group-hover:border-gold/60 transition-all duration-400 rounded-tr-lg" />
        <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 w-6 h-6 sm:w-8 sm:h-8 border-b border-l border-gold/20 sm:border-gold/30 group-hover:border-gold/40 sm:group-hover:border-gold/60 transition-all duration-400 rounded-bl-lg" />
        <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 border-b border-r border-gold/20 sm:border-gold/30 group-hover:border-gold/40 sm:group-hover:border-gold/60 transition-all duration-400 rounded-br-lg" />
        
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
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
        <div className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
          <div className="section-container relative z-10">
            <div
              className={cn(
                "text-center mb-8 sm:mb-12 transition-all duration-700 ease-premium px-4 sm:px-0",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <span className="micro-label mb-3 sm:mb-4 block">Our Portfolio</span>
              <h1 className="headline-lg mb-3 sm:mb-4">
                <span className="text-gold-gradient">Complete</span> Gallery
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Browse our complete collection of transformations. Each project showcases 
                our commitment to perfection.
              </p>
            </div>

            {/* Filter Buttons */}
            <div
              className={cn(
                "flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0 transition-all duration-700 ease-premium delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              {galleryFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={cn(
                    "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300",
                    filter === f.value
                      ? "bg-gold text-background"
                      : "bg-card border border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid - Bento Grid */}
        <div className="section-container pb-16 sm:pb-24 md:pb-32">
          <div className="w-full px-0 sm:px-4 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 h-full auto-rows-[200px]">
              {filteredImages.map((image, index) => {
                // Standard grid pattern - all tiles same size
                const getBentoConfig = (idx: number) => {
                  return { gridClass: 'col-span-1 row-span-1', type: 'standard', label: 'DETAIL' };
                };
                
                const config = getBentoConfig(index);
                
                return (
                  <div
                    key={image.id}
                    className={cn(
                      "group relative overflow-hidden cursor-pointer transition-all duration-700 ease-premium",
                      "active:scale-95",
                      config.gridClass,
                      config.type === 'luxury' || config.type === 'cinematic' || config.type === 'wide' ? "rounded-2xl" : "rounded-xl",
                      "shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-black/20",
                      "transform hover:scale-[1.02] hover:-translate-y-1",
                      "bg-gradient-to-br from-card/50 to-card/80 hover:from-gold/5 hover:to-gold/10",
                      "backdrop-blur-sm hover:backdrop-blur-md",
                      "relative z-10",
                      "hover:shadow-xl",
                      "hover:from-gold/20 hover:to-gold/30",
                      "hover:backdrop-blur-lg",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={() => setLightboxImage(image)}
                  >
                    <GalleryTileContent
                      image={image}
                      config={config}
                      isVisible={isVisible}
                      index={index}
                    />
                    
                    {/* Gallery Navigation Buttons */}
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        const prevIndex = index > 0 ? index - 1 : filteredImages.length - 1;
                        setLightboxImage(filteredImages[prevIndex]);
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextIndex = index < filteredImages.length - 1 ? index + 1 : 0;
                        setLightboxImage(filteredImages[nextIndex]);
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
            
            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No images found for this category.</p>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-3 sm:p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-3 sm:top-6 right-3 sm:right-6 p-2 text-muted-foreground hover:text-gold transition-colors z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div
            className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxImage.before ? (
              <>
                {/* Before/After Comparison */}
                <div className="relative w-full h-full">
                  {/* After Image (Full) */}
                  <img
                    src={lightboxImage.src}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  {/* Before Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - comparePosition}% 0 0)` }}
                  >
                    <img
                      src={lightboxImage.before}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                  {/* Labels */}
                  <div className="absolute top-4 left-4 micro-label bg-background/80 px-3 py-1 rounded">Before</div>
                  <div className="absolute top-4 right-4 micro-label bg-background/80 px-3 py-1 rounded">After</div>
                </div>
                
                {/* Navigation Controls */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all duration-300 z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    const index = filteredImages.findIndex(img => img.id === lightboxImage?.id);
                    const prevIndex = index > 0 ? index - 1 : filteredImages.length - 1;
                    setLightboxImage(filteredImages[prevIndex]);
                  }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all duration-300 z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    const index = filteredImages.findIndex(img => img.id === lightboxImage?.id);
                    const nextIndex = index < filteredImages.length - 1 ? index + 1 : 0;
                    setLightboxImage(filteredImages[nextIndex]);
                  }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Slider Control */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                  <Slider
                    value={[comparePosition]}
                    onValueChange={([value]) => setComparePosition(value)}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </>
            ) : (
              <>
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Navigation Controls for Single Images */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all duration-300 z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    const index = filteredImages.findIndex(img => img.id === lightboxImage?.id);
                    const prevIndex = index > 0 ? index - 1 : filteredImages.length - 1;
                    setLightboxImage(filteredImages[prevIndex]);
                  }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all duration-300 z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    const index = filteredImages.findIndex(img => img.id === lightboxImage?.id);
                    const nextIndex = index < filteredImages.length - 1 ? index + 1 : 0;
                    setLightboxImage(filteredImages[nextIndex]);
                  }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
