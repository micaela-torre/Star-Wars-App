import { callApi } from '../../../services/utilServices';

export const PeopleCategoriesServices = (callService => {
  const getPeople = () => {
    return callService({
      endpoint: 'people',
    });
  };

  return { getPeople };
})(callApi);
