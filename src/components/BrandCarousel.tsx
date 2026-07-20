import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { brandImages } from '@/data/brandImagesAuto';

const BrandCarousel = ({ logos }: { logos?: string[] }) => {
  const { ref, isVisible } = useScrollReveal();
  const brandList = brandImages;
  const firstRow = brandList.slice(0, 14);
  const secondRow = brandList.slice(14);

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
          {/* Premium Marquee Layout */}
          <div className="space-y-8 overflow-hidden">
            {[firstRow, secondRow].map((row, rowIndex) => (
              <div key={rowIndex} className="relative overflow-hidden">
                <div
                  className={`flex w-max gap-6 ${rowIndex === 0
                      ? "animate-brand-marquee"
                      : "animate-brand-marquee-reverse"
                    }`}
                >
                  {[...row, ...row].map((brand, index) => {
                    const Card = (
                      <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                        <img
                          src={brand.url}
                          alt={brand.name}
                          loading="lazy"
                          className="max-h-20 max-w-[80%] object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    );

                    return brand.link ? (
                      <a
                        key={`${brand.name}-${index}`}
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Card}
                      </a>
                    ) : (
                      <div key={`${brand.name}-${index}`}>
                        {Card}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
