import { call, put } from "redux-saga/effects";
import * as services from "@services/auth";
import { setLoading, actionSuccess } from "@redux/actions/common";
import { showNotification } from "@components/ToastNotification";
import { IGraphQLResponse } from "@common/typings";

export function* resetPasswordOtpVoice(payload: any) {
  const variables = payload.payload;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.resetPasswordOtpVoice,
    variables,
  );
  yield put(setLoading(false));

  const { resetPasswordOtpVoice: result } = response?.data || {};
  if (result) {
    showNotification({
      type: "success",
      title: "Thông báo",
      message: "Thay đổi mật khẩu thành công !",
    });
    eventManager.fire("resetPasswordSuccess");
  } else {
    showNotification({
      type: "error",
      title: "Thông báo",
      message: response.errors[0].message,
    });
  }
}
