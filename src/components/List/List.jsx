import React from 'react';
import ListItem from './components/ListItem';
import styles from './list.module.css';

const List = ({ data, page, setPage }) => {
  return (
    <div className={styles.list_container}>
      {data?.map((item, index) => (
        <ListItem key={item.id} {...item} itemId={index + 1} />
      ))}
    </div>
  );
};

export default List;
