import { useDataList } from '../../List/hooks/useDataList';
import Paginator from '../../Paginator/Paginator';
import { PeopleCategoriesServices } from '../services/people.service';
import List from '../../List/List';

const PeopleContainer = ({ titleSection, initialPage = 1, amountToShow }) => {
  const { isDataLoading, list, setPage, page, error, handleCardCountChange, count } = useDataList({
    service: PeopleCategoriesServices.getPeople,
    initialPage,
  });

  return (
    <List titleSection={titleSection} data={list} isDataLoading={isDataLoading} error={error}>
      {list?.length > 0 && (
        <Paginator
          amountToShow={amountToShow}
          count={count}
          setPage={setPage}
          page={page}
          initialPage={initialPage}
          onHandlerChangePagination={handleCardCountChange}
        />
      )}
    </List>
  );
};

export default PeopleContainer;
