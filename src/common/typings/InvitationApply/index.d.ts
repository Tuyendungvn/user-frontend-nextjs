import { IMongoObjectId, ICompany, IUser, IRecruitment } from "@common/typings";

export interface IInvitationApply {
  _id?: IMongoObjectId;
  positionApply?: string;
  address?: string;
  receiver?: IUser;
  sender?: IUser;
  senderName?: string;
  senderPhone?: string;
  senderEmail?: string;
  company?: ICompany;
  recruitment?: IRecruitment;
  status?: IInvitationApplyStatusEnum;
  createdAt?: Date;
  updatedAt?: Date;
  isConfirmFromReceiver?: boolean;
}

export interface IFilterInvitationApply {
  receiver?: string;
  sender?: string;
  company?: string;
  recruitment?: string;
  status?: IInvitationApplyStatusEnum;
}

export type IInvitationApplyStatusEnum = "accept" | "deny";

export interface IGetAllInvitationApply {
  filterInvitationApply: IFilterInvitationApply;
  page?: number;
  size?: number;
}

export interface IGetInvitationApplyById {
  id?: IMongoObjectId;
}

export interface ICreateInvitationApply {
  input?: IInvitationApplyInput;
}

export interface IUpdateInvitationApply {
  id?: string;
  input?: IInvitationApplyInput;
}

export interface IInvitationApplyInput {
  positionApply?: string;
  address?: string;
  receiver?: string;
  sender?: string;
  senderName?: string;
  senderPhone?: string;
  senderEmail?: string;
  company?: string;
  recruitment?: string;
  status?: IInvitationApplyStatusEnum;
}

export interface IConfirmTheInvitation {
  id: string;
}
