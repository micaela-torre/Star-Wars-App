import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import PeopleContainer from '../../components/people/PeopleContainer/PeopleContainer';

const Home = () => {
  return (
    <Container>
      <Header />
      <div>
        <PeopleContainer titleSection="Characters" />
        {/* <PeopleContainer titleSection="Planets" />
        <PeopleContainer titleSection="Planets" /> */}
      </div>
      <footer style={{ width: '100%', textAlign: 'center' }}>
        <small>Copyright © 2023 Star Wars</small>
      </footer>
    </Container>
  );
};
export default Home;
