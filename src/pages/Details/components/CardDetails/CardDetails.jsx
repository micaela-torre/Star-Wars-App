import React from 'react';
import Spinner from '../../../../components/Spinner/Spinner';
import styles from '../cardDetails.module.css';
import ListItem from '../../../../components/List/components/ListItem';
import { RenderDetail } from '../RenderDetail/RenderDetail';

const CardDetails = ({ isDataLoading, data, photo }) => {
  if (isDataLoading) return <Spinner />;
  if (!data || !data?.details?.length) return <p style={{ textAlign: 'center' }}>There is no information</p>;

  return (
    <div className={styles.card_details_container}>
      <ListItem name={data?.name} photo={photo}>
        <div className={styles.container_items}>
          {data?.details?.map((item, index) => (
            <div key={`CardDetails_${index}`}>
              <h4>{item.label || ''}:</h4> {RenderDetail(item)}
            </div>
          ))}
        </div>
      </ListItem>
    </div>
  );
};

export default CardDetails;
