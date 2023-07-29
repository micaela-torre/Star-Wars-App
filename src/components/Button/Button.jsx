import React, { memo } from 'react';
import styles from './Button.module.css';
import { AiOutlineLoading } from 'react-icons/ai';

// interface PropsButton {
//   children: React.ReactNode;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   variant?: 'primary' | 'secondary' | 'text' | 'action';
//   sx?: React.CSSProperties;
//   customClasss?: { [key: string]: string };
//   loading?: boolean;
//   disabled?: boolean;
//   toolTip?: string;
// }

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
        onClick={onClick}
        className={`${styles['container']} ${styles[variant]} ${customClasss ? customClasss : ''} ${styles[selected ? 'selected' : '']}`}
        style={{ ...(sx || {}) }}
        disabled={disabled}
      >
        {isLoading || children}
      </button>
      <div className={`${toolTip ? styles['tooltip'] : ''}`}>{toolTip}</div>
    </div>
  );
};

export default memo(Button);
