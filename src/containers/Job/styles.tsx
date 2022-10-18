import styled from "styled-components";
import tw from "twin.macro";

export const JobWrapper = styled.div`
  ${tw`pb-4`}
`;
export const JobContainer = styled.div`
  ${tw``}
`;
export const Content = styled.div`
  ${tw`w-full grid grid-cols-12 gap-2`}
`;
export const SearchResultContainer = styled.div`
  ${tw`col-span-12 laptop:col-span-8`}
`;
export const ListCardsContainer = styled.div`
  ${tw`w-full`}
`;
export const ListCards = styled.div`
  ${tw`mt-2 flex flex-col gap-2`}
`;
export const AdsContainer = styled.div`
  ${tw`col-span-12 laptop:col-span-4 w-full h-full flex flex-col content-center mt-4 mb-8 laptop:mt-1 laptop:mb-0`}
`;
export const Ads = styled.div`
  ${tw`flex content-center mb-1 justify-center`}
`;
