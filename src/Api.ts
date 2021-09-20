import axios, { AxiosInstance } from 'axios';

console.debug(process.env.VUE_APP_API_URL);
console.debug(process.env.VUE_APP_API_KEY);
console.debug(process.env.VUE_APP_API_SECRET);

const api: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  auth: {
    username: process.env.VUE_APP_API_KEY,
    password: process.env.VUE_APP_API_SECRET,
  },
});

export default api;
