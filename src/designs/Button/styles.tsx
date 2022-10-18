import styled from "styled-components";
import tw from "twin.macro";

export const ButtonContainer = styled.button<{
  primary?: boolean;
  loading?: boolean;
}>`
  ${tw`flex items-center justify-center py-1 font-semibold text-14 phone:text-16`}
  ${({ primary }) =>
    primary
      ? tw`text-white duration-100 bg-primary hover:bg-opacity-80`
      : tw`text-primary duration-100 bg-white hover:bg-primary hover:text-white`}
  ${({ loading }) =>
    loading ? tw`cursor-wait pointer-events-none bg-opacity-60` : ""}
`;
