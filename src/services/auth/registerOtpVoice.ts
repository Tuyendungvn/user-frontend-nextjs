import { gql } from "apollo-boost";
import { graphQLCommon } from "@common/utils/api";
import { IRegisterOptInput } from "@common/typings";

const REGISTER_OTP_VOICE = gql`
  mutation($input: RegisterOptInput!) {
    registerOtpVoice(input: $input) {
      Code
      Message
    }
  }
`;

export const registerOtpVoice = async (variables: IRegisterOptInput) => {
  const result = await graphQLCommon(REGISTER_OTP_VOICE, variables);
  return result;
};
