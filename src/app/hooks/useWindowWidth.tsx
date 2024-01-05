import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(0); // Default width or any appropriate initial value

  useEffect(() => {
    // Check if window is defined (avoiding errors during server-side rendering)
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidth(window.innerWidth);

      // Set initial width and attach event listener for window resize
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return width;
}

export default useWindowWidth;
