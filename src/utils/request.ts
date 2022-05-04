import axios from 'axios';

const request = axios.create({
  baseURL: '',
});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    console.log(config);
  },
  (error) => {
    Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    console.log(response);
  },
  (error) => {
    Promise.reject(error);
  },

);

export default request;
