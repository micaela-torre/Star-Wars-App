import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputSearch from '../InputSearch/InputSearch';
import styles from './header.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const [seeSearch, setSeeSearch] = useState(false);

  return (
    <div className={styles.header_container}>
      <nav className={styles.header_menu}>
        <Link>characters</Link>
        <Link>vehicles</Link>
        <Link>planets</Link>
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
