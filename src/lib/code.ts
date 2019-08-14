import { LoadScript } from '@/lib/base';
// import { DOMAIN } from '@/api/config';

// 声明window变量
declare global {
  interface Window {
    mk_globalErrorCode: any;
  }
}

enum Code {
  ERROR = 1, // 异常
  SUCCESS = 200, // 成功。
  SESSION_ERROR = -100001, // session异常
  UNDEFINED_URL = 404, // 404，未定义的url
  TIME_OUT = 408,
  REJECT = 500,
  GATEWAY_REJECT = 504,
  QR_NO_WATCH_EVENT = 810000, // 客户端未监听事件时，APP调用事件
  ROUTE_CHANGE = 830000, // 客户端路由变化导致的异常，比如弹窗被迫关闭。
  ERROR_CODE_BASE = 2100000, // 用户中心loginnext返回特殊状态码（尚未登录）
  // 100020获取错误。没找到会员信息
  // 100600米客顾客调用失败。没找到顾客信息
  // 100100米客会员产品权限未开
}
/**
 * 常用错误
 * 前端错误
 */
export const ErrorConf: {
  [index: number]: string;
} = {
  [Code.UNDEFINED_URL]: '您所访问的页面不存在',
};

/**
 * 等待配置代码的加载
 */
export const CodeLoadReady = async () => {
  // await LoadScript(`${DOMAIN.configscenter}/errcode.js`);
  // if (typeof window.mk_globalErrorCode === 'object') {
  //   Object.assign(ErrorConf, window.mk_globalErrorCode);
  // }
  // return ErrorConf;
};

CodeLoadReady();

export default Code;

export interface CodeParams<T> {
  Code?: number;
  Data: T;
  Msg?: string;
  Ts?: number;
}
export class CodeObj<T> {
  public code: number;
  public message: string;
  public Data: null | T;
  public serverTime: number;

  constructor (params: number | CodeParams<T>) {
    if (typeof params === 'number') {
      this.code = params;
      this.message = '';
      this.Data = null;
      this.serverTime = Date.now();
      return;
    }

    // 避免 Code 为 0 时，丢失 Code
    if (params.Code === 0 || params.Code) {
      this.code = params.Code;
    } else {
      this.code = Code.SUCCESS;
    }

    this.Data = params.Data;

    if ('Msg' in params) {
      this.message = params.Msg || ''; // (|| '') 为了避免 tslint 提示错误。
    } else {
      this.message = '';
    }

    if ('Ts' in params) {
      this.serverTime = params.Ts || 0; // (|| 0) 为了避免 tslint 提示错误。
    } else {
      this.serverTime = Date.now();
    }
  }

  toQuery () {
    return {
      Code: String(this.code),
      Msg: String(this.message),
      Ts: String(this.serverTime),
    };
  }
}

// 返回一个适用于 query 的实体
export function CodeQueryObj<T> (params: number | CodeParams<T>) {
  return (new CodeObj(params)).toQuery();
}
