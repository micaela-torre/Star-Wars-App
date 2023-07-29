import { useDataList } from '../../List/hooks/useDataList';
import Paginator from '../../Paginator/Paginator';
import { PeopleCategoriesServices } from '../services/people.service';
import List from '../../List/List';

const PeopleContainer = ({ titleSection, initialPage = 1, amountToShow, showPagination, numberOfItems = 10 }) => {
  const { isDataLoading, list, setPage, page, error, handleCardCountChange } = useDataList({
    service: PeopleCategoriesServices.getPeople,
    initialPage,
    numberOfItems,
  });

  return (
    <Paginator
      amountToShow={amountToShow}
      numberOfItems={numberOfItems}
      setPage={setPage}
      page={page}
      initialPage={initialPage}
      showPagination={showPagination}
      onHandlerChangePagination={handleCardCountChange}
    >
      <List titleSection={titleSection} data={list} isDataLoading={isDataLoading} error={error} />
    </Paginator>
  );
};

export default PeopleContainer;
