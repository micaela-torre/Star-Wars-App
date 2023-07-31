import List from '../../List/List';
import { useDataList } from '../../List/hooks/useDataList';
import Paginator from '../../Paginator/Paginator';
import { StarShipsServices } from '../services/starships.services';

const ContainerStarShips = ({ titleSection, initialPage = 1, amountToShow }) => {
  const { isDataLoading, list, setPage, page, error, handleCardCountChange, count } = useDataList({
    service: StarShipsServices.getVehicle,
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

export default ContainerStarShips;
