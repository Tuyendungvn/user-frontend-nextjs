import { all, takeLatest } from "@redux-saga/core/effects";
import * as types from "@redux/types/scheduleInterview";
import {
  createScheduleInterview,
  getAllScheduleInterviewSaga,
  getScheduleInterviewById,
  updateScheduleInterview,
  confirmTheScheduleInterview,
  cancelTheScheduleInterview,
} from "./scheduleInterview";

export default function* scheduleInterview() {
  yield all([
    takeLatest(types.GET_ALL_SCHEDULE_INTERVIEW, getAllScheduleInterviewSaga),
    takeLatest(types.GET_SCHEDULE_INTERVIEW_BY_ID, getScheduleInterviewById),
    takeLatest(types.UPDATE_SCHEDULE_INTERVIEW, updateScheduleInterview),
    takeLatest(types.CREATE_SCHEDULE_INTERVIEW, createScheduleInterview),
    takeLatest(
      types.CONFIRM_THE_SCHEDULE_INTERVIEW,
      confirmTheScheduleInterview,
    ),
    takeLatest(types.CANCEL_THE_SCHEDULE_INTERVIEW, cancelTheScheduleInterview),
  ]);
}
