import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Send, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();

  const quickLinks = [
    { label: 'About', href: '/services#about', isRoute: true },
    { label: 'Services', href: '/services#services', isRoute: true },
    { label: 'Gallery', href: '/gallery', isRoute: true },
    { label: 'Blog', href: '/blog', isRoute: true },
    { label: 'Process', href: '#process', isRoute: false },
    { label: 'Contact', href: '#contact', isRoute: false },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/hydrowash__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1JRg7C1eYW/', label: 'Facebook' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative pt-12 sm:pt-16 pb-6 sm:pb-8 overflow-hidden">
      {/* Animated Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="section-container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <img
              src="/Logo.png"
              alt="HydroWash Logo"
              className="h-16 sm:h-20 mb-3 sm:mb-4 mx-auto sm:mx-0"
            />
            <p className="text-muted-foreground max-w-md mb-5 sm:mb-6 mx-auto sm:mx-0 text-sm sm:text-base">
             Voted as the best car wash in the town.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="micro-label mb-3 sm:mb-4 text-xs sm:text-sm">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="micro-label mb-3 sm:mb-4 text-xs sm:text-sm">Newsletter</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs mx-auto sm:mx-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={cn(
                  "flex-1 px-3 sm:px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm",
                  "focus:outline-none focus:border-gold transition-colors duration-300"
                )}
                required
              />
              <button
                type="submit"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold text-background flex items-center justify-center hover:bg-gold/90 transition-colors duration-300 flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>
              Powered by{' '}
              <a
                href="https://qbits-main.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors duration-300"
              >
                Qbits
              </a>
            </p>
          </div>
          <p>© 2026 HydroWash Car Wash & Detailing Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
