import { callApi } from '../../../services/utilServices';

export const PlanetCategoriesServices = (callService => {
  const getPlanets = ({ data, signal = null }) => {
    return callService({
      endpoint: 'planets',
      params: data,
      signal,
    });
  };

  return { getPlanets };
})(callApi);
