import styled from "styled-components";
import tw from "twin.macro";

export const ContentContainer = styled.div`
  ${tw`
    relative 
    inline-block 
    w-full 
    phone:w-full 
    phone:max-w-max 
    max-h-[90vh] 
    phone:min-w-[600px] 
    overflow-y-auto 
    text-left 
    align-middle 
    transition-all 
    transform 
    bg-white 
    shadow-xl
  `}
`;
