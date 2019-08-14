// import AxiosProxy from '@/lib/axios.proxy';
// import { DOMAIN } from '../config'
// console.log('DOMAIN', DOMAIN)
// export const proxy = AxiosProxy(DOMAIN.oauthv1);
import AxiosProxy from '@/lib/axios.proxy';
import { CodeObj } from '@/lib/code';

export const proxy = AxiosProxy(`http://apps.store.zeasn.com/`);
export const proxyPost = function <T, R>(url: string) {
  return function (data: T): Promise<CodeObj<R>> {
    return proxy.post(url, data).then((res) => res.data as CodeObj<R>);
  };
};

export const domainMain: string = 'http://apps.store.zeasn.com/'
export const switchToTest: boolean = false