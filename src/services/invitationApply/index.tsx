import {
  IConfirmTheInvitation,
  IGetAllInvitationApply,
  IGetInvitationApplyById,
} from "@common/typings/InvitationApply";
import { graphQLCommon } from "@common/utils/api";
import { gql } from "apollo-boost";

const invitation = `
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
    company {
        _id
        name
    }
    recruitment {
        _id
        slug
    }
    isConfirmFromReceiver
    status
`;

const GET_ALL_INVITATION_APPLY = gql`
    query($filterInvitationApply: FilterInvitationApply, $page:Int, $size: Int) {
        getAllInvitationApply(filterInvitationApply: $filterInvitationApply, page:$page, size:$size){
            totalCount
            results{
                ${invitation}
            }
        }
    }
`;

export const getAllInvitationApply = async (
  variables: IGetAllInvitationApply,
) => {
  const result = await graphQLCommon(GET_ALL_INVITATION_APPLY, variables);
  return result;
};

const GET_INVITATION_APPLY_BY_ID = gql`
    query($id: String!) {
        getInvitationApplyById(id: $id) {
          ${invitation}
        }
    }
`;

export const getInvitationApplyById = async (
  variables: IGetInvitationApplyById,
) => {
  const result = await graphQLCommon(GET_INVITATION_APPLY_BY_ID, variables);
  return result;
};

const CONFIRM_THE_INVITATION = gql`
  mutation($id: String!) {
    confirmTheInvitation(id: $id)
  }
`;

export const confirmTheInvitation = async (
  variables: IConfirmTheInvitation,
) => {
  const response = await graphQLCommon(CONFIRM_THE_INVITATION, variables);
  return response;
};
