import { useTranslation } from "next-i18next";
import { FormikValues, FormikProps } from "formik";

import InputBox from "@designs/Input";
import ErrorHelperText from "@components/ErrorHelperText";
import { forceTextInputEnterNumber } from "@common/functions/filter";
import { PATH } from "@routes";

import {
  RegisterFormContainer,
  Title,
  AuthenTication,
  Text,
  Navigation,
  Button,
  Form,
  EmployerLogin,
} from "./styles";

interface IRegisterFormProps {
  formik: FormikProps<FormikValues>;
  errorMessage?: string;
  loading?: boolean;
}

const RegisterForm: React.FC<IRegisterFormProps> = (props) => {
  const { formik, errorMessage, loading } = props;
  const { t } = useTranslation(["authen"]);

  return (
    <RegisterFormContainer>
      <Title>{t("register.form-title")}</Title>
      <AuthenTication>
        <Form>
          <InputBox
            onKeyPress={forceTextInputEnterNumber}
            label={t("register.phone-number")}
            type="tel"
            required
            placeholder={t("register.enter-phone-number")}
            {...formik.getFieldProps("phoneNumber")}
            {...formik.getFieldMeta("phoneNumber")}
          />
          <InputBox
            label={t("register.email-address")}
            type="email"
            required
            placeholder={t("register.enter-email-address")}
            {...formik.getFieldProps("email")}
            {...formik.getFieldMeta("email")}
          />
          <InputBox
            label={t("register.password")}
            placeholder={t("register.enter-password")}
            required
            type="password"
            {...formik.getFieldProps("password")}
            {...formik.getFieldMeta("password")}
          />
          <Button loading={loading} primary type="submit">
            {t("register.register")}
          </Button>
        </Form>
        {errorMessage && <ErrorHelperText text={errorMessage} />}
      </AuthenTication>
      <Text>
        {t("register.already-have-account")}
        <Navigation routeName={PATH.LOGIN}>{t("register.login")}</Navigation>
      </Text>
      <Text>
        {t("register.are-you-recruiter")}
        <EmployerLogin
          href="https://employer.tuyendungvn.com/dang-nhap"
          target="_blank"
        >
          {t("register.login-for-recruiters")}
        </EmployerLogin>
      </Text>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
