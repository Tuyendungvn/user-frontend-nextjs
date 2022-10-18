import { IMongoObjectId, ICompany, IUser, IRecruitment } from "@common/typings";

export interface IScheduleInterview {
  _id: IMongoObjectId;
  positionInterview?: string;
  scheduleType?: string;
  scheduleTime?: Date;
  scheduleLocation?: string;
  receiver?: IUser;
  company?: ICompany;
  recruitment?: IRecruitment;
  interviewerName?: string;
  interviewerPhone?: string;
  interviewerEmail?: string;
  status: IScheduleInterviewStatusEnum;
  createdAt?: Date;
  updatedAt?: Date;
  isConfirmFromReceiver?: boolean;
}

export interface IFilterScheduleInterview {
  scheduleType?: IScheduleInterviewStatusEnum;
  receiver?: String;
  company?: String;
  recruitment?: String;
  status?: IScheduleInterviewStatusEnum;
}

export type IScheduleInterviewStatusEnum = "expired" | "due" | "canceled";

export interface IGetAllScheduleInterview {
  filterScheduleInterview?: IFilterScheduleInterview;
  page?: number;
  size?: number;
}

export interface IGetScheduleInterviewById {
  id?: IMongoObjectId;
}

export interface ICreateScheduleInterview {
  input?: IScheduleInterviewInput;
}

export interface IUpdateScheduleInterview {
  id?: string;
  input?: IScheduleInterviewInput;
}

export interface IScheduleInterviewInput {
  positionInterview?: string;
  scheduleType?: string;
  scheduleTime?: Date;
  scheduleLocation?: string;
  receiver?: string;
  company?: string;
  recruitment?: string;
  interviewerName?: string;
  interviewerPhone?: string;
  interviewerEmail?: string;
}

export interface IScheduleInterviewTypeEnum {
  name?: string;
  method?: string;
}

export interface IConfirmTheScheduleInterview {
  id: string;
}

export interface ICancelTheScheduleInterview {
  id: string;
}
