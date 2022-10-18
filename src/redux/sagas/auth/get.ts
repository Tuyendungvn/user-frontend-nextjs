import { call, put } from "redux-saga/effects";

import * as services from "@services/auth";
import { IGraphQLResponse } from "@common/typings";
import { showNotification } from "@components/ToastNotification";
import { getTokenSuccess, refreshTokenSuccess } from "@redux/actions/auth";

export function* getToken(payload: any) {
  const variables = payload.payload;
  const response: IGraphQLResponse = yield call(
    services.getAccessToken,
    variables,
  );
  const result = response?.data;

  const message = "Số điện thoại hoặc email của bạn đã được đăng ký";
  if (result) {
    showNotification({
      type: "success",
      title: "Thông báo",
      message: "Đăng nhập thành công!",
    });
    yield put(getTokenSuccess(result));
  } else {
    showNotification({
      type: "error",
      message: message,
      title: "Thông báo",
    });
  }
}

export function* refreshToken() {
  const response: IGraphQLResponse = yield call(services.refreshToken);
  const { refreshToken: result } = response?.data || {};
  if (result) {
    yield put(refreshTokenSuccess(result));
  }
}
