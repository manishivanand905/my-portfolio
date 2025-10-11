import { useState, useEffect } from 'react';

const usePageTransition = () => {
  const [transitioning, setTransitioning] = useState(false);

  const handlePageTransition = (callback) => {
    setTransitioning(true);
    setTimeout(() => {
      callback();
      setTransitioning(false);
    }, 500); // Match this with your animation duration
  };

  return { transitioning, handlePageTransition };
};

export default usePageTransition;