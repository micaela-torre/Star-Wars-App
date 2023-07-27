import CHARACTERS_IMAGES from '../../../constants/people.images';
import styles from './listItem.module.css';

const ListItem = ({ name, gender, films, url, homeworld, vehicles, itemId }) => {
  return (
    <div style={{ backgroundImage: `url(${CHARACTERS_IMAGES[itemId]})` }} className={styles.list_item_container}>
      <p className={styles.list_item_name}>{name}</p>
    </div>
  );
};

export default ListItem;
