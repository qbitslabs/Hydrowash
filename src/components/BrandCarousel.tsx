import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { brandImages } from '@/data/brandImagesAuto';

const BrandCarousel = () => {
  const { ref, isVisible } = useScrollReveal();

  const firstRow = brandImages.slice(0, 14);
  const secondRow = brandImages.slice(14);

  return (
    <section className="w-full overflow-hidden bg-background py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <div
          className={cn(
            'transition-all duration-700 ease-premium',
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          )}
        >
          {/* Section Header */}
          <div className="mb-16 text-center md:mb-20">
            <span className="micro-label mb-3 block">
              Our Partners
            </span>

            <h2 className="headline-lg mb-4">
              Premium{' '}
              <span className="text-gold-gradient">
                Brands We Use
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We partner with world-leading automotive care brands
              to deliver exceptional results and give your vehicle
              the protection it deserves.
            </p>
          </div>

          {/* Marquee */}
          <div className="space-y-6 overflow-hidden">
            {[firstRow, secondRow].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="relative overflow-hidden"
              >
                <div
                  className={`flex w-max gap-4 md:gap-6 ${rowIndex === 0
                      ? 'animate-brand-marquee'
                      : 'animate-brand-marquee-reverse'
                    }`}
                >
                  {[...row, ...row].map((brand, index) => {
                    const card = (
                      <div
                        className="
                          flex
                          h-20 w-20
                          sm:h-24 sm:w-24
                          md:h-28 md:w-28
                          lg:h-36 lg:w-36
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          border border-white/10
                          bg-black
                          transition-all
                          duration-300
                        "
                      >
                        <img
                          src={brand.url}
                          alt={brand.name}
                          loading="lazy"
                          className="
                            max-h-10
                            sm:max-h-12
                            md:max-h-14
                            lg:max-h-20
                            max-w-[75%]
                            object-contain
                            transition-transform
                            duration-300
                            hover:scale-105
                          "
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
                        {card}
                      </a>
                    ) : (
                      <div key={`${brand.name}-${index}`}>
                        {card}
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