import { IGraphQLResponse, IVerifyOtpInput } from "@common/typings";
import * as services from "@services/auth";
import { call, put } from "redux-saga/effects";
import { setLoading } from "@redux/actions/common";
import { showNotification } from "@components/ToastNotification";

export function* verifyOtpVoice(payload: any) {
  const variables: IVerifyOtpInput = payload.payload;
  yield put(setLoading(true));

  const response: IGraphQLResponse = yield call(
    services.verifyOtpVoice,
    variables,
  );
  yield put(setLoading(false));

  const { verifyOtpVoice: result } = response?.data || {};

  if (result) {
    showNotification({
      type: "success",
      title: "Thông báo",
      message: "Đăng ký thành công !",
    });
    eventManager.fire("verifyOtpSuccess");
  } else {
    showNotification({
      type: "error",
      title: "Thông báo",
      message: response?.error?.message || "Sai số điện thoại hoặc mật khẩu !",
    });
  }
}

export function* verifyOtpResetPassword(payload: any) {
  const variables: IVerifyOtpInput = payload.payload;
  yield put(setLoading(true));

  debugger;

  const response: IGraphQLResponse = yield call(
    services.verifyOtpResetPassword,
    variables,
  );
  yield put(setLoading(false));

  const { verifyOtpResetPassword: result } = response?.data || {};

  if (result) {
    // eventManager.fire("verifyOTPResetPasswordSuccess");
  } else {
    showNotification({
      type: "error",
      title: "Thông báo",
      message: response.errors[0].message,
    });
  }
}
