import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContactFormTrigger } from '@/components/ContactFormModal';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/services', type: 'route' as const },
    { label: 'Pricing', href: '#pricing', type: 'anchor' as const },
    { label: 'Gallery', href: '/gallery', type: 'route' as const },
    { label: 'Blog', href: '/blog', type: 'route' as const },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    
    if (link.type === 'route') {
      // Let Link component handle routing
      return;
    }
    
    // For anchor links
    if (isHomePage) {
      const element = document.querySelector(link.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page with hash using React Router
      navigate('/' + link.href);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium",
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border"
            : "py-6 bg-transparent"
        )}
      >
        <div className="section-container flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/Logo.png" 
              alt="HydroWash Car Wash & Detailing Studio" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6 ml-auto">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-xs uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </button>
              )
            ))}
            <button
              onClick={() => {
                window.open("https://wa.me/918888899936?text=Hello,%20I%20would%20like%20to%20inquire%20about%20my%20vehicle's%20E-warranty.", "_blank", "noopener,noreferrer");
              }}
              className="text-xs uppercase tracking-wider text-gold font-medium hover:text-gold/80 transition-colors duration-300 bg-transparent p-0 border-0 cursor-pointer"
            >
              E-warranty
            </button>
            <ContactFormTrigger>
              <Button variant="outline" size="sm" className="px-3 py-1 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-wider hover:bg-gold/10 hover:border-gold transition-all duration-300 bg-transparent h-auto">
                Book Now
              </Button>
            </ContactFormTrigger>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 ease-premium md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 pt-16">
          {navLinks.map((link, index) => (
            link.type === 'route' ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-xl sm:text-2xl font-bold text-foreground hover:text-gold transition-all duration-300 active:scale-95",
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={cn(
                  "text-xl sm:text-2xl font-bold text-foreground hover:text-gold transition-all duration-300 active:scale-95",
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.label}
              </button>
            )
          ))}
          
          {/* E-warranty link for mobile */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.open("https://wa.me/918888899936?text=Hello,%20I%20would%20like%20to%20inquire%20about%20my%20vehicle's%20E-warranty.", "_blank", "noopener,noreferrer");
            }}
            className={cn(
              "text-xl sm:text-2xl font-bold text-gold hover:text-gold/80 transition-all duration-300 active:scale-95",
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            E-warranty
          </button>

          <ContactFormTrigger onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              className={cn(
                "btn-gold mt-2 sm:mt-4 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 bg-gold hover:bg-gold/90 text-black",
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: '400ms' }}
            >
              Book Now
            </Button>
          </ContactFormTrigger>
        </div>
      </div>
    </>
  );
};

export default Navbar;
