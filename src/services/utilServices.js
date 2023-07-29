import axios from 'axios';

export const callApi = async ({ endpoint, method = 'get', params, signal }) => {
  let api = `https://swapi.dev/api/${endpoint}`;
  if (/https|http?/.test(endpoint)) api = endpoint;

  let response;

  try {
    response = await axios({
      method: method,
      url: api,
      params,
      signal,
    });
  } catch (error) {
    if (error.name === 'CanceledError') return;
    throw error;
  }

  return { ...response };
};
