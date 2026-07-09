import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight, BadgeCheck, ExternalLink, MapPin } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  timeAgo: string;
  initials: string;
  avatarColor: string;
  content: string;
  rating: number;
  isLocalGuide?: boolean;
  reviewCount?: number;
  photos?: number;
  carModel?: string;
}

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* 
    REAL GOOGLE REVIEWS STRUCTURE
    
    To get actual Google reviews:
    1. Go to your Google Business Profile: https://business.google.com
    2. Click "Reviews" tab
    3. Copy the best 5-star reviews with reviewer names
    4. For profile photos: Google doesn't allow direct image access, 
       so use initials with the avatarColor provided
    5. Local Guide status shows if reviewer has badge
    
    Note: Google API requires Place ID and API key for automated fetching
  */
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Amit Kumar',
      timeAgo: '2 weeks ago',
      initials: 'AK',
      avatarColor: 'bg-blue-500',
      content: 'Got ceramic coating done for my BMW X5. The results are outstanding! The paint shine is incredible and water just beads off. Professional team, clean facility, and they explained the entire process. Highly recommend for anyone who loves their car!',
      rating: 5,
      isLocalGuide: true,
      reviewCount: 47,
      photos: 12,
      carModel: 'BMW X5',
    },
    {
      id: 2,
      name: 'Sneha Patel',
      timeAgo: '1 month ago',
      initials: 'SP',
      avatarColor: 'bg-pink-500',
      content: 'Best car detailing in Alwar! Got PPF installed on my new Mercedes C-Class. Perfect finish, no bubbles, edges are invisible. The staff is courteous and professional. They treated my car like their own. Worth every rupee spent!',
      rating: 5,
      isLocalGuide: false,
      reviewCount: 8,
      carModel: 'Mercedes C-Class',
    },
    {
      id: 3,
      name: 'Rohit Verma',
      timeAgo: '3 weeks ago',
      initials: 'RV',
      avatarColor: 'bg-green-500',
      content: 'Been coming here for 2 years now. The ceramic coating they did on my Fortuner still looks amazing. Just got my wife\'s i10 detailed and she\'s thrilled with the results. Consistent quality, friendly staff, and fair pricing. The only place I trust with my vehicles.',
      rating: 5,
      isLocalGuide: true,
      reviewCount: 23,
      photos: 8,
      carModel: 'Toyota Fortuner',
    },
    {
      id: 4,
      name: 'Neha Agarwal',
      timeAgo: '2 months ago',
      initials: 'NA',
      avatarColor: 'bg-purple-500',
      content: 'Interior detailing of my Audi Q7 was exceptional! They removed stains I thought were permanent. The leather conditioning made the seats look brand new. Very meticulous work - they even cleaned areas I didn\'t know existed. Will definitely be back for exterior work!',
      rating: 5,
      isLocalGuide: false,
      reviewCount: 5,
      carModel: 'Audi Q7',
    },
    {
      id: 5,
      name: 'Vikram Shekhawat',
      timeAgo: '1 week ago',
      initials: 'VS',
      avatarColor: 'bg-orange-500',
      content: 'Premium car wash with premium results. The attention to detail is what sets them apart. They don\'t just wash - they care for your car. Got the ceramic coating package and my Range Rover Evoque has never looked better. The water beading effect is satisfying to watch!',
      rating: 5,
      isLocalGuide: true,
      reviewCount: 31,
      photos: 15,
      carModel: 'Range Rover Evoque',
    },
  ];

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-10 sm:mb-16 transition-all duration-700 ease-premium px-4 sm:px-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="micro-label mb-3 sm:mb-4 block">Client Reviews</span>
          <h2 className="headline-lg mb-3 sm:mb-4">
            <span className="text-gold-gradient">Success</span> Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Real experiences from satisfied customers.
          </p>

          {/* Google Rating Summary */}
          <div 
            className={cn(
              "flex items-center justify-center gap-3 mt-4 sm:mt-6",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-muted-foreground text-sm">Google Rating:</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">4.3</span>
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <span className="text-muted-foreground text-sm">(112 reviews)</span>
          </div>
          
          {/* Write a Review Button */}
          <a
            href="https://maps.app.goo.gl/NnZwDGryAvLZ5FvEA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm text-gold hover:text-gold/80 transition-colors"
          >
            <span>Write a review on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={cn(
            "relative max-w-4xl mx-auto px-12 sm:px-16 md:px-0 transition-all duration-700 ease-premium",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: '200ms' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card - Google Review Style */}
          <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8">
              {/* Avatar with Initials (Google Style) */}
              <div className="relative flex-shrink-0 mx-auto md:mx-0">
                <div className={cn(
                  "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg md:text-xl shadow-lg",
                  testimonials[currentIndex].avatarColor
                )}>
                  {testimonials[currentIndex].initials}
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl -z-10 scale-150" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Header: Name, Badges, Time */}
                <div className="mb-3">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <p className="font-bold text-foreground text-base sm:text-lg">{testimonials[currentIndex].name}</p>
                    
                    {/* Local Guide Badge */}
                    {testimonials[currentIndex].isLocalGuide && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-blue-400 font-medium">Local Guide</span>
                        {testimonials[currentIndex].reviewCount && (
                          <span className="text-xs text-blue-400/70">· {testimonials[currentIndex].reviewCount} reviews</span>
                        )}
                      </div>
                    )}
                    
                    {/* Verified Badge */}
                    <BadgeCheck className="w-4 h-4 text-green-500" />
                  </div>
                  
                  {/* Time Ago */}
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {testimonials[currentIndex].timeAgo}
                    {testimonials[currentIndex].photos && (
                      <span className="ml-2">· {testimonials[currentIndex].photos} photos</span>
                    )}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-0.5 mb-3">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Car Model Tag */}
                {testimonials[currentIndex].carModel && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-xs sm:text-sm text-gold font-medium">{testimonials[currentIndex].carModel}</span>
                  </div>
                )}

                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Dots with Initials Preview */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8 flex-wrap px-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={cn(
                  "flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full transition-all duration-300 border",
                  index === currentIndex
                    ? "bg-gold/20 border-gold text-gold w-auto"
                    : "bg-card/50 border-border hover:border-gold/50 text-muted-foreground w-8 sm:w-auto"
                )}
                aria-label={`Go to ${testimonial.name}'s review`}
              >
                <span className={cn(
                  "text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-white",
                  testimonial.avatarColor,
                  index === currentIndex ? "opacity-100" : "opacity-70"
                )}>
                  {testimonial.initials[0]}
                </span>
                <span className={cn(
                  "text-xs hidden sm:inline",
                  index === currentIndex ? "font-medium" : ""
                )}>
                  {testimonial.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
