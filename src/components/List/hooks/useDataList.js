import { useEffect, useState } from 'react';
import { SnackbarUtilities } from '../../../helpers/snackbar-manager';

export const useDataList = ({ adapter, items, initialPage, setItems, service, filters }) => {
  const [list, setList] = useState(items);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (signal.aborted) return null;
        setIsDataLoading(true);
        const results = await service(filters);
        let items = results?.data?.results;
        if (adapter) items = adapter(results?.data?.results);
        if (setItems) setItems(items);
        setList(items);
      } catch (e) {
        setError(e);
        SnackbarUtilities.error('Ha ocurrido un error, intente de nuevo más tarde.');
        console.error(e);
      } finally {
        setIsDataLoading(false);
        abortController.abort();
      }
    };

    fetchData();

    return () => {
      setList([]);
    };
    //eslint-disable-next-line
  }, [page]);

  return { isDataLoading, list, setPage, page, error, setList };
};
