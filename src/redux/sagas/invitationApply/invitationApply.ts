import { IGraphQLResponse } from "@common/typings";
import { call, put } from "redux-saga/effects";
import * as services from "@services/invitationApply";
import { actionSuccess, setLoading } from "@redux/actions/common";
import { showNotification } from "@components/ToastNotification";
import {
  getAllInvitationApplySuccess,
  getInvitationApplyByIdSuccess,
} from "@redux/actions/invitationApply";

export function* getAllInvitationApplySaga(payload: any) {
  const variables = payload.payload;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.getAllInvitationApply,
    variables,
  );

  yield put(setLoading(false));
  const { getAllInvitationApply: result } = response?.data || {};
  if (result) {
    yield put(getAllInvitationApplySuccess(result));
  }
}

export function* getInvitationApplyById(payload: any) {
  const variables = payload.payload;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.getInvitationApplyById,
    variables,
  );
  yield put(setLoading(false));
  const { getInvitationApplyById: result } = response?.data || {};
  if (result) {
    yield put(getInvitationApplyByIdSuccess(result));
  }
}

export function* confirmTheInvitation(payload: any) {
  const variables = payload.payload;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.confirmTheInvitation,
    variables,
  );
  yield put(setLoading(false));

  const { confirmTheInvitation: result } = response?.data || {};

  if (result) {
    yield put(actionSuccess());

    showNotification({
      type: "success",
      title: "Thông báo",
      message: "Xác nhận lời mời ứng tuyển thành công!",
    });
  }
}
