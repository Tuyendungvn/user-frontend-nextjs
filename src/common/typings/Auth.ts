import { IMongoObjectId, IUser } from "@common/typings";

export interface IGetToken {
  data?: { idToken: string; permission: string };
  loginMethod: "phone";
}
export interface IDecodeToken {
  exp: number;
  iat?: number;
  id?: string;
}

export interface IAuth {
  accessToken?: string;
  refreshToken?: string;
  userInfo?: IUser;
}
export interface ILoginInput {
  user: {
    username: string;
    password: string;
  };
  permission?: "CANDIDATE" | "EMPLOYER";
}

export type ITypeAuth = "phone";

export type IPermissionType = "ADMIN" | "MANAGER" | "USER" | "EMPLOYER";

export type IPermissionItem = {
  type: IPermissionType;
  name: string;
  lowerPermissions: IPermissionType[];
};

export type IPermission = {
  [key in IPermissionType]: IPermissionItem;
};
export interface IUpdateAccount {
  idUser: string;
  email: string;
  password: string;
}
export const PERMISSION: IPermission = {
  ADMIN: {
    type: "ADMIN",
    name: "Quản trị viên",
    lowerPermissions: ["MANAGER", "EMPLOYER", "USER"],
  },
  MANAGER: {
    type: "MANAGER",
    name: "Nhân viên hệ thống",
    lowerPermissions: ["USER", "EMPLOYER"],
  },
  USER: {
    type: "USER",
    name: "Ứng tuyển",
    lowerPermissions: [],
  },
  EMPLOYER: {
    type: "EMPLOYER",
    name: "Nhà tuyển dụng",
    lowerPermissions: [],
  },
};

// New API for Login and Register with OTP

export interface IVerifyOtpInput {
  otpCode?: string;
  phoneNumber?: string;
  permission?: "CANDIDATE";
}

export interface IVerifyOtpVoice {
  input?: IVerifyOtpInput;
}

export interface IRegisterOptInput {
  permission?: string;
  phoneNumber?: string;
  password?: string;
  displayName?: string;
  email?: string;
}

export interface IRegisterOtpVoice {
  input?: IRegisterOptInput;
}

export interface ISendOtpVoice {
  phoneNumber?: string;
}

export interface IResetPasswordOtpInput {
  otpCode?: string;
  phoneNumber?: string;
  permission?: string;
  newPassword?: string;
}

export interface IResetPasswordOtpVoice {
  input?: IResetPasswordOtpInput;
}

export interface IVerifyOtpResetPassword {
  input: IVerifyOtpInput;
}
