// @flow
import axios from 'axios';
import qs from 'qs';

import { apiConfig } from './config';

axios.defaults.baseURL = apiConfig.url;

Object.keys(apiConfig.headers).forEach((item) => {
  axios.defaults.headers.common[item] = apiConfig.headers[item];
});

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: 'repeat' });
};

const get = (path: string, params: ?Object, config: ?Object) => {
  const conf = config || {};
  if (params) {
    conf.params = params;
  }
  return axios.get(path, conf);
};

const post = (path: string, data: mixed, config: ?Object) => {
  const conf = config || {};
  return axios.post(path, data, conf);
};

export default {
  get,
  post,
};
