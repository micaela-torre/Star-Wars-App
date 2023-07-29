/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useMemo } from 'react';
import styles from './paginator.module.css';
import Button from '../Button';
import { usePaginator } from './hooks/usePaginator';

const Paginator = ({ page, initialPage, count, amountToShow = [3, 5, 10], onHandlerChangePagination, setPage }) => {
  const { handleChangePaginator, itemPerPage, initialPagePaginator, handleChangeOfNumberOfItemsOnScreen, itemActive } = usePaginator({
    page,
    initialPage,
    setPage,
    onHandlerChangePagination,
    count,
  });

  const showPagination = useMemo(() => count > initialPage, [count]);
  if (!showPagination) return null;

  return (
    <div className={styles.paginator_container}>
      <input type="button" onClick={handleChangePaginator} name="prev" defaultValue="Prev" disabled={itemPerPage === initialPagePaginator?.current} />

      <div className={styles.container_buttons}>
        {amountToShow?.map((item, index) => (
          <Button
            key={`Paginator_${index}`}
            onClick={() => handleChangeOfNumberOfItemsOnScreen(item)}
            disabled={itemActive === item}
            selected={itemActive === item}
          >
            {item}
          </Button>
        ))}
      </div>
      <input type="button" onClick={handleChangePaginator} name="next" defaultValue="Next" />
    </div>
  );
};

export default memo(Paginator);
