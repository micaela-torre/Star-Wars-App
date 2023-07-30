import styles from './scrollTopButton.module.css';
import { useScrollTopButton } from './hooks/useScrollToTopButton';

function ScrollToTopButton() {
  const { isVisible, scrollToTop } = useScrollTopButton();
  return <button className={`${styles.scroll_to_top_button} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}></button>;
}

export default ScrollToTopButton;
