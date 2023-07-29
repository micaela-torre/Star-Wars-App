import { useRef, useState } from 'react';

export const usePaginator = ({ initialPage, page, setPage, onHandlerChangePagination, count }) => {
  const initialPagePaginator = useRef(initialPage);
  const [itemPerPage, setItemPerPage] = useState(page);
  const [itemActive, setItemActive] = useState(count);

  const handleChangePaginator = e => {
    const { name } = e.target;
    let page = itemPerPage;

    if (name === 'next') {
      page = page + 1;
    } else {
      page = page - 1;
      if (page < initialPagePaginator?.current) page = initialPagePaginator?.current;
    }

    setItemPerPage(page);
    setPage(page);
  };

  const handleChangeOfNumberOfItemsOnScreen = item => {
    onHandlerChangePagination(item);
    setItemActive(item);
  };

  return { handleChangePaginator, itemPerPage, initialPagePaginator, itemActive, handleChangeOfNumberOfItemsOnScreen };
};
