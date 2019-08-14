// import { isWx, isAlipay } from '@/api/config';
/**
 * 加载 Script 资源
 */
export const LoadScript = (
  url: string,
  attr: {
    [index: string]: string;
  } = {
    type: 'text/javascript',
  },
) => {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');

    scriptElement.addEventListener('load', e => {
      document.body.removeChild(scriptElement);
      resolve(e);
    }, false);

    scriptElement.addEventListener('error', e => {
      document.body.removeChild(scriptElement);
      reject(e);
    }, false);

    if (attr) {
      for (const val of Object.keys(attr)) {
        scriptElement.setAttribute(val, attr[val]);
      }
    }

    scriptElement.src = url;
    document.body.appendChild(scriptElement);
  });
};

/**
 * 等待微信支付宝SDK加载完毕
 */
export const JsBridgeReady = () => {
  // return new Promise(resolve => {
  //   if (isAlipay) {
  //     if (typeof window.AlipayJSBridge !== 'undefined') return resolve();
  //     return document.addEventListener('AlipayJSBridgeReady', resolve, false);
  //   }

  //   if (isWx) {
  //     if (typeof window.WeixinJSBridge !== 'undefined') return resolve();
  //     return document.addEventListener('WeixinJSBridgeReady', resolve, false);
  //   }

  //   resolve();
  // });
};
