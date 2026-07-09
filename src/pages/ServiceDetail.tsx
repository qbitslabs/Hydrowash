import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import {
  ArrowLeft,
  Check,
  Clock,
  Shield,
  Sparkles,
  Droplets,
  Sun,
  Gem,
  Zap,
  Wind,
  Award,
  Diamond,
  Layers,
  Eye,
  Heart,
  Wallet,
  VolumeX,
  HelpCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  MoveHorizontal,
  AlertTriangle,
  RotateCw,
  Wrench,
  CircleDot,
  Cog,
  Waves,
  Car
} from 'lucide-react';
import { getServiceById, getRelatedServices, type BeforeAfterImage } from '@/data/servicesData';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Before/After Comparison Component
const BeforeAfterComparison = ({ image }: { image: BeforeAfterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(percentage, 100)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none touch-none bg-muted"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchMove}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0">
          <img
            src={image.after}
            alt="After"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder-after.jpg';
            }}
          />
          <span className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
            After
          </span>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={image.before}
            alt="Before"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder-before.jpg';
            }}
          />
          <span className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
            Before
          </span>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <MoveHorizontal className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-sm text-muted-foreground font-medium">
        {image.caption}
      </p>
      <p className="text-center text-xs text-muted-foreground/60">
        Drag slider to compare before and after
      </p>
    </div>
  );
};

// Icon mapping for dynamic rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Sparkles,
  Droplets,
  Sun,
  Gem,
  Zap,
  Wind,
  Award,
  Diamond,
  Layers,
  Eye,
  Heart,
  Wallet,
  VolumeX,
  Clock,
  Check,
  RotateCw,
  Wrench,
  CircleDot,
  Cog,
  Waves,
  Car,
};


const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const service = id ? getServiceById(id) : undefined;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (!service || !id) {
        setError('Service not found');
        console.error(`Service not found for ID: ${id}`);
        // Redirect after a short delay to allow user to see the error
        setTimeout(() => {
          navigate('/services', { replace: true });
        }, 2000);
      }
    }, 500); // Simulate loading time

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [service, id, navigate]);

  if (isLoading) {
    return (
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="pt-20">
          <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading service details...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="pt-20">
          <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
              <p className="text-muted-foreground mb-6">
                {error || 'The service you\'re looking for doesn\'t exist.'}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Redirecting to services list...
              </p>
              <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Only use manually defined beforeAfterImages from servicesData.ts
  // Gallery folder images are NOT automatically shown on service pages anymore
  const combinedBeforeAfterImages: BeforeAfterImage[] = service.beforeAfterImages;

  const relatedServices = getRelatedServices(service.relatedServices);

  const renderIcon = (iconName: string) => {
    const Icon = iconMap[iconName] || Shield;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-background to-background" />

          <div className="section-container relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="micro-label mb-4 block">Professional Service</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                  {service.title.split(' ').map((word, i) =>
                    i === 0 ? <span key={i}>{word} </span> :
                      <span key={i} className="text-gold-gradient">{word} </span>
                  )}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">{service.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.fullDescription}</p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/918888899936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2 px-8 py-4"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book via WhatsApp
                  </a>
                  <a
                    href="tel:+918888899936"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold font-medium hover:bg-gold/10 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-6">Service Overview</h3>
                <div className="space-y-4">
                  {service.specs.slice(0, 4).map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center py-3 border-b border-border/30 last:border-0">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                  <p className="text-3xl font-bold text-gold">{service.packages[0]?.price || 'Custom Quote'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is It Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="micro-label mb-3 block">Understanding the Service</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is <span className="text-gold-gradient">{service.title}</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.whatIsIt}</p>
            </div>
          </div>
        </section>

        {/* Before/After Results Section */}
        {combinedBeforeAfterImages.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="section-container">
              <div className="text-center mb-12">
                <span className="micro-label mb-3 block">Real Results</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Before & <span className="text-gold-gradient">After</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  See the transformational results our {service.title} service delivers.
                  Drag the slider to compare before and after images.
                </p>
              </div>

              {/* Mobile: Stacked View */}
              <div className="block md:hidden space-y-8">
                {combinedBeforeAfterImages.map((image, index) => (
                  <div key={index} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={image.before}
                          alt="Before"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/placeholder-before.jpg';
                          }}
                        />
                        <span className="absolute top-2 left-2 px-2 py-1 bg-red-500/90 text-white text-xs font-bold uppercase rounded">
                          Before
                        </span>
                      </div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={image.after}
                          alt="After"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/placeholder-after.jpg';
                          }}
                        />
                        <span className="absolute top-2 right-2 px-2 py-1 bg-green-500/90 text-white text-xs font-bold uppercase rounded">
                          After
                        </span>
                      </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground font-medium">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>

              {/* Desktop: Slider View */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {combinedBeforeAfterImages.map((image, index) => (
                  <BeforeAfterComparison key={index} image={image} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="micro-label mb-3 block">Experience the Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gold-gradient">HydroWash</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whyChoose.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl border border-border/30 bg-card/30 hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="micro-label mb-3 block">Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Benefits of <span className="text-gold-gradient">{service.title}</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-xl border border-border/30 bg-background hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <span className="text-gold">{renderIcon(benefit.icon)}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="micro-label mb-3 block">Technical Data</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gold-gradient">Specifications</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our services utilize industry-leading products and equipment, meeting the highest professional standards.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {service.specs.map((spec, index) => (
                    <div key={index} className="p-4 rounded-lg bg-card/50 border border-border/30">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{spec.label}</p>
                      <p className="font-semibold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <span className="micro-label mb-3 block">Our Methodology</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The <span className="text-gold-gradient">Process</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our systematic approach ensures consistent, professional results every time.
                </p>

                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30">
                        <span className="text-gold font-bold text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="micro-label mb-3 block">Common Questions</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Frequently Asked <span className="text-gold-gradient">Questions</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border/30 rounded-lg px-6 data-[state=open]:border-gold/30"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 md:py-24 bg-card/30">
            <div className="section-container">
              <div className="text-center mb-12">
                <span className="micro-label mb-3 block">Explore More</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Related <span className="text-gold-gradient">Services</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((related) => (
                  <Link
                    key={related.id}
                    to={`/services/${related.id}`}
                    className="group p-6 rounded-xl border border-border/30 bg-background hover:border-gold/30 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-gold text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.15),transparent_50%)]" />

              <div className="relative p-8 md:p-12 lg:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Vehicle?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Book your {service.title} service today and experience the difference professional care makes.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/918888899936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2 px-8 py-4"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book via WhatsApp
                  </a>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold font-medium hover:bg-gold/10 transition-all duration-300"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
