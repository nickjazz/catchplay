/* POST
​/oauth​/token
OAuth2 token endpoint */
/* req */
export class OauthTokenReq {
  grant_type: string = 'password'; //
  username?: string;
  password?: string;
  access_token?: string;
  device_id?: string;
  cell_phone?: string;
  device_code?: string;
  indihome_number?: string;
  home_number?: string;
  session_id?: string;
  user_id?: string;
  refresh_token?: string;
}

/* POST
​/oauth​/token
OAuth2 token endpoint */
/* res */
export interface OauthTokenRes {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  tokenType?: string;
  expires_in?: number;
  scope?: string;
  jti?: string;
}

/* POST
​/oauth​/check_token
Check the given access token. */
/* req */
export class OauthCheckTokenReq {
  token: string = '';
}

/* POST
​/oauth​/check_token
Check the given access token. */
/* res */
export interface OauthCheckTokenRes {
  accountStatus: string;
  accountId: string;
  grant_type: string;
  user_name: string;
  scope: string[];
  iss: string;
  tokenType: string;
  iat: number;
  exp: number;
  authorities: string[];
  client_id: string;
  territory: string;
}