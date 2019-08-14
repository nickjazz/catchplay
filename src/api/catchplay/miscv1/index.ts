import { proxy, domainMain, switchToTest } from '@/api/catchplay/handler';
import { DOMAIN } from '../config'
import { CodeObj } from '@/code';

import {
  GeoGetReq
} from './model'

/********** geo **********/

/* GET
​/geo
Get geo information. */
export const GeoGet = (_params: GeoGetReq) => {
  let url = `${DOMAIN.api.miscv1}/geo`
  return proxy.get(
    url,
    {
      headers: {
          accept: "application/json"
      }
    }).then((res: any) => res)
}