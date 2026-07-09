import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, Home, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllServices } from "@/data/servicesData";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const services = getAllServices();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = services
        .filter(service => 
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(service => service.title)
        .slice(0, 3);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, services]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      const service = services.find(s => 
        s.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (service) {
        navigate(`/services/${service.id}`);
      } else {
        navigate(`/services`);
      }
    }
  };

  const popularRoutes = [
    { path: "/", label: "Home", description: "Main landing page" },
    { path: "/services", label: "All Services", description: "Browse our car care services" },
  ];

  const serviceRoutes = services.slice(0, 3).map(service => ({
    path: `/services/${service.id}`,
    label: service.title,
    description: service.shortDescription
  }));

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20">
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            {/* 404 Animation */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="text-8xl md:text-9xl font-bold text-gold/20">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold-gradient">Oops!</div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Page Not Found
            </h1>
            
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let us help you find what you're looking for.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Search for services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-12"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Search Suggestions */}
              {suggestions.length > 0 && (
                <div className="mt-2 text-left">
                  <p className="text-sm text-muted-foreground mb-1">Suggestions:</p>
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        const service = services.find(s => s.title === suggestion);
                        if (service) navigate(`/services/${service.id}`);
                      }}
                      className="block w-full text-left px-3 py-1 text-sm hover:bg-gold/10 rounded transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </form>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button onClick={() => navigate(-1)} variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
              
              <Button onClick={() => navigate("/")} className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Button>
              
              <Button asChild variant="outline">
                <a href="tel:+918888899936" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </Button>
              
              <Button asChild variant="outline">
                <a href="https://wa.me/918888899936" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Popular Routes */}
            <div className="text-left max-w-md mx-auto">
              <h3 className="font-semibold mb-4">Popular Pages</h3>
              <div className="space-y-2 mb-6">
                {popularRoutes.map((route, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(route.path)}
                    className="w-full text-left p-3 rounded-lg border border-border/30 hover:border-gold/30 hover:bg-gold/5 transition-all duration-200"
                  >
                    <div className="font-medium">{route.label}</div>
                    <div className="text-sm text-muted-foreground">{route.description}</div>
                  </button>
                ))}
              </div>

              <h3 className="font-semibold mb-4">Popular Services</h3>
              <div className="space-y-2">
                {serviceRoutes.map((route, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(route.path)}
                    className="w-full text-left p-3 rounded-lg border border-border/30 hover:border-gold/30 hover:bg-gold/5 transition-all duration-200"
                  >
                    <div className="font-medium">{route.label}</div>
                    <div className="text-sm text-muted-foreground">{route.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
