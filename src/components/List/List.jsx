import React from 'react';
import ListItem from './components/ListItem';
import styles from './list.module.css';
import Paginator from '../Paginator/Paginator';

const List = ({ data, titleSection, page, setPage, photoContainer }) => {
  return (
    <section id={titleSection} className={styles.list_section_container}>
      <h2>{titleSection}</h2>
      <div className={styles.list_container}>
        {data?.map(item => (
          <ListItem key={item.name} {...item} photoContainer={photoContainer} />
        ))}
      </div>
      <Paginator />
    </section>
  );
};

export default List;
