import {
  ICancelTheScheduleInterview,
  IConfirmTheScheduleInterview,
  ICreateScheduleInterview,
  IGetAllScheduleInterview,
  IGetScheduleInterviewById,
  IUpdateScheduleInterview,
} from "@common/typings/scheduleInterview";
import * as types from "@redux/types/scheduleInterview";

export const getAllScheduleInterview = (payload: IGetAllScheduleInterview) => ({
  type: types.GET_ALL_SCHEDULE_INTERVIEW,
  payload,
});

export const getAllScheduleInterviewSuccess = <T>(payload: T) => ({
  type: types.GET_ALL_SCHEDULE_INTERVIEW_SUCCESS,
  payload,
});

export const getScheduleInterviewById = (
  payload: IGetScheduleInterviewById,
) => ({
  type: types.GET_SCHEDULE_INTERVIEW_BY_ID,
  payload,
});

export const getScheduleInterviewByIdSuccess = <T>(payload: T) => ({
  type: types.GET_SCHEDULE_INTERVIEW_BY_ID_SUCCESS,
  payload,
});

export const updateScheduleInterview = (payload: IUpdateScheduleInterview) => ({
  type: types.UPDATE_SCHEDULE_INTERVIEW,
  payload,
});

export const createScheduleInterview = (payload: ICreateScheduleInterview) => ({
  type: types.CREATE_SCHEDULE_INTERVIEW,
  payload,
});

export const confirmTheScheduleInterview = (
  payload: IConfirmTheScheduleInterview,
) => ({
  type: types.CONFIRM_THE_SCHEDULE_INTERVIEW,
  payload,
});

export const cancelTheScheduleInterview = (
  payload: ICancelTheScheduleInterview,
) => ({
  type: types.CANCEL_THE_SCHEDULE_INTERVIEW,
  payload,
});
