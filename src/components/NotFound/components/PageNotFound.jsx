import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
// import PageNotFoundImage from '../../../assets/compu.svg';
import { PublicRoutes } from '../../../models/routes';

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', paddingBottom: '16px' }}>
      <h3>Parece que esta página no existe</h3>
      <div style={{ margin: '25px' }}>{/* <img src={PageNotFoundImage} alt="página no encontrada" /> */}</div>
      <Button onClick={() => navigate(PublicRoutes.HOME)}>Ir a la página principal</Button>
    </div>
  );
};
