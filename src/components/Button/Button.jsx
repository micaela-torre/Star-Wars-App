import React, { memo } from 'react';
import styles from './button.module.css';
import { AiOutlineLoading } from 'react-icons/ai';

const Button = ({ children, variant = 'primary', onClick, selected, customClasss, sx, disabled = false, loading = false, toolTip = '' }) => {
  const childrenString = typeof children === 'string';
  const buttonLoading = <AiOutlineLoading className={styles.loading} />;

  const childrenWithLoading = (
    <>
      {children}
      <span>{buttonLoading}</span>
    </>
  );

  const isLoading = loading && (!childrenString ? buttonLoading : childrenWithLoading);

  return (
    <div className={styles.tooltip_container}>
      <button
        name={toolTip}
        onClick={onClick}
        className={`${styles['container']} ${styles[variant]} ${customClasss ? customClasss : ''} ${styles[selected ? 'selected' : '']}`}
        style={{ ...(sx || {}) }}
        disabled={disabled}
      >
        {isLoading || children}
      </button>
      <div className={`${toolTip && styles['tooltip']}`}>{toolTip}</div>
    </div>
  );
};

export default memo(Button);
