import { useRef, useState } from 'react';

export const usePaginator = ({ initialPage, page, setPage }) => {
  const initialPagePaginator = useRef(initialPage);
  const [itemPerPage, setItemPerPage] = useState(page);

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

  return { handleChangePaginator, itemPerPage, initialPagePaginator };
};
