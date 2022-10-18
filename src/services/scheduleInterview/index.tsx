import {
  ICancelTheScheduleInterview,
  IConfirmTheScheduleInterview,
  ICreateScheduleInterview,
  IGetAllScheduleInterview,
  IGetScheduleInterviewById,
  IUpdateScheduleInterview,
} from "@common/typings/scheduleInterview";
import { graphQLCommon } from "@common/utils/api";
import { gql } from "apollo-boost";

const schedule = `
    _id
    positionInterview
    scheduleType
    scheduleTime
    scheduleLocation
    interviewerName
    interviewerPhone
    interviewerEmail
    receiver{
      _id
      displayName
    }
    company{
      _id
      name
    }
    recruitment{
      _id
    }
    isConfirmFromReceiver
    status
`;

const GET_ALL_SCHEDULE_INTERVIEW = gql`
    query($filterScheduleInterview: FilterScheduleInterview, $page: Int, $size: Int) {
      getAllScheduleInterview(filterScheduleInterview: $filterScheduleInterview, page:$page, size:$size){
        totalCount
        results{
         ${schedule}
        }
      }
    }
`;

export const getAllScheduleInterview = async (
  variables: IGetAllScheduleInterview,
) => {
  const result = await graphQLCommon(GET_ALL_SCHEDULE_INTERVIEW, variables);
  return result;
};

const GET_SCHEDULE_INTERVIEW_BY_ID = gql`
    query($id: String!) {
        getScheduleInterviewById(id: $id) {
          ${schedule}
        }
    }
`;

export const getScheduleInterviewById = async (
  variables: IGetScheduleInterviewById,
) => {
  const result = await graphQLCommon(GET_SCHEDULE_INTERVIEW_BY_ID, variables);
  return result;
};

const UPDATE_SCHEDULE_INTERVIEW = gql`
  mutation($id: String!, $input: ScheduleInterviewInput!) {
    updateScheduleInterview(id: $id, input: $input) {
      _id
    }
  }
`;

export const updateScheduleInterview = async (
  variables: IUpdateScheduleInterview,
) => {
  const response = await graphQLCommon(UPDATE_SCHEDULE_INTERVIEW, variables);
  return response;
};

const CREATE_SCHEDULE_INTERVIEW = gql`
  mutation($input: ScheduleInterviewInput!) {
    createScheduleInterview(input: $input) {
      _id
    }
  }
`;

export const createScheduleInterview = async (
  variables: ICreateScheduleInterview,
) => {
  const response = await graphQLCommon(CREATE_SCHEDULE_INTERVIEW, variables);
  return response;
};

const CONFIRM_THE_SCHEDULE_INTERVIEW = gql`
  mutation($id: String!) {
    confirmTheScheduleInterview(id: $id)
  }
`;

export const confirmTheScheduleInterview = async (
  variables: IConfirmTheScheduleInterview,
) => {
  const response = await graphQLCommon(
    CONFIRM_THE_SCHEDULE_INTERVIEW,
    variables,
  );
  return response;
};

const CANCEL_THE_SCHEDULE_INTERVIEW = gql`
  mutation($id: String!) {
    cancelTheScheduleInterview(id: $id)
  }
`;

export const cancelTheScheduleInterview = async (
  variables: ICancelTheScheduleInterview,
) => {
  const response = await graphQLCommon(
    CANCEL_THE_SCHEDULE_INTERVIEW,
    variables,
  );
  return response;
};
