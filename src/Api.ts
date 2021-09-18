import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://preprod-dvs-api.dtone.com",
  headers: {
    "Content-type": "application/json",
  },
  auth: {
    username: process.env.API_KEY,
    password: process.env.API_SECRET,
  },
});

export default api;
