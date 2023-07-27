import List from '../../List/List';
import { useDataList } from '../../List/hooks/useDataList';
import Spinner from '../../Spinner/Spinner';
import { PeopleCategoriesServices } from '../services/people.service';

const PeopleContainer = () => {
  const { isDataLoading, list, setPage, page, error } = useDataList({ service: PeopleCategoriesServices.getPeople, initialPage: 1 });

  if (isDataLoading) return <Spinner />;
  if (error) return <p>Ha ocurrido un error, intente de nuevo más tarde o contacte a soporte.</p>;

  return <List data={list} setPage={setPage} page={page} />;
};

export default PeopleContainer;
