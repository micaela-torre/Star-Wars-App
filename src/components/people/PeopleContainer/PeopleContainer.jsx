import CHARACTERS_IMAGES from '../../../constants/people.images';
import List from '../../List/List';
import { useDataList } from '../../List/hooks/useDataList';
import Spinner from '../../Spinner/Spinner';
import { PeopleCategoriesServices } from '../services/people.service';

const PeopleContainer = ({ titleSection }) => {
  const { isDataLoading, list, setPage, page, error } = useDataList({ service: PeopleCategoriesServices.getPeople, initialPage: 1 });

  if (isDataLoading)
    return (
      <div style={{ height: '250px', textAlign: 'center' }}>
        <Spinner />
      </div>
    );
  if (error) return <p>Ha ocurrido un error, intente de nuevo más tarde o contacte a soporte.</p>;

  return <List titleSection={titleSection} data={list} photoContainer={CHARACTERS_IMAGES} setPage={setPage} page={page} />;
};

export default PeopleContainer;
