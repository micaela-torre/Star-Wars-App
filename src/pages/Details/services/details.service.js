import { callApi } from '../../../services/utilServices';

export const DetailsServices = (callService => {
  const getDetails = endpoint => {
    return callService({ endpoint });
  };

  return { getDetails };
})(callApi);
