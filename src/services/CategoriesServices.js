import { callApi } from './utilServices';

export const CategoriesServices = (callService => {
  const getPeople = () => {
    return callService({
      endpoint: 'people',
    });
  };

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

  return { getPeople, getPlanets, getVehicles };
})(callApi);
