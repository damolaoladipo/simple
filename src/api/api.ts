import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
  
});


apiClient.interceptors.request.use(
  
(config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
},
(error) => {
  return Promise.reject(error);
}

);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
   
    if (error.response?.status === 401) {
      console.error('Unauthorized - Redirecting to login');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const defaultTransformRequest = axios.defaults.transformRequest;
const transformRequestArray =
  Array.isArray(defaultTransformRequest)
    ? defaultTransformRequest
    : defaultTransformRequest
    ? [defaultTransformRequest]
    : [];

apiClient.defaults.transformRequest = [
  (data) => JSON.stringify(data),
  ...transformRequestArray, 
];


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error('Network error. Please check your connection.');
    } else if (error.response.status === 403) {
      console.error('Forbidden: You do not have access.');
    } else if (error.response.status === 404) {
      console.error('Resource not found.');
    }
    return Promise.reject(error);
  }
);


export default apiClient;
