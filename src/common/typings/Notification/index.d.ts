import {
  IMongoObjectId,
  IUser,
  ITypes,
  ICustomSizeImages,
  ICustomSizeImagesInput,
  IUpload,
  ICompany,
  IScheduleInterview,
  IInvitationApply
} from "@common/typings";
export interface INotification {
  _id?: IMongoObjectId;
  name?: string;
  company?: ICompany;
  date?: Date;
  description?: string;
  link?: string;
  slug?: string;
  keywords?: string;
  seen?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  scheduleInterview?: IScheduleInterview;
  invitationApply?: IInvitationApply;
}

export interface IGetNotificationByUser {
  userId: string;
}
export interface ISetSeenForNotify {
  userId: string;
}

export interface INotificationSetting {
  _id?: IMongoObjectId;
  name?: string;
  description?: string;
  permission?: string;
  keywords?: string;
  createdAt?: Date;
}

export interface IGetNotificationSetting {
  filterNotifySetting: {
    permission: string;
  };
}

export interface IGetNotificationSettingByUser {
  id: string;
}

export interface ICreateNotifySetting {
  notifySettingInput?: INotifySettingInput!;
}

export interface INotifySettingInput {   
  name?: string;
  description?: string;
  permission?: string;
}

export interface ICreateNotify {
  notifyCreateInput?: INotifyCreateInput!;
}

export interface INotifyCreateInput {
  notifyExpriration?: Date;    
  user?: string;
  name?: string;
  company?: string;
  description?: string;
}
