import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 800) {
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
    <div className="fixed bottom-4 right-4 md:hidden">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-md bg-crimson text-white shadow-lg hover:bg-red-800 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faAngleUp} size="xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
