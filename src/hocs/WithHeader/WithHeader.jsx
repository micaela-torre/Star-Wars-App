import InputSearch from '../../components/InputSearch/InputSearch';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../models/routes';

const WithHeader = Component => {
  return props => (
    <div className={styles.header_container}>
      <Component {...props} />
      <Link to={PublicRoutes.HOME}>
        <div className={styles.header_logo} />
      </Link>
      <div className={styles.header_extra_info}>
        <InputSearch placeholder="may the force be with you" type="search" name="search" label="search for Names" />
      </div>
    </div>
  );
};

export default WithHeader;
