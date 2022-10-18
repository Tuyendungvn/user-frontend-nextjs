import { gql } from "apollo-boost";
import { graphQLCommon } from "@common/utils/api";
import { IVerifyOtpInput } from "@common/typings";

const VERIFY_OTP_VOICE = gql`
  mutation($input: VerifyOtpInput!) {
    verifyOtpVoice(input: $input)
  }
`;

export const verifyOtpVoice = async (variables: IVerifyOtpInput) => {
  const result = await graphQLCommon(VERIFY_OTP_VOICE, variables);
  return result;
};

const VERIFY_OTP_RESET_PASSWORD = gql`
  mutation($input: VerifyOtpInput!) {
    verifyOtpResetPassword(input: $input)
  }
`;

export const verifyOtpResetPassword = async (variables: IVerifyOtpInput) => {
  const result = await graphQLCommon(VERIFY_OTP_RESET_PASSWORD, variables);
  return result;
};
