import { PLANETS_IMAGES } from '../../../constants/planets.images';
import List from '../../List/List';
import { useDataList } from '../../List/hooks/useDataList';
import Paginator from '../../Paginator/Paginator';
import { PlanetCategoriesServices } from '../services/planet.service';

const ContainerPlanets = ({ titleSection, initialPage = 1, amountToShow, showPagination }) => {
  const { isDataLoading, list, setPage, page, error, handleCardCountChange, count } = useDataList({
    service: PlanetCategoriesServices.getPlanets,
    initialPage,
  });

  return (
    <List titleSection={titleSection} data={list} isDataLoading={isDataLoading} photoContainer={PLANETS_IMAGES} error={error}>
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

export default ContainerPlanets;
