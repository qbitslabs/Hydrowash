import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { Check, Star, Crown, Shield } from 'lucide-react';

interface PricingTier {
  name: string;
  icon: React.ElementType;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const Pricing = () => {
  const { ref, isVisible } = useScrollReveal();

  const tiers: PricingTier[] = [
    {
      name: 'Compounding and Polishing',
      icon: Crown,
      description: 'Paint correction for swirl marks and scratches',
      price: '₹4,499',
      priceNote: 'Sedan • SUV +₹500',
      features: [
        'Clay bar decontamination',
        'Compounding to remove scratches',
        'Polishing for swirl mark removal',
        'Paint correction (3 stage)',
        'Machine wax application',
        'Headlight restoration',
        '3-hour service',
      ],
      cta: 'Book Now',
    },
    {
      name: 'Premium Hydrowash & Wax',
      icon: Star,
      description: 'Thorough exterior and interior cleaning with premium protection',
      price: '₹1,199',
      priceNote: 'Sedan • SUV +₹150',
      features: [
        'Pre-wash foam application',
        'High-pressure exterior wash',
        'Microfiber cloth dry',
        'Tire & rim cleaning',
        'Window cleaning (exterior & interior)',
        'Interior vacuum & dusting',
        'Hand-applied premium wax',
        '1.5-hour service',
      ],
      popular: true,
      cta: 'Most Popular',
    },
    {
      name: 'Premium Detailing (Exterior & Interior)',
      icon: Shield,
      description: 'Complete restoration inside and out',
      price: '₹1,999',
      priceNote: 'Sedan • SUV +₹800',
      features: [
        'From premium Hydrowash and wax : Trim and rim cleaning',
        'Full interior shampoo & steam clean',
        'Leather seat conditioning',
        'Engine bay detailing',
        'Paint correction (single stage)',
        'Ceramic sealant application',
        'Glass polishing',
        '2-hour service',
      ],
      cta: 'Get Quote',
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-premium",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="micro-label mb-4 block">Service Packages</span>
          <h2 className="headline-lg mb-4">
            <span className="text-gold-gradient">Professional</span> Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert car care services with clear, upfront pricing. Vehicle type and specific requirements may affect final cost. Custom packages available upon request.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={cn(
                "relative transition-all duration-700 ease-premium",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-gold text-background text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={cn(
                  "glass-card h-full p-8 transition-all duration-500 group hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,162,39,0.2)] hover:-translate-y-2",
                  tier.popular && "border-gold/30 bg-gold/5 shadow-[0_0_30px_rgba(201,162,39,0.15)]"
                )}
              >
                {/* Icon */}
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
                  tier.popular ? "bg-gold/20 text-gold" : "bg-muted text-gold group-hover:bg-gold/20"
                )}>
                  <tier.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {tier.priceNote}
                  </p>
                  <p className="text-4xl font-bold text-gold-gradient">{tier.price}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/918888899936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block w-full py-4 rounded-lg font-semibold uppercase tracking-wider text-sm text-center transition-all duration-300",
                    tier.popular
                      ? "btn-gold"
                      : "border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold"
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className={cn(
            "text-center text-sm text-muted-foreground mt-12 transition-all duration-700 ease-premium",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: '500ms' }}
        >
          * Base pricing for sedan vehicles. SUV surcharge: +₹100-₹2,000 depending on package. Luxury vehicles require custom quotation.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
