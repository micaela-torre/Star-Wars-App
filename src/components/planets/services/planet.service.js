import { callApi } from '../../../services/utilServices';

export const PlanetCategoriesServices = (callService => {
  const getPlanets = () => {
    return callService({
      endpoint: 'planets',
    });
  };

  return { getPlanets };
})(callApi);
