import { callApi } from '../../../services/utilServices';

export const VehicleCategoriesServices = (callService => {
  const getVehicle = () => {
    return callService({
      endpoint: 'vehicles',
    });
  };

  return { getVehicle };
})(callApi);
