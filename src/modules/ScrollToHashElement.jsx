import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // slight delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100); // delay helps after route transition

    return () => clearTimeout(timeout);
  }, [hash, pathname]); // now runs on both hash and route changes

  return null;
};

export default ScrollToHashElement;
