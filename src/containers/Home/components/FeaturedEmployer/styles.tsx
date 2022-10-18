import styled from "styled-components";
import tw from "twin.macro";
import _Link from "@designs/Link";

export const FeaturedEmployerContainer = styled.div`
  ${tw`mx-auto mt-4 mb-10`}
  .slick-slide {
    ${tw`grid gap-2`}
    & > div {
      ${tw`flex gap-2`}
    }
  }
  @media screen and (max-width: 600px) {
    .slick-track {
      ${tw`flex gap-0`}
    }
  }
`;

export const Title = styled.h2`
  ${tw`mb-5 font-bold text-center text-black text-20 phone:text-30`}
`;

export const ItemWrapper = styled.div`
  ${tw`p-2 bg-white border focus:outline-none border-grey`}
`;

export const Item = styled.div`
  ${tw`flex flex-col items-center justify-between w-full gap-x-1 phone:flex-row `}
`;

export const ItemContent = styled.div`
  ${tw`flex justify-start w-full gap-2 mb-1 phone:mb-0`}
`;

export const ImageContainer = styled.div`
  ${tw`flex items-center`}
`;
export const ImageWrapper = styled.div`
  ${tw`flex items-center justify-center w-8 h-8 col-span-3 p-1 overflow-hidden border phone:h-10 phone:w-10 border-grey`}
`;

export const Image = styled.img`
  ${tw`object-cover w-full duration-150 transform group-hover:scale-110`}
`;

export const InfoWrapper = styled.div`
  ${tw`flex flex-col items-start w-full col-span-9 phone:items-start phone:justify-center gap-y-1`}
`;

export const Name = styled.p`
  ${tw`font-bold text-16 phone:text-20 hover:text-secondary`}
`;

export const Location = styled.p`
  ${tw`font-normal text-14 phone:text-16`}
`;
export const ButtonContainer = styled.div`
  ${tw`w-full phone:w-10`}
`;
export const Button = styled(_Link)`
  ${tw` py-1 px-1 w-full text-center border phone:w-max border-primary text-primary hover:bg-primary hover:text-white`}
`;

export const Card = {
  Container: styled.div`
    ${tw``}
  `,
  ContainerLogo: styled.div`
    ${tw`flex h-full items-center`}
  `,

  Logo: styled.div`
    ${tw`phone:h-11 phone:w-11 h-8 w-8  p-1 border border-grey `}
  `,
  Img: styled.img`
    ${tw`w-full object-cover `}
  `,
  Text: styled.div`
    ${tw`flex flex-col justify-center`}
  `,
  Name: styled.p`
    ${tw`font-bold break-words`}
  `,
  Company: styled.p`
    ${tw`my-1 leading-none`}
  `,
  Province: styled.p`
    ${tw`truncate w-[200px] phone:w-auto`}
  `,
};
export const LinkWrapper = styled.div`
  ${tw``}
`;
export const Link = styled(_Link)`
  ${tw`text-14 p-1.5 phone:px-4 phone:py-3 min-h-[150px] phone:min-h-0 bg-white hover:shadow duration-100 flex  border border-grey phone:text-16 font-normal items-center gap-2 laptop:leading-8  `}
`;
