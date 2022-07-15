import axios from 'axios';
import authToken from '../utils/authToken';

const token = authToken.getToken();

const baseUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_GWIZA_GW_URL
  : process.env.REACT_APP_GWIZA_GW_DEV_URL;

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 60,
  responseType: 'json',
  headers: {
    'Authorization': `Bearer ${token} `,
  },
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;
instance.Cancel = axios.Cancel;

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

const successResponse = (response) => response.data;

const failResponse = (error) => Promise.reject(error);

const Request = (options) => instance(options).then(successResponse).catch(failResponse);

export default Request;
