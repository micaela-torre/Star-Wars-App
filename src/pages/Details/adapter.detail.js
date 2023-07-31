import { REGEX_GET_SECTION_AND_ID, REGEX_IS_URL } from './regex';

const getSectionAndId = value => {
  const matches = value?.match(REGEX_GET_SECTION_AND_ID);
  if (!matches) return null;
  const [, section, id] = matches;
  const label = section?.endsWith('s') ? section?.slice(0, -1) : section || '';
  return { label, section, id: parseInt(id) };
};

const adaptedArrayWithUrl = (data, key, cleanKey) => {
  const info = data[key];
  let newResults = {};
  const isUrl = info.every(item => REGEX_IS_URL.test(item));

  if (!isUrl || info.length === 0) {
    return (newResults = { ...newResults, label: cleanKey, value: 'N/A' });
  }
  return (newResults = { ...newResults, label: cleanKey, data: info.map(url => getSectionAndId(url)) });
};

const adaptedString = (data, key, cleanKey) => {
  let newResults = {};
  const value = data[key];
  if (REGEX_IS_URL.test(value)) return (newResults = { ...newResults, label: cleanKey, ...getSectionAndId(value) });
  return (newResults = { ...newResults, label: cleanKey, value });
};

const adaptApiInformation = data => {
  const result = [];

  for (const key in data) {
    const cleanKey = key.replace('_', ' ');
    if (typeof data[key] === 'string') result.push(adaptedString(data, key, cleanKey));
    if (Array.isArray(data[key])) result.push(adaptedArrayWithUrl(data, key, cleanKey));
  }

  return result;
};

export default adaptApiInformation;
