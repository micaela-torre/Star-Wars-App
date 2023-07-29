import Spinner from '../../../../components/Spinner/Spinner';
import styles from '../cardDetails.module.css';

const CardDetails = ({ isDataLoading, data, photo }) => {
  if (isDataLoading) return <Spinner />;

  return (
    <div className={styles.card_details_container}>
      {photo && <div className={styles.card_details_photo} style={{ backgroundImage: `url(${photo})` }}></div>}
      <div>
        {data.map(({ key, value }) => (
          <p key={key}>
            {key} : {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
