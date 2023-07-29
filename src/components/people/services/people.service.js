import { callApi } from '../../../services/utilServices';

export const PeopleCategoriesServices = (callService => {
  const getPeople = ({ data, signal = null }) => {
    return callService({ endpoint: 'people', params: data, signal });
  };

  return { getPeople };
})(callApi);
