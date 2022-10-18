import styled from "styled-components";
import tw from "twin.macro";

export const EditorContainer = styled.div<{ disabled: boolean }>`
  ${({ disabled }) => disabled && tw`cursor-not-allowed`}
`;

export const Label = styled.p`
  ${tw`font-normal text-16 mb-0.5`}
`;

export const Required = styled.span`
  ${tw`text-16 font-medium text-error ml-0.5`}
`;

export const Error = styled.p`
  ${tw`flex items-center text-14 text-error font-normal mt-1`}
`;
