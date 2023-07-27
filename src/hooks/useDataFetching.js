import { useState, useEffect } from 'react';
import { SnackbarUtilities } from '../helpers/snackbar-manager';

const useDataFetching = (fetchFunction, dataAdapter) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction();
        if (dataAdapter) {
          setData(dataAdapter(response?.data?.results));
        } else {
          setData(response?.data?.results);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        SnackbarUtilities.error('Ha ocurrido un error, intente de nuevo más tarde.');
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};

export default useDataFetching;
