import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { workCategories } from '@/data/ourWorkData';
import type { WorkCategory } from '@/data/ourWorkData';

const BeforeAfterSlider = ({ beforeImage, afterImage, title }: { beforeImage: string; afterImage: string; title: string }) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({ before: false, after: false });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const updatePosition = React.useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  }, []);

  React.useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e: PointerEvent) => updatePosition(e.clientX);
    const onPointerUp = () => setIsDragging(false);

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [isDragging, updatePosition]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && !isDragging) {
      updatePosition(e.clientX);
    }
  };

  const isReady = imagesLoaded.before && imagesLoaded.after;

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl group">
      <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-br from-gold/30 via-gold/10 to-gold/30 opacity-60 blur-sm" />

      <div
        ref={containerRef}
        className="relative h-full touch-none cursor-ew-resize select-none overflow-hidden rounded-3xl"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        role="slider"
        aria-label={`${title} before and after comparison`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
      >
        {/* After Image (Full - Bottom Layer) */}
        <img
          src={afterImage}
          alt={`${title} - After`}
          className="h-full w-full object-cover"
          draggable={false}
          loading="lazy"
          onLoad={() => setImagesLoaded((s) => ({ ...s, after: true }))}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder-after.jpg';
          }}
        />
        
        {/* Before Image (Clipped - Top Layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={`${title} - Before`}
            className="h-full w-full object-cover"
            draggable={false}
            loading="lazy"
            onLoad={() => setImagesLoaded((s) => ({ ...s, before: true }))}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder-before.jpg';
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
        </div>

        {/* Slider Divider Line */}
        <div
          className={cn(
            'absolute top-0 bottom-0 z-20 w-1 bg-gold shadow-[0_0_20px_rgba(212,175,55,0.6)]',
            !isDragging && 'transition-[left] duration-75'
          )}
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-105"
          >
            <div className="flex items-center gap-0.5 text-background">
              <svg className="w-4 h-4 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <svg className="w-4 h-4 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels with enhanced styling */}
        <div className="pointer-events-none absolute left-5 top-5 z-10">
          <div className="bg-background/95 backdrop-blur-md px-4 py-2 rounded-xl border border-border/50 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Before</span>
          </div>
        </div>
        <div className="pointer-events-none absolute right-5 top-5 z-10">
          <div className="bg-gold px-4 py-2 rounded-xl shadow-lg shadow-gold/30">
            <span className="text-xs font-bold uppercase tracking-widest text-background">After</span>
          </div>
        </div>

        
        {!isReady && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-muted/80">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
          </div>
        )}

        {/* Hover Border Effect */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-gold/0 transition-all duration-500 group-hover:border-gold/40" />
      </div>
    </div>
  );
};

const OurWork = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-premium",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="micro-label mb-4 block">What We Do</span>
          <h2 className="headline-lg mb-4">
            Our <span className="text-gold-gradient">Services</span> in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag the slider on each image to see the stunning before and after transformation 
            across our three core specializations.
          </p>
        </div>

        {/* Work Categories */}
        <div className="space-y-20">
          {workCategories.map((category, index) => (
            <div
              key={category.id}
              className={cn(
                "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ease-premium",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Before/After Comparison Image */}
              <div className={cn(
                "relative",
                index % 2 === 1 && "lg:order-2"
              )}>
                <BeforeAfterSlider
                  beforeImage={category.beforeImage}
                  afterImage={category.afterImage}
                  title={category.title}
                />
                
                {/* Stats below image on mobile */}
                <div className="flex gap-8 mt-4 lg:hidden">
                  {category.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-gold">{stat.value}</p>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className={cn(
                "space-y-6",
                index % 2 === 1 && "lg:order-1"
              )}>
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    <category.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="micro-label block mb-1">Service {index + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{category.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {category.description}
                </p>

                {/* Stats - Desktop only */}
                <div className="hidden lg:flex gap-8 py-4 border-y border-border">
                  {category.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-bold text-gold">{stat.value}</p>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.features.map((feature) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/918888899936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300 group"
                >
                  Inquire About {category.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={cn(
            "mt-20 text-center transition-all duration-700 ease-premium",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="text-muted-foreground mb-6">
            Do you need help in choosing a service?
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
