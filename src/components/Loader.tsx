import { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Minimum display time for the loader
    const timer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(() => setIsLoading(false), 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-600 ${
        isHiding ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Logo Animation */}
      <div className="relative">
        <div className="animate-logo-reveal">
          <img 
            src="/Logo.png" 
            alt="HydroWash Car Wash & Detailing Studio" 
            className="h-20 md:h-28 w-auto object-contain"
          />
        </div>
        
        {/* Metallic Sweep Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-x-full animate-[shimmer_1.5s_ease-in-out_0.5s_forwards]" />
        </div>

      

        {/* Loading Bar */}
        <div className="mt-8 w-48 h-[2px] bg-border mx-auto overflow-hidden rounded-full">
          <div className="h-full bg-gold animate-[progress-line_2s_ease-out_forwards]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
