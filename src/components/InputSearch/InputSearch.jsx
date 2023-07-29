import { memo } from 'react';
import styles from './Input.module.css';
import { useHandleInput } from './hooks/useHandleInput';
import { AiOutlineClear, AiOutlineSearch } from 'react-icons/ai';
import Button from '../Button';

const InputSearch = ({ placeholder = '', label = '', type = 'text', name, handleChangeSearch }) => {
  const { handleChange, handleSubmit, handleKeyPress, value, clearValue } = useHandleInput({ handleChangeSearch });

  return (
    <div className={styles.container_input}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} onKeyDown={handleKeyPress} />

        <Button onClick={clearValue} disabled={!value} toolTip="Clear">
          <AiOutlineClear />
        </Button>

        <Button onClick={handleSubmit} disabled={!value} toolTip="Search">
          <AiOutlineSearch />
        </Button>
      </div>
    </div>
  );
};

export default memo(InputSearch);
