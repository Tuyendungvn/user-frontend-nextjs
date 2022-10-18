import {
  IConfirmTheInvitation,
  IGetAllInvitationApply,
  IGetInvitationApplyById,
} from "@common/typings/InvitationApply";
import * as types from "@redux/types/invitationApply";

export const getAllInvitationApply = (payload: IGetAllInvitationApply) => ({
  type: types.GET_ALL_INVITATION_APPLY,
  payload,
});

export const getAllInvitationApplySuccess = <T>(payload: T) => ({
  type: types.GET_ALL_INVITATION_APPLY_SUCCESS,
  payload,
});

export const getInvitationApplyById = (payload: IGetInvitationApplyById) => ({
  type: types.GET_INVITATION_APPLY_BY_ID,
  payload,
});

export const getInvitationApplyByIdSuccess = <T>(payload: T) => ({
  type: types.GET_INVITATION_APPLY_BY_ID_SUCCESS,
  payload,
});

export const confirmTheInvitation = (payload: IConfirmTheInvitation) => ({
  type: types.CONFIRM_THE_INVITATION,
  payload,
});
