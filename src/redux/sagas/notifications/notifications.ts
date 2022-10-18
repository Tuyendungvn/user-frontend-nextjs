import { IGraphQLResponse } from "@common/typings";
import { call, put } from "@redux-saga/core/effects";
import * as services from "@services/notification";
import {
  getNotificationsByUserSuccess,
  getNotificationsSettingSuccess,
  getNotificationsSettingByUserSuccess,
} from "@redux/actions/notification";
import { actionSuccess } from "@redux/actions/common";

export function* getNotifications(payload: any) {
  const variables = payload.payload;
  const response: IGraphQLResponse = yield call(
    services.getNotificationByUser,
    variables,
  );
  const { getNotifyByUser: results } = response?.data || {};
  if (results) {
    yield put(getNotificationsByUserSuccess(results));
  }
}

export function* setSeenForNotify(payload: any) {
  const variables = payload.payload;
  const response: IGraphQLResponse = yield call(
    services.setSeenForNotify,
    variables,
  );
  const { setSeenForNotify: results } = response?.data || {};
  if (results) {
  }
}

export function* getNotificationsSetting(payload: any) {
  const variables = payload.payload;
  const response: IGraphQLResponse = yield call(
    services.getNotificationSetting,
    variables,
  );
  const { getAllNotifySetting: results } = response?.data || {};
  if (results) {
    yield put(getNotificationsSettingSuccess(results));
  }
}

export function* getNotificationsSettingByUser(payload: any) {
  const variables = payload.payload;
  const response: IGraphQLResponse = yield call(
    services.getNotifySettingByUser,
    variables,
  );
  const { getNotifySettingByUser: results } = response?.data || {};
  if (results) {
    yield put(getNotificationsSettingByUserSuccess(results));
  }
}

export function* createNotifySetting(payload: any) {
  const variables = payload.payload;
  const response: IGraphQLResponse = yield call(
    services.createNotifySetting,
    variables,
  );
  const { createNotifySetting: results } = response?.data || {};
  if (results) {
    yield put(actionSuccess());
  }
}

export function* createNotify(payload: any) {
  const variables = payload.payload;
  const response: IGraphQLResponse = yield call(
    services.createNotify,
    variables,
  );
  const { createNotify: results } = response?.data || {};
  if (results) {
    yield put(actionSuccess());
  }
}
