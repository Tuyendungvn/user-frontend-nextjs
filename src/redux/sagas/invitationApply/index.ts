import { all, takeLatest } from "@redux-saga/core/effects";
import * as types from "@redux/types/invitationApply";

import {
  getAllInvitationApplySaga,
  getInvitationApplyById,
} from "./invitationApply";

export default function* invitationApply() {
  yield all([
    takeLatest(types.GET_ALL_INVITATION_APPLY, getAllInvitationApplySaga),
    takeLatest(types.GET_INVITATION_APPLY_BY_ID, getInvitationApplyById),
  ]);
}
