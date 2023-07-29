import { PLANETS_IMAGES } from '../../../constants/planets.images';
import List from '../../List/List';
import { useDataList } from '../../List/hooks/useDataList';
import Paginator from '../../Paginator/Paginator';
import { PlanetCategoriesServices } from '../services/planet.service';

const ContainerPlanets = ({ titleSection, initialPage = 1, amountToShow, showPagination, numberOfItems = 10 }) => {
  const { isDataLoading, list, setPage, page, error, handleCardCountChange } = useDataList({
    service: PlanetCategoriesServices.getPlanets,
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
      <List titleSection={titleSection} data={list} isDataLoading={isDataLoading} photoContainer={PLANETS_IMAGES} error={error} />
    </Paginator>
  );
};

export default ContainerPlanets;
