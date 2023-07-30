import styles from './listItem.module.css';
import Stars from '../../../assets/stars.png';

const ListItem = ({ name = '', url, photoContainer, handlerSeeMoreInfo, children }) => {
  const photo = photoContainer?.[name];
  const handleClick = () => {
    if (handlerSeeMoreInfo) handlerSeeMoreInfo(url, name);
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${photo || Stars})` }} className={styles.list_item_container} onClick={handleClick}>
        <div className={styles.border}>
          <p className={`${!photo ? styles['photo_not_found'] : styles['list_item_name']}`}>{name}</p>
          {!photo && <p className={`${styles['text_not_found']} ${styles['photo_not_found']}`}>Photo not found</p>}
        </div>
      </div>
      {children}
    </>
  );
};

export default ListItem;
