/* POST
​/accounts
Create a user.
/* req*/

/* POST
​/accounts
Create a user. */
/* res*/
export interface AccountsRes {
  accountId: string;
}

/* POST
​/accounts​/activationToken
Send an activation token to the given cellphone number. */
/* req */

/* POST
​/accounts​/forgetPasswordToken
Send an forget password message to the given cellphone number. */
/* req */

/* GET
​/accounts​/type​/{cellPhone}
Check the given cellphone number is used. */
/* req */
export interface AccountsActivationTokenReq {
  cellPhone: string;
}

/* POST
​/accounts​/activationToken
Send an activation token to the given cellphone number. */
/* res */

/* POST
​/accounts​/email​/validationToken​/validate
Validate a verification email. */
/* res */

/* POST
​/accounts​/forgetPassword
Reset the password by the given forget password token. */
/* res */

/* POST
​/accounts​/forgetPasswordToken
Send an forget password message to the given cellphone number. */
/* res */
export interface AccountsActivationTokenRes {
  code: number;
  message: string;
}

/* POST
​/accounts​/activationToken​/validate
Validate the given activation token. */
/* req */
export interface AccountsActivationTokenValidateReq {
  activationToken: string;
  cellPhone: string;
}

/* POST
​/accounts​/activationToken​/validate
Validate the given activation token. */
/* res */

/* POST
​/accounts​/forgetPasswordToken​/validate
Validate the given forget password token. */
/* res */
export interface AccountsActivationTokenValidateRes {
  valid: boolean;
}

/* POST
​/accounts​/email​/validationToken​/validate
Validate a verification email. */
/* req */
export interface AccountsEmailValidationTokenValidateReq {
  email: string;
  validationToken: string;
}
/* res -> AccountsActivationTokenRes */

/* POST
​/accounts​/forgetPassword
Reset the password by the given forget password token. */
/* req */
export interface AccountsForgetPasswordReq {
  cellPhone: string;
  forgetPasswordToken: string;
  newPassword: string;
}
/* res -> AccountsActivationTokenRes */

/* POST
​/accounts​/forgetPasswordToken​/validate
Validate the given forget password token. */
/* req -> AccountsActivationTokenReq */
/* res -> AccountsActivationTokenRes */

/* POST
​/accounts​/forgetPasswordToken​/validate
Validate the given forget password token. */
/* req */
export interface AccountsForgetPasswordTokenValidationReq {
  cellPhone: string;
  forgetPasswordToken: string;
}
/* res -> AccountsActivationTokenValidateRes */

/* GET
​/accounts​/type​/{cellPhone}
Check the given cellphone number is used. */
/* req -> AccountsActivationTokenReq */
/* res */
export interface AccountsTypeCellPhoneRes {
  cellPhone: string;
  type: string;
}

/* GET
​/me
Get current user's profile. */
/* req none*/
/* res */
export interface MeGetRes {
  accountId: string;
  accountStatus: string;
  accountType: string;
  billingAddress: string;
  birthday: string;
  cellPhone: string;
  email: string;
  emailValid: boolean;
  emailBouncedType: string;
  firstName: string;
  lastName: string;
  nickName: string;
  gender: number;
  territory: string;
  createdDate: string;
  firstLogonDate: string;
  lastLogonDate: string;
  vipFlag: boolean;
  newUser: boolean;
  billingId: number;
  remark: string;
}

/* PUT
​/me
Update current user's profile. */
/* req */
export interface MePutReq {
  billingAddress: string;
  birthday: string;
  email: string;
  firstName: string;
  lastName: string;
  nickName: string;
  gender: number;
}
/* res -> AccountsActivationTokenRes */

/* PUT
​/me​/password
Update current user's password. */
/* req */
export interface MePasswordPutReq {
  oldPassword: string;
  newPassword: string;
}
/* res -> AccountsActivationTokenRes */

