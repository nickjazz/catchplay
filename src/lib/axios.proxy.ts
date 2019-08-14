import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Code, { CodeObj } from '@/lib/code';

const axiosConf = {
  // 统一的请求配置
  options: {
    timeout: 60000,
    headers: {},
  },
  // 请求前处理
  beforeRequest (config: AxiosRequestConfig) {
    return config;
  },
  // 请求后处理
  afterResponse (response: AxiosResponse) {
    return response;
  },

  // 为了将所有结果统一处理，http请求不抛出异常，只用Code返回异常状态。
  catchError (error: any) {
    let revert = 0;
    if (error.response) {
      // 服务器有响应。
      revert = error.response.status;
    } else if (error.request) {
      // 请求已经发送，但是服务端无响应
      revert = Code.REJECT;
    } else {
      // 一些异常原因导致请求出错
      revert = Code.ERROR;
    }
    if (process.env.NODE_ENV === 'development') {
      // debug(error.message);
      revert = error.message;
    }
    return Promise.resolve({ data: new CodeObj(revert) });
  },
}
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

function EsgoProxy (baseURL: string) {
  const proxy = axios.create(Object.assign({ baseURL }, axiosConf.options));
  proxy.interceptors.request.use(axiosConf.beforeRequest, axiosConf.catchError); // req处理
  proxy.interceptors.response.use(axiosConf.afterResponse, axiosConf.catchError); // res处理
  return proxy;
}
export default EsgoProxy;
// let proxy = axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//   }
// })
// .then(function (response: any) {
//   console.log(response);
// })
// .catch(function (error: any) {
//   console.log(error);
// });