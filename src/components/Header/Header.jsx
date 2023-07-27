import InputSearch from '../InputSearch/InputSearch';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo}></div>
      <InputSearch placeholder="El momento de buscar a llegado..." type="search" name="search" />
    </div>
  );
};

export default Header;
