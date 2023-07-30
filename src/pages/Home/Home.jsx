import ScrollToTopButton from '../../components/ScrollTopButton';
import PeopleContainer from '../../components/people/PeopleContainer/PeopleContainer';
import ContainerPlanets from '../../components/planets/ContainerPlanets/ContainerPlanets';
import ContainerVehicles from '../../components/vehicles/ContainerVehicles/ContainerVehicles';
import { CustomHomeHeader } from './components/HomeHeader';

const Home = () => {
  return (
    <>
      <CustomHomeHeader />
      <main style={{ minHeight: '75vh' }}>
        <PeopleContainer titleSection="Characters" />
        <ContainerPlanets titleSection="Planets" />
        <ContainerVehicles titleSection="Starships" />
      </main>
      <ScrollToTopButton />
    </>
  );
};
export default Home;
