export const formatUrl = url => {
  const newUrl = url?.split('/').filter(segment => segment !== '');
  const section = newUrl[3];
  const id = newUrl[4];
  return { section, id };
};

export const transformKey = (key, value) => {
  if (typeof key === 'string' && value !== undefined) {
    return {
      key: key.replace(/[-_]/g, ' ').replace(/^\w/, c => c.toUpperCase()),
      value: Array.isArray(value) ? value.join(', ') : value,
    };
  }
  return { key: '', value: '' };
};
