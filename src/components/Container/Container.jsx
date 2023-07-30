import styles from './container.module.css';

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <footer style={{ width: '100%', textAlign: 'center', margin: '1rem' }}>
        <small>Copyright © 2023 Star Wars by Mica</small>
      </footer>
    </div>
  );
};

export default Container;
