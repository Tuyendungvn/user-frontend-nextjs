import * as services from "@services/auth";
import { call, put } from "redux-saga/effects";
import { setLoading } from "@redux/actions/common";
import { showNotification } from "@components/ToastNotification";
import { IGraphQLResponse, ISendOtpVoice } from "@common/typings";

export function* sendOtpVoice(payload: any) {
  const variables: ISendOtpVoice = payload.payload;
  yield put(setLoading(true));

  const response: IGraphQLResponse = yield call(
    services.sendOtpVoice,
    variables,
  );
  yield put(setLoading(false));

  const { sendOtpVoice: result } = response?.data || {};

  if (result) {
    if (result.Code !== 106) {
      showNotification({
        type: "error",
        title: "Thông báo",
        message: result.Message,
      });
    }
    eventManager.fire("isSendRequestOtp");
  }
}
