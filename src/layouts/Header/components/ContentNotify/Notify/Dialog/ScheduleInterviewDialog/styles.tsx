import styled from "styled-components";
import tw from "twin.macro";
import _Button from "@designs/Button";
import { Form as _Form } from "formik";

export const ScheduleInterviewDialogContainer = styled.div`
  ${tw`w-max`}
`;

export const DialogButton = styled.p`
  ${tw`block cursor-pointer`}
`;

export const Container = styled.div`
  ${tw`p-1 phone:p-4`}
`;

export const Title = styled.p`
  ${tw`text-24 phone:text-26 font-bold text-primary mr-10 mb-4 text-center w-full`}
`;

export const ScheduleInterviewForm = styled(_Form)`
  ${tw`grid gap-2`}
`;

export const ButtonWrapper = styled.div`
  ${tw`flex flex-row justify-end w-full mt-4 phone:gap-x-2 gap-x-1`}
`;

export const ConfirmButton = styled(_Button)`
  ${tw`w-12`}
`;

export const CancelButton = styled(_Button)`
  ${tw`w-12`}
`;

export const ViewButton = styled(_Button)`
  ${tw`text-center w-17 cursor-pointer bg-secondary`}
`;

export const ScheduleInterviewBox = styled.div`
  ${tw`flex flex-col justify-center`}
`;

export const Form = styled(_Form)`
  ${tw`grid gap-y-2.4`}
`;
