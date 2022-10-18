import { IGraphQLResponse } from "@common/typings";
import { call, put } from "redux-saga/effects";
import * as services from "@services/scheduleInterview";
import { actionSuccess, setLoading } from "@redux/actions/common";
import { showNotification } from "@components/ToastNotification";
import {
  getAllScheduleInterviewSuccess,
  getScheduleInterviewByIdSuccess,
} from "@redux/actions/scheduleInterview";

export function* getAllScheduleInterviewSaga(payload: any) {
  const variables = payload.payload;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.getAllScheduleInterview,
    variables,
  );

  yield put(setLoading(false));
  const { getAllScheduleInterview: result } = response?.data || {};
  if (result) {
    yield put(getAllScheduleInterviewSuccess(result));
  }
}

export function* getScheduleInterviewById(payload: any) {
  const variables = payload.payload;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.getScheduleInterviewById,
    variables,
  );
  yield put(setLoading(false));
  const { getScheduleInterviewById: result } = response?.data || {};
  if (result) {
    yield put(getScheduleInterviewByIdSuccess(result));
  }
}

export function* updateScheduleInterview(payload: any) {
  const variables = payload.payload;

  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.updateScheduleInterview,
    variables,
  );
  yield put(setLoading(false));

  const { updateScheduleInterview: result } = response?.data || {};
  if (result) {
    yield put(actionSuccess());
    showNotification({
      type: "success",
      title: "Thông báo",
      message: "Cập nhật lịch phỏng vấn thành công",
    });
  } else {
    showNotification({
      type: "error",
      title: "Thông báo",
      message: "Cập nhật thất bại",
    });
  }
}

export function* createScheduleInterview(payload: any) {
  const variables = payload.payload;
  const response: IGraphQLResponse = yield call(
    services.createScheduleInterview,
    variables,
  );

  const { createScheduleInterview: results } = response?.data || {};

  if (results) {
    yield put(actionSuccess());
    showNotification({
      type: "success",
      title: "Thông báo",
      message: "Tạo lịch phỏng vấn thành công",
    });
  } else {
    showNotification({
      type: "error",
      title: "Thông báo",
      message: "Tạo lịch phỏng vấn thất bại",
    });
  }
}

export function* confirmTheScheduleInterview(payload: any) {
  const variables = payload.payload;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.confirmTheScheduleInterview,
    variables,
  );
  yield put(setLoading(false));

  const { confirmTheScheduleInterview: result } = response?.data || {};

  if (result) {
    yield put(actionSuccess());

    showNotification({
      type: "success",
      title: "Thông báo",
      message: "Xác nhận tham gia phỏng vấn thành công!",
    });
  }
}

export function* cancelTheScheduleInterview(payload: any) {
  const variables = payload.payload;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.cancelTheScheduleInterview,
    variables,
  );
  yield put(setLoading(false));

  const { cancelTheScheduleInterview: result } = response?.data || {};

  if (result) {
    yield put(actionSuccess());
    showNotification({
      type: "success",
      title: "Thông báo",
      message: "Bạn đã từ chối lịch mời tham gia phỏng vấn!",
    });
  }
}
