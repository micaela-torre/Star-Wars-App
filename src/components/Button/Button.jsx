import React from 'react';
import styles from './Button.module.css';
const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button onClick={onClick} className={`${styles['container_Button']} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
