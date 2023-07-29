import { VEHICLES_IMAGES } from '../../../constants/vehicles.images';
import List from '../../List/List';
import { useDataList } from '../../List/hooks/useDataList';
import Paginator from '../../Paginator/Paginator';
import { VehicleCategoriesServices } from '../services/vehicles.services';

const ContainerVehicles = ({ titleSection, initialPage = 1, amountToShow, showPagination }) => {
  const { isDataLoading, list, setPage, page, error, handleCardCountChange, count } = useDataList({
    service: VehicleCategoriesServices.getVehicle,
    initialPage,
  });

  return (
    <List titleSection={titleSection} data={list} isDataLoading={isDataLoading} photoContainer={VEHICLES_IMAGES} error={error}>
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

export default ContainerVehicles;
