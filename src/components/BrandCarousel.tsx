import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { brandImages } from '@/data/brandImagesAuto';

const BrandCarousel = ({ logos }: { logos?: string[] }) => {
  const { ref, isVisible } = useScrollReveal();
  const brandList = brandImages;

  return (
    <section className="w-full overflow-hidden bg-background py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <div
          className={cn(
            'transition-all duration-700 ease-premium',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          {/* Section Header */}
          <div className="mb-16 text-center md:mb-20">
            <span className="micro-label mb-3 block">Our Partners</span>
            <h2 className="headline-lg mb-4">
              Premium <span className="text-gold-gradient">Brands We Use</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We partner with world-leading automotive care brands to deliver exceptional results
              and give your vehicle the protection it deserves.
            </p>
          </div>

          {/* Grid Blocks Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto px-4">
            {brandList.map((brand, index) => (
              brand.link ? (
                <a
                  key={brand.name}
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-2xl flex flex-col items-center justify-center bg-black shadow-[0_0_15px_rgba(255,255,255,0.15),0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25),0_0_50px_rgba(255,255,255,0.15)] hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden border border-white/10"
                  style={{
                    transitionDelay: `${(index % 4) * 60}ms`
                  }}
                >
                  <img
                    src={brand.url}
                    alt={brand.name}
                    className="w-full h-full object-contain p-4 sm:p-6 transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div
                  key={brand.name}
                  className="aspect-square rounded-2xl flex flex-col items-center justify-center bg-black shadow-[0_0_15px_rgba(255,255,255,0.15),0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25),0_0_50px_rgba(255,255,255,0.15)] hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden border border-white/10"
                  style={{
                    transitionDelay: `${(index % 5) * 60}ms`
                  }}
                >
                  <img
                    src={brand.url}
                    alt={brand.name}
                    className="w-full h-full object-contain p-4 sm:p-6 transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
