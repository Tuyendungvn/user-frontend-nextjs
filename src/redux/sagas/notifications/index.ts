import { all, takeLatest } from "@redux-saga/core/effects";
import * as types from "@redux/types/notification";
import {
  getNotifications,
  setSeenForNotify,
  getNotificationsSetting,
  getNotificationsSettingByUser,
  createNotifySetting,
  createNotify,
} from "./notifications";

export default function* notify() {
  yield all([
    takeLatest(types.GET_NOTIFICATIONS_BY_USER, getNotifications),
    takeLatest(types.SET_SEEN_FOR_NOTIFY, setSeenForNotify),
    takeLatest(types.GET_NOTIFICATIONS_SETTING, getNotificationsSetting),
    takeLatest(
      types.GET_NOTIFICATIONS_SETTING_BY_USER,
      getNotificationsSettingByUser,
    ),
    takeLatest(types.CREATE_NOTIFY_SETTING, createNotifySetting),
    takeLatest(types.CREATE_NOTIFY, createNotify),
  ]);
}
