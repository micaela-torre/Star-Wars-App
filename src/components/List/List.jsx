import React from 'react';
import ListItem from './components/ListItem';
import styles from './list.module.css';
import Spinner from '../Spinner/Spinner';

const List = ({ data, titleSection, isDataLoading, error, photoContainer }) => {
  if (isDataLoading) return <Spinner />;
  if (error) return <p>Ha ocurrido un error, intente de nuevo más tarde o contacte a soporte.</p>;

  return (
    <section id={titleSection} className={styles.list_section_container}>
      <h2>{titleSection}</h2>
      <div className={styles.list_container}>
        {data?.map((item, index) => (
          <ListItem key={`List_${titleSection}_${index}`} {...item} photoContainer={photoContainer} />
        ))}
      </div>
    </section>
  );
};

export default List;
