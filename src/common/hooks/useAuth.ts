import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PATH } from "@routes";
import { useRedirect } from "./useRedirect";
import { IRootState } from "@common/typings";
import { getLoggedInAccount, isAuthenticated } from "@common/utils/auth";
import {
  removeCurrentUser,
  setAccountInfo,
  setIsAuth,
} from "@redux/actions/auth";

const useAuth = () => {
  const dispatch = useDispatch();
  const redirect = useRedirect();
  const { isAuth, accountInfo } = useSelector(
    (state: IRootState) => state.auth,
  );

  useEffect(() => {
    // to make sure data won't be lacked
    dispatch(setIsAuth(isAuthenticated()));
    dispatch(setAccountInfo(getLoggedInAccount()));
  }, []);

  const logout = useCallback(() => {
    dispatch(removeCurrentUser());
    redirect(PATH.LOGIN, {}, {}, { useRefresh: true });
  }, []);

  return { isAuth, accountInfo, logout };
};

export default useAuth;
