export const DOMAIN = {
  // main: `https://www.esgo.com/log.chidaoni.net`,  //  （因为国际版没有部署.net域名）
  api: {
    oauthv1: 'https://uat-accounts.catchplay.com',
    userv1: 'https://uat-api.catchplay.com',
    miscv1: 'https://uat-api.catchplay.com',
    programv2: 'https://hp2-api.uat.catchplay.com'
  }
};
let ua = window.navigator.userAgent.toLowerCase();
export const isWx = ua.toLocaleLowerCase().indexOf('micromessenger') !== -1;
export const isAlipay = ua.toLocaleLowerCase().indexOf('alipayclient') !== -1;