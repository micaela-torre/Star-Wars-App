import React, { memo } from 'react';
import styles from './paginator.module.css';
import Button from '../PrimaryButton/PrimaryButton';
import { usePaginator } from './hooks/usePaginator';

const Paginator = ({ page, initialPage, showPagination = true, onHandlerChangePagination, setPage }) => {
  const { handleChangePaginator, itemPerPage, initialPagePaginator } = usePaginator({ page, initialPage, setPage });

  if (!showPagination) return null;

  return (
    <div className={styles.paginator_container}>
      <input type="button" onClick={handleChangePaginator} name="prev" defaultValue="Prev" disabled={itemPerPage === initialPagePaginator?.current} />

      <div className={styles.buttons}>
        <Button onClick={() => onHandlerChangePagination(6)}>6</Button>
        <Button onClick={() => onHandlerChangePagination(12)}>12</Button>
        <Button onClick={() => onHandlerChangePagination(20)}>20</Button>
      </div>
      <input type="button" onClick={handleChangePaginator} name="next" defaultValue="Next" />
    </div>
  );
};

export default memo(Paginator);
