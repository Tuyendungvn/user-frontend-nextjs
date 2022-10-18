import { IGraphQLResponse, ILoginInput } from "@common/typings";
import * as services from "@services/auth";
import { call, put } from "redux-saga/effects";
import { loginSuccess } from "@redux/actions/auth";
import { setLoading } from "@redux/actions/common";
import { showNotification } from "@components/ToastNotification";

export function* login(payload: any) {
  const variables: ILoginInput = {
    user: payload.payload.user,
  };
  const permission = payload.payload.permission;
  yield put(setLoading(true));
  const response: IGraphQLResponse = yield call(
    services.loginWithPhoneNumber,
    variables,
  );
  yield put(setLoading(false));
  const { login: result } = response?.data || {};
  if (!result) {
    if (response?.errors[0].extensions.exception.status === 400) {
      if (
        response?.errors[0].extensions.exception.message ===
        "Your account is not verified otp"
      ) {
        showNotification({
          type: "error",
          title: "Thông báo",
          message:
            "Tài khoản của bạn chưa được xác thực. Vui lòng nhập lại mã OTP để xác thực tài khoản !",
        });
        eventManager.fire("activeAccount");
      }
      if (
        response?.errors[0].extensions.exception.message ===
        "Error.login phoneNumber or email or password incorrect !"
      ) {
        showNotification({
          type: "error",
          title: "Thông báo",
          message: "Sai số điện thoại hoặc mật khẩu !",
        });
      }
    }
    if (response?.errors[0].extensions.exception.status === 404) {
      showNotification({
        type: "error",
        title: "Thông báo",
        message: "Số điện thoại của bạn chưa được đăng ký !",
      });
    }
  }

  if (result) {
    if (permission === result.userInfo.permission) {
      showNotification({
        type: "success",
        title: "Thông báo",
        message: "Đăng nhập thành công!",
      });
      yield put(loginSuccess(result));
    } else {
      showNotification({
        type: "error",
        title: "Thông báo",
        message: "Tài khoản không phải là tài khoản người dùng !",
      });
    }
  }
}

// New Login with OTP Voice
