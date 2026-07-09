import { Link } from 'react-router-dom';
import { Shield, Droplets, Sparkles, ArrowRight, ChevronLeft, ChevronRight, Hand, Layers, Sun, Car, Brush, Gem, SprayCan, RotateCw, Waves, CircleDot, Wind, Wrench, Zap, Star, Settings, Cog, Gauge, Hammer, CheckCircle2, BadgeCheck, Award, Crown, Diamond, Flame, Snowflake, Zap as Lightning } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Autoplay from 'embla-carousel-autoplay';
import { getAllServices } from '@/data/servicesData';

// Icon mapping for dynamic rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Droplets,
  Sparkles,
  Layers,
  Sun,
  Car,
  Brush,
  Gem,
  SprayCan,
  RotateCw,
  Wrench,
  CircleDot,
  Cog,
  Wind,
  Zap,
  Waves,
};

interface ServiceCardProps {
  id: string;
  mainIcon: string;
  title: string;
  shortDescription: string;
  packages: { name: string; price: string; features: string[] }[];
}

const ServiceCard = ({ id, mainIcon, title, shortDescription, packages }: ServiceCardProps) => {
  const Icon = iconMap[mainIcon] || Shield;
  const price = packages[0]?.price || "Custom";
  const features = packages[0]?.features || [];

  return (
    <Link to={`/services/${id}`} className="group block h-full p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border border-border/50 bg-card/50 transition-all duration-300 hover:border-gold/30 hover:bg-card hover-lift">
      {/* Icon & Price Row */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
        </div>
        <div className="text-right">
          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">From</p>
          <p className="text-base sm:text-lg font-semibold text-gold transition-transform duration-300">{price}</p>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">{title}</h3>
      
      {/* Description */}
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">{shortDescription}</p>

      {/* Features */}
      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <li 
            key={index} 
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-all duration-300"
          >
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold" />
            <span className="line-clamp-1">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <span className="inline-flex items-center gap-1.5 sm:gap-2 text-gold text-xs sm:text-sm font-medium group-hover:gap-3 transition-all duration-300">
        View Details
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
      </span>
    </Link>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const isMobile = useIsMobile();
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  // Hide swipe hint after user interacts or after timeout
  useEffect(() => {
    if (!isMobile) return;
    
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Hide hint when user swipes
  useEffect(() => {
    if (current > 0) {
      setShowSwipeHint(false);
    }
  }, [current]);

  const services = useMemo(() => getAllServices(), []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="max-w-3xl">
            <span className="micro-label mb-3 block">Comprehensive Solutions</span>
            <h2 className="headline-lg mb-4">
              Premium <span className="text-gold-gradient">Car Care Services</span>
            </h2>
            <p className="text-muted-foreground">
              From protective coatings and paint correction to deep interior restoration and professional detailing, 
              we deliver expert automotive care using industry-leading products, advanced techniques, and master craftsmanship 
              to protect and transform your vehicle.
            </p>
          </div>

          {/* Navigation Controls - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-gold/50 hover:text-gold transition-all duration-300 disabled:opacity-50"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-gold/50 hover:text-gold transition-all duration-300 disabled:opacity-50"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full relative"
          >

            <CarouselContent className="-ml-4 py-5 md:-ml-6 md:py-6">
              {services.map((service) => (
                <CarouselItem 
                  key={service.title} 
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full px-0.5 py-1">
                    <ServiceCard {...service} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Mobile Swipe Hint */}
            {isMobile && showSwipeHint && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-end pr-4 z-10">
                <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full border border-border/50 animate-pulse">
                  <Hand className="w-4 h-4 text-gold animate-[swipe_1.5s_ease-in-out_infinite]" />
                  <span className="text-xs text-muted-foreground">Swipe</span>
                </div>
              </div>
            )}
          </Carousel>

          {/* Mobile Pagination Container */}
          <div className="mt-8 md:mt-12 flex flex-col items-center gap-6">
            {/* Repeating Dots Pagination */}
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: 4 }).map((_, index) => {
                const isActive = (current % 4) === index;
                return (
                  <div
                    key={index}
                    className={cn(
                      "rounded-full transition-all duration-500",
                      isActive 
                        ? "w-6 h-1.5 bg-gold shadow-[0_0_8px_rgba(255,215,0,0.5)]" 
                        : "w-1.5 h-1.5 bg-border"
                    )}
                  />
                );
              })}
            </div>

            {/* Navigation Controls - Mobile */}
            <div className="flex md:hidden items-center justify-center gap-8">
              <button
                onClick={scrollPrev}
                className="p-2 text-muted-foreground hover:text-gold transition-colors duration-300 focus:outline-none"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={scrollNext}
                className="p-2 text-muted-foreground hover:text-gold transition-colors duration-300 focus:outline-none"
                aria-label="Next service"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/30 rounded-lg text-gold font-medium hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            View All Services & Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
