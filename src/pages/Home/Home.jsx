import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import ScrollToTopButton from '../../components/ScrollTopButton';
import PeopleContainer from '../../components/people/PeopleContainer/PeopleContainer';
import ContainerPlanets from '../../components/planets/ContainerPlanets/ContainerPlanets';
import ContainerVehicles from '../../components/vehicles/ContainerVehicles/ContainerVehicles';

const Home = () => {
  return (
    <Container>
      <Header />
      <main>
        <PeopleContainer titleSection="Characters" />
        <ContainerPlanets titleSection="Planets" />
        <ContainerVehicles titleSection="Vehicles" />
      </main>
      <footer style={{ width: '100%', textAlign: 'center' }}>
        <small>Copyright © 2023 Star Wars</small>
      </footer>
      <ScrollToTopButton />
    </Container>
  );
};
export default Home;
