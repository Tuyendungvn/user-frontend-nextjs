import { IResetPasswordInput, IResetPasswordOtpInput } from "@common/typings";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { gql } from "apollo-boost";
import { graphQLCommon } from "@common/utils/api";

const RESET_PASSWORD_OTP = gql`
  mutation($input: ResetPasswordOtpInput!) {
    resetPasswordOtpVoice(input: $input)
  }
`;

export const resetPasswordOtpVoice = async (
  variables: IResetPasswordOtpInput,
) => {
  const result = await graphQLCommon(RESET_PASSWORD_OTP, variables);
  return result;
};
