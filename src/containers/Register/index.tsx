// import "firebase/auth";
import * as Yup from "yup";
import { FormikValues, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import RegisterForm from "./RegisterForm";
import OTPForm from "./OTPForm";
import { phoneRegExp, emailRegExp } from "@constants/validate";
import { useTranslation } from "next-i18next";
import {
  registerOtpVoice,
  sendOtpVoice,
  verifyOtpVoice,
} from "@redux/actions/auth";
import { useRedirect } from "@common/hooks/useRedirect";
import { IRootState } from "@redux/reducers";
import { PATH } from "@routes";
import { showNotification } from "@components/ToastNotification";

import { RegisterContainer } from "./styles";
import {
  IGraphQLResponse,
  IRegisterOtpVoice,
  ISendOtpVoice,
  IUser,
  IVerifyOtpVoice,
} from "@common/typings";
import { getAllUser } from "@services/user";
import { resetAction } from "@redux/actions/common";

interface IRegisterProps {}

type IInputMode = "PHONE_NUMBER" | "OTP";

const Register: React.FC<IRegisterProps> = () => {
  const { t } = useTranslation(["authen"]);
  const dispatch = useDispatch();
  const redirect = useRedirect();

  const [inputMode, setInputMode] = useState<IInputMode>("PHONE_NUMBER");

  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const { actionSuccess } = useSelector((state: IRootState) => state.actions);

  useEffect(() => {
    getAllUserForCheckExist();
  }, []);

  useEffect(() => {
    if (actionSuccess) {
      dispatch(resetAction());
      showNotification({
        type: "success",
        title: t("register.create-successful"),
      });
      redirect(PATH.LOGIN);
    }
  }, [actionSuccess]);

  const initialValues = {
    phoneNumber: "",
    email: "",
    password: "",
    otp: "",
  };

  const validateWithPhone = Yup.object({
    phoneNumber: Yup.string()
      .required(t("register.require-phone-number"))
      .matches(phoneRegExp, t("register.phone-not-valid"))
      .max(10, t("register.phone-not-valid")),
    email: Yup.string()
      .required(t("register.require-email"))
      .matches(emailRegExp, t("register.email-not-valid")),
    password: Yup.string().required(t("login.require-password")),
  });

  const validateWithOtp = Yup.object({
    otp: Yup.string().required(),
  });

  const handleSubmit = (values: FormikValues) => {
    if (inputMode === "PHONE_NUMBER") {
      const listPhoneNumber = users?.map((user) => user?.phoneNumber);
      const listEmail = users?.map((user) => user?.email);

      if (values.phoneNumber) {
        const exist = listPhoneNumber?.includes(values.phoneNumber);
        if (exist) {
          dispatch(
            showNotification({
              type: "error",
              message: t("register.exist-phone-number"),
              title: t("register.have-error"),
            }),
          );
          return;
        }
      }

      if (values.email) {
        const exist = listEmail.includes(values.email);
        if (exist) {
          dispatch(
            showNotification({
              type: "error",
              message: t("register.exist-email"),
              title: t("register.have-error"),
            }),
          );
          return;
        }
      }
      handleVerifyPhoneNumber(values);
    }
    if (inputMode === "OTP") {
      handleVerifyOtpCode(values);
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
    const text = values.phoneNumber;
    const phoneNumber = `+84${text.slice(1, text.length)}`;
    const payload: ISendOtpVoice = {
      phoneNumber: phoneNumber,
    };
    dispatch(sendOtpVoice(payload));
  };

  const handleVerifyPhoneNumber = async (values: FormikValues) => {
    setLoading(true);

    try {
      const payload: IRegisterOtpVoice = {
        input: {
          permission: "CANDIDATE",
          phoneNumber: values?.phoneNumber,
          password: values?.password,
          email: values?.email,
        },
      };

      dispatch(registerOtpVoice(payload));
      setErrorMessage("");
      setLoading(false);
      setInputMode("OTP");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setErrorMessage(error?.message);
    }
  };

  const handleVerifyOtpCode = async (values: FormikValues) => {
    setLoading(true);
    try {
      const payload: IVerifyOtpVoice = {
        input: {
          otpCode: values?.otp,
          phoneNumber: values?.phoneNumber,
          permission: "CANDIDATE",
        },
      };
      dispatch(verifyOtpVoice(payload));
      eventManager.addListener("verifyOtpSuccess", () => {
        redirect(PATH.LOGIN);
      });
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={
          inputMode === "PHONE_NUMBER" ? validateWithPhone : validateWithOtp
        }
        onSubmit={handleSubmit}
      >
        {(formik) => {
          if (inputMode === "PHONE_NUMBER") {
            return (
              <RegisterForm
                loading={loading}
                formik={formik}
                errorMessage={errorMessage}
              />
            );
          } else {
            return (
              <OTPForm
                title={t("register.form-title")}
                loading={loading}
                formik={formik}
                errorMessage={errorMessage}
                onResendOtp={handleResendOtpCode}
                onClose={() => {
                  setInputMode("PHONE_NUMBER");
                }}
              />
            );
          }
        }}
      </Formik>
    </RegisterContainer>
  );
};

export default Register;
