import URI from 'urijs';
// import { Md5 } from 'md5-typescript';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
// import state from '@/store/state';
// import { NGINX_PROXY } from '@/config';
// const reqHeaps: { [key: string]: any; } = {};
export default class Interface {
  static InterfaceBefore (config: AxiosRequestConfig) {
    const url = config.url || '';
    // const queryMap = URI.parseQuery(URI.parse(url).query);
    const newUrl = URI(url);
    // url必须带有 region = Gid,Bid,Rid
    newUrl.setQuery({
      // region: CLIENT_IDS.join(','),
    });
    const Ts = Math.ceil(Date.now());
    // const AppId = config.headers.AppId || SIGN_DATA.AppId;
    // 获取当前的所有参数，url+body
    // const params = Object.assign({}, URI.parseQuery(newUrl.query()), {
    //   Ts,
    //   AppId,
    // });
    const params = Object.assign({}, {
      Ts,
      // AppId,
    });
    const Accept = "application/json"
    // const Sign = Interface.SignHelper(params);
    config.headers = Object.assign({ Ts, Accept }, config.headers || {});
    config.url = newUrl.resource();
    // const reqHeap = reqHeaps[config.url];
    // reqHeaps[config.url] = {
    //   config,
    //   retryTimes: reqHeap ? parseInt(reqHeap.retryTimes, 0) + 1 : 1,
    // };
    return config;
  }

  // static InterfaceAfter (config: AxiosResponse<any>) {
  //   const conf = config.config as any;
  //   const url = conf.url.replace(`/${NGINX_PROXY}/_/user2`, '');
  //   if (config.data.Code === 200) {
  //     delete reqHeaps[url];
  //   } else if (reqHeaps[url] && reqHeaps && reqHeaps[url].retryTimes >= 5) {
  //     config.data.Code = 400;
  //     config.data.Msg = '系统异常，请稍后再试';
  //   }
  //   return config;
  // }

  // static SignHelper (data: any): string {
  //   // 参数按key排序， key=value&拼接后,md5加密
  //   let arrPara: string[] = [];
  //   Object.keys(data).sort().forEach((key: any) => {
  //     const value = data[key];
  //     arrPara.push(`${key}=${value}`);
  //   });
  //   arrPara.push(SIGN_DATA.SecureKey);
  //   // md5加密
  //   return Md5.init(arrPara.join('&'));
  // }
}