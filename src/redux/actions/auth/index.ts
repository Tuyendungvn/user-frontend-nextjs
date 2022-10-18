import * as types from "@redux/types/auth";

import {
  IAccount,
  ICreateUserInput,
  IGetToken,
  ILoginInput,
  IRegisterOtpVoice,
  IResetPasswordOtpVoice,
  ISendOtpVoice,
  IUpdateAccount,
  IVerifyOtpResetPassword,
  IVerifyOtpVoice,
} from "@common/typings";

export const getToken = (payload: IGetToken) => ({
  type: types.GET_TOKEN,
  payload,
});

export const getTokenSuccess = <T>(payload: T) => ({
  type: types.GET_TOKEN_SUCCESS,
  payload,
});

export const login = (payload: ILoginInput) => ({
  type: types.LOGIN,
  payload,
});

export const loginSuccess = <T>(payload: T) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const registerOtpVoice = (payload: IRegisterOtpVoice) => ({
  type: types.REGISTER_OTP_VOICE,
  payload,
});

export const sendOtpVoice = (payload: ISendOtpVoice) => ({
  type: types.SEND_OTP_VOICE,
  payload,
});

export const verifyOtpVoice = (payload: IVerifyOtpVoice) => ({
  type: types.VERIFY_OTP_VOICE,
  payload,
});

export const verifyOtpResetPassword = (payload: IVerifyOtpResetPassword) => ({
  type: types.VERIFY_OTP_RESET_PASSWORD,
  payload,
});

export const resetPasswordOtpVoice = (payload: IResetPasswordOtpVoice) => ({
  type: types.RESET_PASSWORD_OTP_VOICE,
  payload,
});

export const removeCurrentUser = () => ({
  type: types.REMOVE_CURRENT_USER,
});

export const refreshToken = () => ({
  type: types.REFRESH_TOKEN,
});

export const refreshTokenSuccess = <T>(payload: T) => ({
  type: types.REFRESH_TOKEN_SUCCESS,
  payload,
});

export const createCandidate = (payload: ICreateUserInput) => ({
  type: types.CREATE_CANDIDATE,
  payload,
});

export const getCurrentUser = (payload: IAccount) => ({
  type: types.GET_CURRENT_USER,
  payload,
});

export const updateUserEmailPassword = (payload: IUpdateAccount) => ({
  type: types.UPDATE_ACCOUNT,
  payload,
});

export const setIsAuth = (payload: boolean) => ({
  type: types.SET_IS_AUTH,
  payload,
});

export const setAccountInfo = (payload: IAccount) => ({
  type: types.SET_ACCOUNT_INFO,
  payload,
});
