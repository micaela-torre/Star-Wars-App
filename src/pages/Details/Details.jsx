import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useDetailsInfo } from './hooks/useDetailsInfo';
import CardDetails from './components/CardDetails/CardDetails';
import CHARACTERS_IMAGES from '../../constants/people.images';
import { PLANETS_IMAGES } from '../../constants/planets.images';
import { VEHICLES_IMAGES } from '../../constants/vehicles.images';

const Details = () => {
  const { section, id, name } = useParams();
  const endpoint = `${section}/${id}`;
  const { data, isDataLoading } = useDetailsInfo({ endpoint });
  const photo = CHARACTERS_IMAGES[name] || VEHICLES_IMAGES[name] || PLANETS_IMAGES[name];

  console.log(photo);

  return (
    <Container>
      <Header />
      <CardDetails data={data} photo={photo} isDataLoading={isDataLoading} />
    </Container>
  );
};

export default Details;
