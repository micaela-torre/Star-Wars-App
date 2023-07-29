import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../models/routes';
import { useEffect } from 'react';

export const useHandleInput = ({ handleChangeSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(() => Object.fromEntries(new URLSearchParams(location.search))?.search?.replace('=', ''), [location.search]);
  const [value, setValue] = useState(searchParams || '');

  const clearValue = () => navigate(PublicRoutes.HOME);

  const navigateToList = () => navigate(`${PublicRoutes.HOME}?${new URLSearchParams({ search: value.replace('=', '') }).toString()}`);

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
    if (handleChangeSearch) handleChangeSearch(e);
  };

  const handleSubmit = () => {
    if (value.trim() && !!value) navigateToList();
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && value.trim()) navigateToList();
  };
  useEffect(() => {
    setValue(searchParams || '');
  }, [searchParams]);
  return { handleChange, handleSubmit, handleKeyPress, value, searchParams, clearValue };
};
