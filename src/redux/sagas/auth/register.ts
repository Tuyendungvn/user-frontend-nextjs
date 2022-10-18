import * as services from "@services/auth";
import { call, put } from "redux-saga/effects";
import { setLoading } from "@redux/actions/common";
import { showNotification } from "@components/ToastNotification";
import { IGraphQLResponse, IRegisterOptInput } from "@common/typings";

export function* registerOtpVoice(payload: any) {
  const variables: IRegisterOptInput = payload.payload;
  yield put(setLoading(true));

  const response: IGraphQLResponse = yield call(
    services.registerOtpVoice,
    variables,
  );
  yield put(setLoading(false));

  const { registerOtpVoice: result } = response?.data || {};

  if (!result) {
    showNotification({
      type: "error",
      title: "Thông báo",
      message: "Số điện thoại hoặc email của bạn đã được đăng ký",
    });
  }
}
