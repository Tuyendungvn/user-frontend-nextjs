import styled from "styled-components";
import tw from "twin.macro";

export const SortWrapper = styled.div`
  ${tw`grid items-center w-full grid-cols-12 gap-2`}
`;
export const TotalContainer = styled.div`
  ${tw`flex col-span-12 phone:font-medium leading-none text-20 pb-1 font-bold justify-center phone:justify-start phone:col-span-5 phone:pb-0`}
`;
export const SortContainer = styled.div`
  ${tw`flex items-center justify-end col-span-12 gap-1 font-medium leading-none phone:col-span-7 text-16`}
`;
export const SortLabel = styled.div`
  ${tw``}
`;
