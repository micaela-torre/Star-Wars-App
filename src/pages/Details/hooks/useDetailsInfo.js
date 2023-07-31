import { useEffect, useState } from 'react';
import adaptApiInformation from '../adapter.detail';
import { DetailsServices } from '../services/details.service';

export const useDetailsInfo = ({ endpoint }) => {
  const [data, setData] = useState();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsDataLoading(true);
        const res = await DetailsServices.getDetails(endpoint);
        const { url, created, edited, ...cleanData } = res?.data || {};
        const dataAdapted = adaptApiInformation(cleanData);

        setData({ name: cleanData?.name || '', details: dataAdapted });
      } catch (e) {
        console.error(e);
      } finally {
        // setIsDataLoading(false);
      }
    };
    getDetails();
  }, [endpoint]);

  return { data, isDataLoading };
};
