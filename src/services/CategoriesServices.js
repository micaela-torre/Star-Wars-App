import { callApi } from './utilServices';

export const CategoriesServices = (callService => {
  const getPlanets = () => {
    return callService({
      endpoint: 'planets',
    });
  };

  const getVehicles = () => {
    return callService({
      endpoint: 'vehicle',
    });
  };

  return { getPlanets, getVehicles };
})(callApi);
