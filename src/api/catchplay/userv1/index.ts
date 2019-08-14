import { proxy, domainMain, switchToTest } from '@/api/catchplay/handler';
import { DOMAIN } from '../config'
import { CodeObj } from '@/code';

import {
  AccountsRes,
  AccountsActivationTokenReq,
  AccountsActivationTokenRes,
  AccountsActivationTokenValidateReq,
  AccountsActivationTokenValidateRes,
  AccountsEmailValidationTokenValidateReq,
  // AccountsEmailValidationTokenValidateRes,
  AccountsForgetPasswordReq,
  // AccountsForgetPasswordRes,
  AccountsForgetPasswordTokenValidationReq,
  // AccountsForgetPasswordTokenValidationRes,
  AccountsTypeCellPhoneRes,
  MeGetRes,
  MePutReq,
  MePasswordPutReq
} from './model'
import Code from '@/lib/code';

/********** user **********/
/* POST
​/accounts
Create a user. */
export const Accounts = () => {
  let url = `${DOMAIN.api.userv1}/accounts`
  return proxy.post(
    url,
    {
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as CodeObj<AccountsRes>)
}

/* POST
​/accounts​/activationToken
Send an activation token to the given cellphone number. */
export const AccountsActivationToken = (_params: AccountsActivationTokenReq) => {
  let url = `${DOMAIN.api.userv1}/accounts/activationToken`;
  return proxy.post(
    url,
    {
      data: {},
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res as AccountsActivationTokenRes)
}

/* POST
​/accounts​/activationToken​/validate
Validate the given activation token. */
export const AccountsActivationTokenValidate = (_params: AccountsActivationTokenValidateReq) => {
  let url = `${DOMAIN.api.userv1}/accounts/activationToken/validate`
  return proxy.post(
    url,
    {
      data: {},
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as CodeObj<AccountsActivationTokenValidateRes>)
}

/* POST
​/accounts​/email​/validationToken​/validate
Validate a verification email. */
export const AccountsEmailValidationTokenValidate = (_params: AccountsEmailValidationTokenValidateReq) => {
  let url = `${DOMAIN.api.userv1}/accounts/email/validationToken/validate`
  return proxy.post(
    url,
    {
      data: {},
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res as AccountsActivationTokenRes)
}

/* POST
​/accounts​/forgetPassword
Reset the password by the given forget password token. */
export const AccountsForgetPassword = (_params: AccountsForgetPasswordReq) => {
  let url = `${DOMAIN.api.userv1}/accounts/forgetPassword`
  return proxy.post(
    url,
    {
      data: {},
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res as AccountsActivationTokenRes)
}

/* POST
​/accounts​/forgetPasswordToken
Send an forget password message to the given cellphone number. */
export const AccountsForgetPasswordToken = (_params: AccountsActivationTokenReq) => {
  let url = `${DOMAIN.api.userv1}/accounts/forgetPasswordToken`
  return proxy.post(
    url,
    {
      data: {},
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res as AccountsActivationTokenRes)
}

/* POST
​/accounts​/forgetPasswordToken​/validate
Validate the given forget password token. */
export const AccountsForgetPasswordTokenValidation = (_params: AccountsForgetPasswordTokenValidationReq) => {
  let url = `${DOMAIN.api.userv1}/accounts/forgetPasswordToken/validate`
  return proxy.post(
    url,
    {
      data: {},
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res as AccountsActivationTokenValidateRes)
}

/* GET
​/accounts​/type​/{cellPhone}
Check the given cellphone number is used. */
export const AccountsTypeCellPhone = (_params: AccountsActivationTokenReq) => {
  let url = `${DOMAIN.api.userv1}/accounts/type/${_params.cellPhone}`
  return proxy.get(
    url,
    {
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as AccountsTypeCellPhoneRes)
}

/********** me **********/
/* GET
​/me
Get current user's profile. */
export const MeGet = () => {
  let url = `${DOMAIN.api.userv1}/me`
  return proxy.get(
    url,
    {
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as MeGetRes)
}

/* PUT
​/me
Update current user's profile. */
export const MePut = (_params: MePutReq) => {
  let url = `${DOMAIN.api.userv1}/me`
  return proxy.put(
    url,
    {
      data: {},
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res as AccountsActivationTokenRes)
}

/* PUT
​/me​/password
Update current user's password. */
export const MePasswordPut = (_param: MePasswordPutReq) => {
  let url = `${DOMAIN.api.userv1}/me/password`
  return proxy.put(
    url,
    {
      data: {},
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res as AccountsActivationTokenRes)
}
