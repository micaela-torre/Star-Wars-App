export const formatUrl = url => {
  const newUrl = url?.split('/').filter(segment => segment !== '');
  const section = newUrl[3];
  const id = newUrl[4];
  return { section, id };
};
