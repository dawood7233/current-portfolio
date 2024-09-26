import React, { useState, useEffect } from 'react';
import './Arrow.scss'; 

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="arrow-container" onClick={scrollToTop}>
          <img src="./arrow.png" alt="Go to top" className="arrow" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopArrow;
