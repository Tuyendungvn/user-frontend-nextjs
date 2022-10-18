import styled from "styled-components";
import tw from "twin.macro";
import _Button from "@designs/Button";
import _Link from "@designs/Link";

export const CardContainer = styled.div`
  ${tw`grid grid-cols-12 items-center p-1.5 laptop:p-4 border border-grey gap-3`}
`;
export const LeftCard = styled.div`
  ${tw`grid col-span-12 phone:col-span-8`}
`;
export const Title = styled.h4`
  ${tw`mb-2 text-black duration-300 hover:text-primary text-16 laptop:text-20`}
`;
export const Content = styled.div`
  ${tw`flex flex-col items-start phone:flex-row phone:items-center`}
`;
export const Text = styled.p`
  ${tw`relative mr-4 font-normal break-words text-13 laptop:text-16`}
  &:not(:last-child) {
    &:after {
      content: "";
      ${tw`absolute hidden phone:block top-0 w-[1px] bg-black h-full -right-2`};
    }
  }
`;
export const ButtonDelete = styled(_Button)`
  ${tw`text-white bg-primary text-14 laptop:text-16 h-5 w-15 hover:bg-opacity-80`}
`;
export const RightCard = styled.div`
  ${tw`flex items-center justify-start col-span-12 gap-x-2 phone:justify-end phone:col-span-4`}
`;
export const ButtonApplied = styled.div`
  ${tw`flex items-center justify-center h-5 font-medium leading-none transition duration-200 border cursor-pointer w-15 border-primary text-primary text-14 laptop:text-16 hover:bg-primary hover:text-white hover:border-primary`}
`;
