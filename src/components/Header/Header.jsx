import { useState } from 'react';
import InputSearch from '../InputSearch/InputSearch';
import styles from './header.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../models/routes';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [seeSearch, setSeeSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.header_container}>
      <nav className={styles.header_menu}>
        <a href="#Characters">characters</a>
        <a href="#Planets">planets</a>
        <a href="#Vehicles">vehicles</a>
      </nav>
      <Link to={PublicRoutes.HOME}>
        <div className={styles.header_logo}></div>
      </Link>
      <div className={styles.header_extra_info}>
        {seeSearch ? (
          <InputSearch placeholder="may the force be with you" type="search" name="search" label="search for Names" />
        ) : (
          <AiOutlineSearch onClick={() => setSeeSearch(prev => !prev)} size="25px" />
        )}
        {location?.search && (
          <button className={styles.clean_filters_btn} onClick={() => navigate(PublicRoutes.HOME)}>
            Clean filter
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
