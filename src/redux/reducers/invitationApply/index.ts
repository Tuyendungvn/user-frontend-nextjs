import produce from "immer";
import { AnyAction } from "redux";
import * as types from "@redux/types/invitationApply";
import { IInvitationApply } from "@common/typings/InvitationApply";

interface IInvitationApplyState {
  allInvitationApply: {
    results: IInvitationApply[];
    totalCount: number;
    loading: boolean;
  };
}

const initialState: IInvitationApplyState = {
  allInvitationApply: {
    results: [],
    totalCount: 0,
    loading: true,
  },
};

const reducer = (state = initialState, action: AnyAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_INVITATION_APPLY_SUCCESS:
        draft.allInvitationApply = { ...action.payload, loading: false };
        break;

      default:
        break;
    }
  });

export default reducer;
