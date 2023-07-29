import { memo } from 'react';
import styles from './Input.module.css';
import { useHandleInput } from './hooks/useHandleInput';
import { AiOutlineSearch } from 'react-icons/ai';

const InputSearch = ({ placeholder = '', label = '', type = 'text', name, handleChangeSearch }) => {
  const { handleChange, handleSubmit, handleKeyPress, value } = useHandleInput({ handleChangeSearch });

  return (
    <div className={styles.container_input}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} onKeyDown={handleKeyPress} />
      <AiOutlineSearch onClick={handleSubmit} />
    </div>
  );
};

export default memo(InputSearch);
