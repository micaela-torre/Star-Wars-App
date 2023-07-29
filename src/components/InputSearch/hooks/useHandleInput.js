import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../models/routes';

export const useHandleInput = ({ handleChangeSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(() => Object.fromEntries(new URLSearchParams(location.search))?.search?.replace('=', ''), [location.search]);
  const [value, setvalue] = useState(searchParams || '');

  const navigateToList = () => {
    navigate(`${PublicRoutes.HOME}?${new URLSearchParams({ search: value.replace('=', '') }).toString()}`);
  };

  const handleChange = e => {
    const { value } = e.target;
    setvalue(value);
    if (handleChangeSearch) handleChangeSearch(e);
  };

  const handleSubmit = () => {
    if (value.trim() && !!value) navigateToList();
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && value.trim()) navigateToList();
  };

  return { handleChange, handleSubmit, handleKeyPress, value };
};
