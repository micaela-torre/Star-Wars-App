import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SnackbarUtilities } from '../../../helpers/snackbar-manager';

export const useDataList = ({ adapter, items, initialPage, setItems, service }) => {
  const location = useLocation();
  const search = Object.fromEntries(new URLSearchParams(location.search))?.search?.replace('=', '');
  const [list, setList] = useState(items);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [count, setCount] = useState(0);
  const abortController = new AbortController();
  const signal = abortController.signal;
  const listRef = useRef();

  const fetchData = async params => {
    try {
      if (signal.aborted) return null;
      setIsDataLoading(true);
      const results = await service({ data: params, signal });
      let items = results?.data?.results || [];
      if (adapter) items = adapter(items);
      if (setItems) setItems(items);
      listRef.current = items || [];
      let newCount = items?.length;
      setCount(newCount);
      if (Array.isArray(items)) items = items?.slice(0, newCount);
      setList(items);
    } catch (e) {
      setError(e);
      SnackbarUtilities.error('Ha ocurrido un error, intente de nuevo más tarde.');
      console.error(e);
    } finally {
      abortController.abort();
      if (signal.aborted) setIsDataLoading(false);
    }
  };

  useEffect(() => {
    if (page === initialPage) return;
    fetchData({ page });

    return () => {
      abortController.abort();
    };
    //eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    fetchData({ search });

    return () => {
      abortController.abort();
    };
    //eslint-disable-next-line
  }, [search]);

  const handleCardCountChange = count => {
    if (!count && !listRef?.current?.length) return null;
    const cloneList = [...listRef?.current];
    setList(cloneList.slice(0, count));
  };

  return { isDataLoading, list, setPage, page, error, handleCardCountChange, count };
};
