import List from '../../List/List';
import { useDataList } from '../../List/hooks/useDataList';
import Paginator from '../../Paginator/Paginator';
import { PlanetCategoriesServices } from '../services/planet.service';

const ContainerPlanets = ({ titleSection, initialPage = 1, amountToShow }) => {
  const { isDataLoading, list, setPage, page, error, handleCardCountChange, count } = useDataList({
    service: PlanetCategoriesServices.getPlanets,
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

export default ContainerPlanets;
