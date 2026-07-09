import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { MapPin, Phone, Mail, Clock, ExternalLink, Star, Globe } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: '01, CEB Kalimori Bridge Station Road, Aravali Hotel, Alwar (Raj.) - 301001',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 88888-99936',
      href: 'tel:+918888899936',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@hydrowash.in',
      href: 'mailto:info@hydrowash.in',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon-Sun: 9AM - 7PM',
    },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-10 sm:mb-16 transition-all duration-700 ease-premium px-4 sm:px-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="micro-label mb-3 sm:mb-4 block">Get In Touch</span>
          <h2 className="headline-lg mb-3 sm:mb-4">
            Visit <span className="text-gold-gradient">Our Studio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Experience luxury car care at our state-of-the-art facility in Alwar.
          </p>
          
          {/* Google Reviews Badge */}
          <a
            href="https://maps.app.goo.gl/NnZwDGryAvLZ5FvEA"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 mt-4 sm:mt-6 px-4 py-2 rounded-full bg-card border border-border hover:border-gold/50 transition-all duration-300 group",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-xs sm:text-sm text-muted-foreground">Google Reviews</span>
            <div className="flex items-center gap-1">
              <span className="font-bold text-foreground">4.3</span>
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <span className="text-xs text-muted-foreground">(112 reviews)</span>
            <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-gold transition-colors" />
          </a>
        </div>

        <div className="grid w-full min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          {/* Map */}
          <div
            className={cn(
              "relative w-full min-w-0 max-w-full overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-700 ease-premium lg:h-full lg:min-h-[32rem]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.0!2d76.6123!3d27.5679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjc8MzQnMDQuNCJOIDc2wrAzNic0NC4zIkU!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HydroWash Car Wash Location"
              />
            </div>
            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-gold/20 sm:rounded-2xl" />
            
            {/* Directions Button */}
            <a
              href="https://maps.app.goo.gl/NnZwDGryAvLZ5FvEA"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-2 sm:px-4 sm:py-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border hover:border-gold/50 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Contact Info */}
          <div
            className={cn(
              "flex min-w-0 flex-col gap-3 sm:gap-6 lg:h-full lg:justify-center transition-all duration-700 ease-premium",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: '300ms' }}
          >
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="glass-card p-4 sm:p-6 group hover:border-gold/30 transition-all duration-300"
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="micro-label mb-1 text-[10px] sm:text-xs">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-gold transition-colors duration-300 text-sm sm:text-base break-all sm:break-normal"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm sm:text-base break-words">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918888899936"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full text-center mt-2 sm:mt-4 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base py-3 sm:py-4"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
