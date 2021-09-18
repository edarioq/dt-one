import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: '/api',
  auth: {
    username: process.env.VUE_APP_API_KEY,
    password: process.env.VUE_APP_API_SECRET,
  },
});

export default api;
