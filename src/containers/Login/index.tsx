// import "firebase/auth";
import { useTranslation } from "next-i18next";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { phoneRegExp } from "@constants/validate";
import InputBox from "@designs/Input";
import { forceTextInputEnterNumber } from "@common/functions/filter";
import {
  IGraphQLResponse,
  ILoginInput,
  IRootState,
  ISendOtpVoice,
  IUser,
  IVerifyOtpVoice,
} from "@common/typings";
import { login, sendOtpVoice, verifyOtpVoice } from "@redux/actions/auth";
import { PATH } from "@routes";
import { useRedirect } from "@common/hooks/useRedirect";
import useAuth from "@common/hooks/useAuth";

import {
  LoginContainer,
  Title,
  AuthenTication,
  Form,
  Text,
  Navigation,
  EmployerLogin,
  Button,
} from "./styles";
import { getAllUser } from "@services/user";
import { showNotification } from "@components/ToastNotification";
import OTPForm from "@containers/Register/OTPForm";

interface ILoginProps {}

type IInputMode = "LOG_IN" | "ACTIVE_ACOUNT";

const Login: React.FC<ILoginProps> = () => {
  const [inputMode, setInputMode] = useState<IInputMode>("LOG_IN");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation(["authen"]);
  const redirect = useRedirect();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: IRootState) => state.auth);
  const { isLoading } = useSelector((state: IRootState) => state.actions);
  const [users, setUsers] = useState<IUser[]>([]);
  const { isAuth } = useAuth();

  useEffect(() => {
    if (currentUser) {
      redirect(PATH.JOB_MANAGEMENT_PERSONAL_INFO);
    }
  }, [currentUser]);

  useEffect(() => {
    if (isAuth) {
      redirect(PATH.JOB_MANAGEMENT_PERSONAL_INFO);
    } else {
      getAllUserForCheckExist();
    }
  }, []);

  const initialValues = {
    username: "",
    password: "",
    otp: "",
  };

  const validationWithPhone = Yup.object({
    username: Yup.string()
      .required(t("login.require-phone-number"))
      .matches(phoneRegExp, t("login.incorrect-phone-number"))
      .max(10, t("login.incorrect-phone-number")),
    password: Yup.string().required(t("login.require-password")),
  });

  const validateWithOtp = Yup.object({
    otp: Yup.string().required(),
  });

  const formValidation = {
    LOG_IN: validationWithPhone,
    ACTIVE_ACOUNT: validateWithOtp,
  };

  const handleSubmit = (values: FormikValues) => {
    if (inputMode === "LOG_IN") {
      handleLoginPhoneNumber(values);
    }
    if (inputMode === "ACTIVE_ACOUNT") {
      handleVerifyOtpCode(values);
    }
  };

  const handleLoginPhoneNumber = (values: FormikValues) => {
    const listPhone = users?.map((user) => user?.phoneNumber);
    if (values.phoneNumber) {
      const isExist = listPhone?.includes(values.phoneNumber);
      if (!isExist) {
        dispatch(
          showNotification({
            type: "error",
            title: t("login.have-error"),
            message: t("login.non-exist-phone"),
          }),
        );
        return;
      }
    }

    const payload: ILoginInput = {
      user: {
        username: values.username,
        password: values.password,
      },
      permission: "CANDIDATE",
    };
    dispatch(login(payload));

    eventManager.addListener("activeAccount", () => {
      setInputMode("ACTIVE_ACOUNT");
      const payload_Otp: ISendOtpVoice = {
        phoneNumber: values.username,
      };
      dispatch(sendOtpVoice(payload_Otp));
    });
  };

  const handleVerifyOtpCode = async (values: FormikValues) => {
    setLoading(true);
    try {
      const payload: IVerifyOtpVoice = {
        input: {
          otpCode: values?.otp,
          phoneNumber: values?.username,
          permission: "CANDIDATE",
        },
      };
      dispatch(verifyOtpVoice(payload));
      eventManager.addListener("verifyOtpSuccess", () => {
        setInputMode("LOG_IN");
      });
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error);
      setLoading(false);
    }
  };

  const getAllUserForCheckExist = async () => {
    try {
      const response: IGraphQLResponse = await getAllUser();
      const { getAllUserHasPermissions: result } = response?.data || {};
      setUsers(result?.results);
    } catch (error) {
      setUsers([]);
      console.error(error);
    }
  };

  const handleResendOtpCode = (values: FormikValues) => {
    const payload: ISendOtpVoice = {
      phoneNumber: values?.phoneNumber,
    };
    dispatch(sendOtpVoice(payload));
  };

  return (
    <LoginContainer>
      <Title>{t("login.form-title")}</Title>
      <AuthenTication>
        <Formik
          initialValues={initialValues}
          validationSchema={formValidation[inputMode]}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            if (inputMode !== "ACTIVE_ACOUNT") {
              return (
                <Form>
                  {inputMode === "LOG_IN" && (
                    <>
                      <InputBox
                        onKeyPress={forceTextInputEnterNumber}
                        label={t("login.phone-number")}
                        type="tel"
                        placeholder={t("login.enter-phone-number")}
                        {...formik.getFieldProps("username")}
                        {...formik.getFieldMeta("username")}
                      />
                      <InputBox
                        label={t("login.password")}
                        placeholder={t("login.enter-password")}
                        type="password"
                        {...formik.getFieldProps("password")}
                        {...formik.getFieldMeta("password")}
                      />
                    </>
                  )}

                  <Button loading={isLoading} primary type="submit">
                    {inputMode === "LOG_IN"
                      ? t("login.login")
                      : t("login.verify")}
                  </Button>
                </Form>
              );
            }
            if (inputMode === "ACTIVE_ACOUNT") {
              return (
                <OTPForm
                  onClose={() => {
                    setInputMode("LOG_IN");
                    setErrorMessage("");
                  }}
                  title={"Nhập mã xác thực OTP"}
                  loading={loading}
                  formik={formik}
                  errorMessage={errorMessage}
                  onResendOtp={handleResendOtpCode}
                />
              );
            }
          }}
        </Formik>
      </AuthenTication>
      <Text>
        {t("login.forgot-password")}
        <Navigation routeName={PATH.FORGOT_PASSWORD}>
          {t("login.reset")}
        </Navigation>
      </Text>
      <Text>
        {t("login.dont-have-account")}
        <Navigation routeName={PATH.REGISTER}>
          {t("login.register-here")}
        </Navigation>
      </Text>
      <Text>
        {t("login.are-you-recruiter")}
        <EmployerLogin
          href="https://employer.tuyendungvn.com/dang-nhap"
          target="_blank"
        >
          {t("login.login-for-recruiters")}
        </EmployerLogin>
      </Text>
    </LoginContainer>
  );
};

export default Login;
