import React from 'react';
import ListItem from './components/ListItem';
import styles from './list.module.css';
import Spinner from '../Spinner/Spinner';
import { formatUrl } from './utils/list.utils';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../models/routes';
import { IMAGE_LIST } from '../../constants';
import { useSEOHeadData } from '../../hooks/useSEOHeadData';

const List = ({ data, titleSection, isDataLoading, error, children }) => {
  const navigate = useNavigate();
  useSEOHeadData({ title: isDataLoading ? 'Loading...' : 'Home' });

  const handlerSeeMoreInfo = (url, name) => {
    if (!url) return null;
    const { section, id } = formatUrl(url);
    navigate(`${PublicRoutes.DETAILS}${section}/${id}/${name}`);
  };

  if (isDataLoading) return <Spinner />;
  if (error) return <p>Ha ocurrido un error, intente de nuevo más tarde o contacte a soporte.</p>;

  return (
    <>
      <section id={titleSection} className={styles.list_section_container}>
        <h2>{titleSection}</h2>
        {!data.length && <p className={styles.text_no_results_found}>No results found!🛸</p>}
        <div className={styles.list_container}>
          {data?.map((item, index) => (
            <ListItem
              key={`List_${titleSection}_${index}`}
              name={item.name}
              url={item.url}
              handlerSeeMoreInfo={handlerSeeMoreInfo}
              photo={IMAGE_LIST[item.name]}
            />
          ))}
        </div>
      </section>
      {children}
    </>
  );
};

export default List;
