export const formatDataPeople = response => {
  response?.map(({ name, gender, films, url, homeworld, vehicles }) => ({ name, gender, films, url, homeworld, vehicles }));
};
