import { callApi } from '../../../services/utilServices';

export const VehicleCategoriesServices = (callService => {
  const getVehicle = ({ data, signal = null }) => {
    return callService({
      endpoint: 'starships',
      params: data,
      signal,
    });
  };

  return { getVehicle };
})(callApi);
