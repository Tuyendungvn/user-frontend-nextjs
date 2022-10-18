import { all, takeLatest } from "redux-saga/effects";
import * as types from "@redux/types/auth";
import { getToken, refreshToken } from "./get";
import { login } from "./login";
import { createCandidate } from "./create";
import { resetPasswordOtpVoice } from "./reset";
import { updateUserEmailPassword } from "./update";
import { registerOtpVoice } from "./register";
import { verifyOtpVoice, verifyOtpResetPassword } from "./verifyOtp";
import { sendOtpVoice } from "./sendOtp";

export default function* authSaga() {
  yield all([
    takeLatest(types.GET_TOKEN, getToken),
    takeLatest(types.REFRESH_TOKEN, refreshToken),
    takeLatest(types.LOGIN, login),
    takeLatest(types.CREATE_CANDIDATE, createCandidate),
    takeLatest(types.UPDATE_ACCOUNT, updateUserEmailPassword),

    takeLatest(types.REGISTER_OTP_VOICE, registerOtpVoice),
    takeLatest(types.SEND_OTP_VOICE, sendOtpVoice),
    takeLatest(types.VERIFY_OTP_VOICE, verifyOtpVoice),
    takeLatest(types.VERIFY_OTP_RESET_PASSWORD, verifyOtpResetPassword),
    takeLatest(types.RESET_PASSWORD_OTP_VOICE, resetPasswordOtpVoice),
  ]);
}
