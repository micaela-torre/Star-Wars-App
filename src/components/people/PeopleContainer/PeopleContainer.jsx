import { useDataList } from '../../List/hooks/useDataList';
import Paginator from '../../Paginator/Paginator';
import { PeopleCategoriesServices } from '../services/people.service';
import List from '../../List/List';
import CHARACTERS_IMAGES from '../../../constants/people.images';

const PeopleContainer = ({ titleSection, initialPage = 1, amountToShow, showPagination }) => {
  const { isDataLoading, list, setPage, page, error, handleCardCountChange, count } = useDataList({
    service: PeopleCategoriesServices.getPeople,
    initialPage,
  });

  return (
    <List titleSection={titleSection} data={list} isDataLoading={isDataLoading} photoContainer={CHARACTERS_IMAGES} error={error}>
      <Paginator
        amountToShow={amountToShow}
        count={count}
        setPage={setPage}
        page={page}
        initialPage={initialPage}
        onHandlerChangePagination={handleCardCountChange}
        showPagination={showPagination}
      />
    </List>
  );
};

export default PeopleContainer;
