import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useHandleInput = ({ handleChangeSearch, handleSubmitSearch }) => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const searchParams = useMemo(() => Object.fromEntries(new URLSearchParams(location.search))?.search?.replace('=', ''), [location.search]);
  const [value, setvalue] = useState('');

  const navigateToList = () => {
    // if (handleSubmitSearch) return handleSubmitSearch();
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

  // useEffect(() => {
  //   setvalue(searchParams || '');
  // }, [searchParams]);

  return { handleChange, handleSubmit, handleKeyPress, value };
};
