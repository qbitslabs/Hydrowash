import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Droplets,
  Sparkles,
  Layers,
  Sun,
  Car,
  Brush,
  Gem,
  Check,
  Clock,
  Phone,
  MessageCircle,
  RotateCw,
  Wrench,
  CircleDot,
  Cog,
  Wind,
  Zap,
  Award,
  Diamond,
  Heart,
  Wallet,
  VolumeX,
  Eye,
  Waves
} from 'lucide-react';
import { getAllServices } from '@/data/servicesData';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Icon mapping for service cards
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Droplets,
  Sparkles,
  Layers,
  Sun,
  Car,
  Brush,
  Gem,
  RotateCw,
  Wrench,
  CircleDot,
  Cog,
  Wind,
  Zap,
  Award,
  Diamond,
  Heart,
  Wallet,
  VolumeX,
  Eye,
  Clock,
  Waves,
};

const ServicesList = () => {
  const services = getAllServices();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-background to-background" />

          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <span className="micro-label mb-4 block">All Services</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium <span className="text-gold-gradient">Car Care</span>
                <br />Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                From protective coatings and paint correction to deep interior restoration,
                we offer comprehensive automotive care using industry-leading products and master craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918888899936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2 px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Quote
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
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-16 md:py-24 bg-card/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="micro-label mb-3 block">About HYDROWASH</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Premium <span className="text-gold-gradient">Automotive Care</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  At HYDROWASH, we are passionate about delivering premium automotive care that goes beyond a normal car wash. As a specialized premium car wash and detailing studio, we focus on enhancing, restoring, and protecting vehicles through industry-leading detailing solutions and advanced surface protection technologies.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our expertise includes Paint Protection Film (PPF), Ceramic Coating, Paint Correction, Interior Detailing, and comprehensive vehicle care treatments designed to maintain your vehicle's appearance and value. Every service is performed with precision, attention to detail, and a commitment to excellence.
                </p>
                <p className="text-muted-foreground mb-8">
                  We understand that your vehicle is more than just transportation—it's an investment and a reflection of your personality. That's why we use premium-grade products, professional techniques, and a customer-first approach to deliver results that meet the highest standards of quality.
                </p>
                <p className="text-muted-foreground mb-8">
                  Whether you own a luxury car, performance vehicle, SUV, motorcycle, or daily driver, HYDROWASH is dedicated to providing unmatched protection, superior finish, and long-lasting shine.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Certified technicians with years of experience",
                    "Premium products from leading brands",
                    "State-of-the-art facility & equipment",
                    "100% satisfaction guarantee",
                    "Transparent pricing, no hidden costs",
                    "Convenient location & flexible scheduling"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "5000+", label: "Cars Serviced" },
                  { number: "100%", label: "Satisfaction Rate" },
                  { number: "7 Days", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-6 text-center">
                    <p className="text-3xl font-bold text-gold mb-2">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 md:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="micro-label mb-3 block">Our Offerings</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Explore Our <span className="text-gold-gradient">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any service to learn more about the process, benefits, and pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = iconMap[service.mainIcon] || Shield;

                return (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={cn(
                      "group relative p-8 rounded-xl border border-border/30 bg-card/30",
                      "hover:border-gold/30 hover:bg-card transition-all duration-500",
                      "flex flex-col h-full"
                    )}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {service.shortDescription}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-border/30">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting from</p>
                        <p className="font-semibold text-gold">{service.packages[0]?.price || 'Custom'}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                        Details
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Categories Summary */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="micro-label mb-3 block">Categories</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Service <span className="text-gold-gradient">Categories</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Protective Coatings",
                  services: ["Ceramic Coating", "Graphene Coating", "PPF"],
                  description: "Long-term protection solutions for your paint",
                  icon: Shield
                },
                {
                  title: "Detailing",
                  services: ["Interior Detailing", "Exterior Detailing", "Complete Package"],
                  description: "Deep cleaning and restoration services",
                  icon: Sparkles
                },
                {
                  title: "Specialized Care",
                  services: ["Headlight Restoration", "Underbody Coating"],
                  description: "Targeted solutions for specific areas",
                  icon: Gem
                },
                {
                  title: "Maintenance",
                  services: ["Premium Car Wash"],
                  description: "Regular care to maintain your vehicle",
                  icon: Droplets
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border/30 bg-background hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-1">
                    {category.services.map((s, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <Check className="w-3 h-3 text-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Info */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="micro-label mb-3 block">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How to <span className="text-gold-gradient">Book</span>
              </h2>
              <p className="text-muted-foreground mb-12">
                We've made booking your service simple and convenient
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Choose Service",
                    description: "Browse our services and select the one that fits your needs"
                  },
                  {
                    step: "2",
                    title: "Book Appointment",
                    description: "Call us or book via WhatsApp at your convenience"
                  },
                  {
                    step: "3",
                    title: "Enjoy Results",
                    description: "Drop off your car and pick up a transformed vehicle"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-gold font-bold">{item.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
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
                  Call to Book
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.15),transparent_50%)]" />

              <div className="relative p-8 md:p-12 lg:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Not Sure What You Need?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Our experts can assess your vehicle and recommend the perfect services
                  for your needs and budget. Get a free consultation today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/918888899936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2 px-8 py-4"
                  >
                    <Clock className="w-5 h-5" />
                    Get Free Consultation
                  </a>
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

export default ServicesList;
