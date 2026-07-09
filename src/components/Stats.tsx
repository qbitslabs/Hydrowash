import { useScrollReveal, useCountUp } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { Award, Car, Users, BadgeCheck, Shield, Star } from 'lucide-react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
  icon: React.ElementType;
}

const StatCounter = ({ value, suffix, label, isVisible, delay, icon: Icon }: StatProps) => {
  const count = useCountUp(value, 2500, delay, isVisible);

  return (
    <div className="text-center px-6 md:px-10 py-10 flex flex-col items-center group">
      {/* Dynamic Animated Icon Container */}
      <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 text-gold transition-all duration-500 ease-premium group-hover:bg-gold/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.3)]">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums">
        {count}<span className="text-gold">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold transition-colors duration-300 group-hover:text-foreground">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  const stats = [
    { value: 10, suffix: '+', label: 'Years Experience', icon: Award },
    { value: 5000, suffix: '+', label: 'Vehicles Detailed', icon: Car },
    { value: 4500, suffix: '+', label: 'Happy Clients', icon: Users },
    { value: 100, suffix: '%', label: 'Satisfaction Rate', icon: BadgeCheck },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-premium",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="micro-label mb-3 block">Why Choose Us</span>
          <h2 className="headline-lg">
            Trusted by <span className="text-gold-gradient">Thousands</span>
          </h2>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm text-muted-foreground">IDA Certified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <div className="flex">
                <Star className="w-3 h-3 text-gold fill-gold" />
                <Star className="w-3 h-3 text-gold fill-gold" />
                <Star className="w-3 h-3 text-gold fill-gold" />
                <Star className="w-3 h-3 text-gold fill-gold" />
                <Star className="w-3 h-3 text-gold fill-gold" />
              </div>
              <span className="text-sm text-muted-foreground">5 Star Rated</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 border-y border-border/40 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "border-border/40 transition-all duration-500 hover:bg-card/20",
                // Right border for left column items
                index % 2 === 0 && "border-r",
                // Bottom border for top row items on mobile
                index < 2 && "border-b md:border-b-0",
                // Right border for all except last on desktop
                "md:border-r md:last:border-r-0"
              )}
            >
              <StatCounter 
                {...stat} 
                isVisible={isVisible} 
                delay={index * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
