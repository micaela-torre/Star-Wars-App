import { callApi } from '../../../services/utilServices';

export const VehicleCategoriesServices = (callService => {
  const getVehicle = ({ data, signal = null }) => {
    return callService({
      endpoint: 'vehicles',
      params: data,
      signal,
    });
  };

  return { getVehicle };
})(callApi);
