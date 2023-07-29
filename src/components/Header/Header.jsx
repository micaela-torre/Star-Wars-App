import { useState } from 'react';
import InputSearch from '../InputSearch/InputSearch';
import styles from './header.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const [seeSearch, setSeeSearch] = useState(false);

  return (
    <div className={styles.header_container}>
      <nav className={styles.header_menu}>
        <a href="#Characters">characters</a>
        <a href="#Planets">planets</a>
        <a href="#Vehicles">vehicles</a>
      </nav>
      <div className={styles.header_logo}></div>
      <div className={styles.header_extra_info}>
        {seeSearch ? (
          <InputSearch placeholder="may the force be with you" type="search" name="search" label="search for Names" />
        ) : (
          <AiOutlineSearch onClick={() => setSeeSearch(prev => !prev)} size="25px" />
        )}
      </div>
    </div>
  );
};

export default Header;
