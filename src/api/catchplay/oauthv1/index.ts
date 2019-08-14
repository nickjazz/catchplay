import { proxy, domainMain, switchToTest } from '@/api/catchplay/handler';
import { DOMAIN } from '../config'
import { CodeObj } from '@/code';
// import { CodeObj } from '@/code';
// import { proxy } from './handler';
// import * as Msg from './model';
import {
  OauthTokenReq,
  OauthTokenRes,
  OauthCheckTokenReq,
  OauthCheckTokenRes
} from './model';


/********** default **********/
/* POST
​/oauth​/token
OAuth2 token endpoint */

export const OauthToken = (_params: OauthTokenReq) => {
  let url = `${DOMAIN.api.oauthv1}/oauth/token`
  return proxy.post(
    url,
    {
      data: {
        grant_type: _params.grant_type,
        username: _params.username,
        password: _params.password,

        access_token: _params.access_token,
        device_id: _params.device_id,
        cell_phone: _params.cell_phone,

        device_code: _params.device_code,
        indihome_number: _params.indihome_number,
        home_number: _params.home_number,

        passsession_idword: _params.session_id,
        user_id: _params.user_id,
        refresh_token: _params.refresh_token
      },
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as OauthTokenRes); // as ArticleGetRes
}

/* POST
​/oauth​/check_token
Check the given access token. */

export const OauthCheckToken = (_params: OauthCheckTokenReq) => {
  let url = `${DOMAIN.api.oauthv1}/oauth/check_token`;
  return proxy.post(
    url,
    {
      data: {
        token: _params.token
      },
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as OauthCheckTokenRes);
}