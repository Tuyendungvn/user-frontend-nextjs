import { IMongoObjectId, IUserInput, IUpdateUser } from "@common/typings";

export interface IUpdatePasswordInput {
  id: String;
  oldPassword: String;
  newPassword: String;
}

export interface IUpdateUserPassword {
  updatePasswordInput: IUpdatePasswordInput;
}

export interface IUpdateUserProfile {
  updateUserInput: IUpdateUser;
}
