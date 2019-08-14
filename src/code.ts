// import { DOMAIN } from '@/config';
// import tool from '@/lib/tool';

// 声明window变量
declare global {
  interface Window {
    mk_globalErrorCode: any;
  }
}

/**
 * 异常配置
 */
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
  INIT_BRAND = 930120,  // 初始化会员品牌配置
}

export default Code;

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
// export const CodeLoadReady = async () => {
//   await tool.loadScript(`${DOMAIN.configscenter}/errcode.js`);
//   if (typeof window.mk_globalErrorCode === 'object') {
//     Object.assign(ErrorConf, window.mk_globalErrorCode);
//   }
//   return ErrorConf;
// };
// (async function () {
//   await CodeLoadReady();
//   window.mk_globalErrorCode = ErrorConf;
// }());

export interface CodeParams<T> {
  Code?: number;
  Data: T;
  Msg?: string;
  Ts?: number;
}
export class CodeObj<T> {
  public Code: number;
  public Msg: string;
  public Data: null | T;
  public Ts: number;

  constructor (params: number | CodeParams<T>) {
    if (typeof params === 'number') {
      this.Code = params;
      this.Msg = '';
      this.Data = null;
      this.Ts = Date.now();
      return;
    }

    // 避免 Code 为 0 时，丢失 Code
    if (params.Code === 0 || params.Code) {
      this.Code = params.Code;
    } else {
      this.Code = Code.SUCCESS;
    }

    this.Data = params.Data;

    if ('Msg' in params) {
      this.Msg = params.Msg || ''; // (|| '') 为了避免 tslint 提示错误。
    } else {
      this.Msg = '';
    }

    if ('Ts' in params) {
      this.Ts = params.Ts || 0; // (|| 0) 为了避免 tslint 提示错误。
    } else {
      this.Ts = Date.now();
    }
  }

  toQuery () {
    return {
      Code: String(this.Code),
      Msg: String(this.Msg),
      Ts: String(this.Ts),
    };
  }
}

// 返回一个适用于 query 的实体
export function CodeQueryObj<T> (params: number | CodeParams<T>) {
  return (new CodeObj(params)).toQuery();
}
