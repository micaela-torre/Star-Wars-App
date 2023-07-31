import { useParams } from 'react-router-dom';
import { useDetailsInfo } from './hooks/useDetailsInfo';
import CardDetails from './components/CardDetails/CardDetails';
import { CustomDetailHeader } from './components/DetailHeader';
import { IMAGE_LIST } from '../../constants';
import { useSEOHeadData } from '../../hooks/useSEOHeadData';

const Details = () => {
  const { section, id, name } = useParams();
  const endpoint = `${section}/${id}`;
  const { data, isDataLoading } = useDetailsInfo({ endpoint });
  useSEOHeadData({ title: isDataLoading ? 'Loading..' : name || 'Star Wars' });

  return (
    <>
      <CustomDetailHeader />
      <CardDetails data={data} photo={IMAGE_LIST[name || data?.name]} isDataLoading={isDataLoading} />
    </>
  );
};

export default Details;
