import { useEffect } from 'react';
import { useState } from 'react';
import { DetailsServices } from '../services/details.service';
import { transformKey } from '../../../utils/functions';

export const useDetailsInfo = ({ endpoint }) => {
  const [data, setData] = useState();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsDataLoading(true);
        const res = await DetailsServices.getDetails(endpoint);
        const { url, created, edited, ...cleanData } = res?.data || {};

        const transformedData = Object.entries(cleanData)
          .filter(([key, value]) => {
            if (Array.isArray(value)) {
              return value.length > 0;
            }
            return typeof value === 'string' && value.trim() !== '';
          })
          .map(([key, value]) => {
            return transformKey(key, value);
          });

        setData(transformedData);
      } catch (e) {
        console.log(e);
      } finally {
        setIsDataLoading(false);
      }
    };
    getDetails();
  }, [endpoint]);

  return { data, isDataLoading };
};
