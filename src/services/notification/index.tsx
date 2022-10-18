import { gql } from "apollo-boost";
import {
  ICreateNotify,
  ICreateNotifySetting,
  IGetNotificationByUser,
  IGetNotificationSetting,
  IGetNotificationSettingByUser,
  ISetSeenForNotify,
} from "@common/typings";
import { graphQLCommon } from "@common/utils/api";

const GET_NOTIFICATION = gql`
  query($userId: String!) {
    getNotifyByUser(userId: $userId) {
      _id
      name
      user {
        _id
        displayName
      }
      company {
        _id
        name
      }
      description
      createdAt
      seen
      scheduleInterview {
        _id
        positionInterview
        scheduleType
        scheduleTime
        scheduleLocation
        interviewerName
        interviewerPhone
        interviewerEmail
        receiver {
          _id
          displayName
        }
        company {
          _id
          name
        }
        recruitment {
          _id
        }
        isConfirmFromReceiver
      }
      invitationApply {
        _id
        positionApply
        address
        receiver {
          _id
          displayName
        }
        sender {
          _id
          displayName
        }
        senderName
        senderPhone
        senderEmail
        recruitment {
          _id
          name
        }
        company {
          _id
          name
        }
        isConfirmFromReceiver
      }
    }
  }
`;
export const getNotificationByUser = async (
  variables: IGetNotificationByUser,
) => {
  const result = await graphQLCommon(GET_NOTIFICATION, variables);
  return result;
};

const SET_SEEN_FOR_NOTIFY = gql`
  mutation($userId: String!) {
    setSeenForNotify(userId: $userId)
  }
`;
export const setSeenForNotify = async (variables: ISetSeenForNotify) => {
  const result = await graphQLCommon(SET_SEEN_FOR_NOTIFY, variables);
  return result;
};

const GET_NOTIFICATION_SETTING = gql`
  query($filterNotifySetting: FilterNotifySetting) {
    getAllNotifySetting(filterNotifySetting: $filterNotifySetting) {
      results {
        _id
        name
        description
        createdAt
        permission
      }
    }
  }
`;
export const getNotificationSetting = async (
  variables: IGetNotificationSetting,
) => {
  const result = await graphQLCommon(GET_NOTIFICATION_SETTING, variables);
  return result;
};

const GET_NOTIFICATION_SETTING_BY_USER = gql`
  query($id: String!) {
    getNotifySettingByUser(id: $id) {
      _id
      name
      description
      createdAt
      permission
    }
  }
`;
export const getNotifySettingByUser = async (
  variables: IGetNotificationSettingByUser,
) => {
  const result = await graphQLCommon(
    GET_NOTIFICATION_SETTING_BY_USER,
    variables,
  );
  return result;
};

const CREATE_NOTIFY_SETTING = gql`
  mutation($notifySettingInput: NotifySettingInput!) {
    createNotify(notifySettingInput: $notifySettingInput) {
      _id
      name
      user {
        _id
        displayName
      }
      company {
        _id
        name
      }
      seen
      description
      noticeExpiration
      createdAt
      updatedAt
    }
  }
`;

export const createNotifySetting = async (variables: ICreateNotifySetting) => {
  const result = await graphQLCommon(CREATE_NOTIFY_SETTING, variables);
  return result;
};

const CREATE_NOTIFY = gql`
  mutation($notifyCreateInput: NotifyCreateInput!) {
    createNotify(notifyCreateInput: $notifyCreateInput) {
      _id
      name
      user {
        _id
        displayName
      }
      company {
        _id
        name
      }
      seen
      description
      noticeExpiration
      createdAt
      updatedAt
    }
  }
`;

export const createNotify = async (variables: ICreateNotify) => {
  const result = await graphQLCommon(CREATE_NOTIFY, variables);
  return result;
};
