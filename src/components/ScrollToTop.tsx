import { useEffect } from "react";

const ScrollToTop = () => {
  // Scroll to top on mount (handles page refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;
