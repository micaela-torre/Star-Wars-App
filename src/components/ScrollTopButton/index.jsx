import React, { useState, useEffect } from 'react';
import styles from './scrollTopButton.module.css';
import ship from '../../assets/naveIcon.png';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={`${styles.scroll_to_top_button} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
      <img src={ship} alt="scroll-button" width={28} />
    </button>
  );
}

export default ScrollToTopButton;
