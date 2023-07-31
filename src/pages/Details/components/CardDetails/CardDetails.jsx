import React from 'react';
import Spinner from '../../../../components/Spinner/Spinner';
import styles from '../cardDetails.module.css';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../../../models/routes';
import { formatUrl } from '../../../../utils/functions';
import ListItem from '../../../../components/List/components/ListItem';

const CardDetails = ({ isDataLoading, data, photo }) => {
  if (isDataLoading)
    return (
      <div className={styles.container_spinner}>
        <Spinner />
      </div>
    );

  const renderDetail = ({ key, value }) => {
    if (key === 'Residents') {
      //existe un array, y en ese array, todos son https? hacer recursividad para funcion y componente
      return (
        <div key={key} className={styles.list_ul}>
          <h4>Residentes</h4>

          <ul>
            {value?.map((url, index) => {
              const { section, id } = formatUrl(url);
              const regexNum = /\/api\/([^/]+)\/(\d+)\/?/;
              const regexSection = /\/api\/([^/]+)/;
              const match = url.match(regexSection);
              const matchNum = url.match(regexNum);
              // console.log(match[1], matchNum[2]);
              return (
                <li key={index}>
                  <Link to={`${PublicRoutes.DETAILS}${section}/${id}/`}>See resitent {id}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return (
      <p key={key}>
        {key} : {value}
      </p>
    );
  };

  return (
    <div className={styles.card_details_container}>
      <ListItem name="" photo={photo}>
        <div>{data?.map(renderDetail)}</div>
      </ListItem>
    </div>
  );
};

export default CardDetails;
