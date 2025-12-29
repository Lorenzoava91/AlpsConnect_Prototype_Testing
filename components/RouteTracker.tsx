import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag exists (it is injected in index.html)
    if ((window as any).gtag) {
      (window as any).gtag('config', 'G-NWWJ4GTTYZ', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
};

export default RouteTracker;