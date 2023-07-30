import { useParams } from 'react-router-dom';
import { useDetailsInfo } from './hooks/useDetailsInfo';
import CardDetails from './components/CardDetails/CardDetails';
import { CustomDetailHeader } from './components/DetailHeader';
import { IMAGE_LIST } from '../../constants';

const Details = () => {
  const { section, id, name } = useParams();
  const endpoint = `${section}/${id}`;
  const { data, isDataLoading } = useDetailsInfo({ endpoint });

  return (
    <>
      <CustomDetailHeader />
      <CardDetails data={data} photo={IMAGE_LIST[name]} isDataLoading={isDataLoading} />
    </>
  );
};

export default Details;
