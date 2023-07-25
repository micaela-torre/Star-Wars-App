import axios from 'axios';

export const callApi = async ({ endpoint, method = 'get', params }) => {
  let api = `https://swapi.dev/api/${endpoint}`;
  if (/https|http?/.test(endpoint)) api = endpoint;

  let response;

  try {
    response = await axios({
      method: method,
      url: api,
      data: params,
    });
  } catch (error) {
    throw error;
  }

  return { ...response };
};
