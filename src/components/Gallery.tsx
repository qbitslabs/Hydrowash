import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { galleryFilters, type FilterCategory, type GalleryImage } from '@/data/galleryData';
import { autoGalleryImages } from '@/data/galleryImagesAuto';

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
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
    ? autoGalleryImages.slice(0, 8)
    : autoGalleryImages.filter(img => img.category === filter).slice(0, 8);
  
  const hasMoreImages = filter === 'all'
    ? autoGalleryImages.length > 8
    : autoGalleryImages.filter(img => img.category === filter).length > 8;

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
    const isWide = config.type === 'wide';
    const isTall = config.type === 'tall';
    const isStandard = config.type === 'standard';
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
          isWide || isTall || isLargeCinematic || isLuxuryShowcase ? "p-4 sm:p-6 lg:p-8" : "p-3 sm:p-4 lg:p-6",
          isWide || isTall || isLargeCinematic || isLuxuryShowcase || isVerticalReel ? "translate-y-0" : "translate-y-full sm:translate-y-full sm:group-hover:translate-y-0"
        )}>
          <div className={cn(
            "backdrop-blur-lg border rounded-lg",
            isWide || isTall || isLargeCinematic || isLuxuryShowcase ? "bg-black/60 border-white/10 p-3 sm:p-4 lg:p-6" : "bg-black/60 sm:bg-white/10 border-white/10 sm:border-white/20 p-2 sm:p-3 lg:p-4"
          )}>
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className={cn(
                "rounded-full bg-gold shadow-gold",
                isWide || isTall || isLargeCinematic || isLuxuryShowcase ? "w-2 h-2 sm:w-3 sm:h-3" : "w-1.5 h-1.5 sm:w-2 sm:h-2"
              )} />
              <span className={cn(
                "micro-label text-gold font-semibold tracking-wider",
                isWide || isTall || isLargeCinematic || isLuxuryShowcase ? "text-[10px] sm:text-xs lg:text-sm" : "text-[9px] sm:text-[10px] lg:text-xs"
              )}>
                {image.category.toUpperCase()}
                {isBeforeAfter && " • BEFORE/AFTER"}
                {isVerticalReel && " • REEL"}
                {isLuxuryShowcase && " • LUXURY SHOWCASE"}
                {isCraftsmanship && " • CRAFTSMANSHIP"}
                {isWide && " • WIDE"}
                {isTall && " • PORTRAIT"}
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
    <section id="gallery" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-8 sm:mb-12 transition-all duration-700 ease-premium px-4 sm:px-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="micro-label mb-3 sm:mb-4 block">Our Portfolio</span>
          <h2 className="headline-lg mb-3 sm:mb-4">
            <span className="text-gold-gradient">Transformation</span> Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Witness the remarkable transformations we deliver. Each project showcases 
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

        {/* Unified Gallery Layout - Bento Grid */}
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
                  style={{ transitionDelay: `${index * 100}ms` }}
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
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all duration-300 z-20"
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
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all duration-300 z-20"
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
          
          {/* Load More Button - All Screen Types */}
          {hasMoreImages && (
            <div className="mt-6 sm:mt-8 text-center">
              <Link
                to="/gallery"
                className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 border-2 border-gold/50 text-gold font-bold text-sm sm:text-base rounded-full transition-all duration-500 ease-premium hover:from-gold hover:to-gold hover:text-background hover:scale-105 hover:shadow-gold-lg hover:shadow-xl backdrop-blur-sm ring-2 ring-gold/30 ring-offset-2 ring-offset-background hover:ring-gold/60 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="relative z-10">Load More Images</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/5 via-gold/10 to-gold/5 p-8 sm:p-12 lg:p-16 text-center mt-8",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-pulse" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your <span className="text-gold-gradient">Vehicle?</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
              Experience the same premium craftsmanship and attention to detail you see in our gallery.
              Let us create a masterpiece of your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918888899936"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book Your Transformation
              </a>
              <a
                href="tel:+918888899936"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/30 text-gold font-semibold hover:bg-gold/10 transition-all duration-300 text-sm sm:text-base"
              >
                Call Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Gallery;
