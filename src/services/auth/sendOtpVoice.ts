import { gql } from "apollo-boost";
import { graphQLCommon } from "@common/utils/api";
import { ISendOtpVoice } from "@common/typings";

const SEND_OTP_VOICE = gql`
  mutation($phoneNumber: String!) {
    sendOtpVoice(phoneNumber: $phoneNumber) {
      Code
      Message
    }
  }
`;

export const sendOtpVoice = async (variables: ISendOtpVoice) => {
  const result = await graphQLCommon(SEND_OTP_VOICE, variables);
  return result;
};
