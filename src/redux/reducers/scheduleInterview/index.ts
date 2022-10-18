import produce from "immer";
import { AnyAction } from "redux";
import * as types from "@redux/types/scheduleInterview";
import { IScheduleInterview } from "@common/typings/scheduleInterview";

interface IScheduleInterviewState {
  allScheduleInterview: {
    results: IScheduleInterview[];
    totalCount: number;
    loading: boolean;
  };
}

const initialState: IScheduleInterviewState = {
  allScheduleInterview: {
    results: [],
    totalCount: 0,
    loading: true,
  },
};

const reducer = (state = initialState, action: AnyAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_SCHEDULE_INTERVIEW_SUCCESS:
        draft.allScheduleInterview = { ...action.payload, loading: false };
        break;

      default:
        break;
    }
  });

export default reducer;
