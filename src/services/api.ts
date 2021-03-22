import axios from 'axios';

const baseURL = 'urlHaciaLaApi';

export const baseAPI = axios.create({
  baseURL: `${baseURL}/`
});
