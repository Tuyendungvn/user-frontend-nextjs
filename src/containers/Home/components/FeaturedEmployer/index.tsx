import { useTranslation } from "next-i18next";
import { Settings } from "react-slick";
import SlickSlider from "@designs/SlickSlider";

import { IRootState } from "@common/typings";
import { PATH } from "@routes";

import {
  FeaturedEmployerContainer,
  Title,
  InfoWrapper,
  Name,
  Location,
  Card,
  LinkWrapper,
  Link,
} from "./styles";
import { useSelector } from "react-redux";

interface IFeaturedEmployerProps {}

const skeletonImage = "/img/skeleton/default-small.jpg";

const FeaturedEmployer: React.FC<IFeaturedEmployerProps> = (props) => {
  const {
    allCompany: { results: listCompany = [], loading: loadingCompany = true },
  } = useSelector((state: IRootState) => state.company);

  const { t } = useTranslation(["home"]);

  const custom: Settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    slidesPerRow: 2,
    rows: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesPerRow: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    !loadingCompany &&
    listCompany.length > 0 && (
      <FeaturedEmployerContainer className="container">
        <Title>{t("employer.featured-employer")}</Title>
        <SlickSlider custom={custom}>
          {listCompany?.map((item, index) => (
            <Card.Container key={`card-item-${index}`}>
              <LinkWrapper>
                <Link
                  routeName={PATH.COMPANY_DETAIL}
                  params={{ slug: item?.slug }}
                >
                  <Card.ContainerLogo>
                    <Card.Logo>
                      <Card.Img
                        src={
                          item?.logo?.small ||
                          item?.logo?.default ||
                          skeletonImage
                        }
                      />
                    </Card.Logo>
                  </Card.ContainerLogo>
                  <InfoWrapper>
                    <Name title={item?.name} className="paragraph-with-2-line">
                      {item?.name}
                    </Name>
                    <Location
                      title={item?.location}
                      className="paragraph-with-1-line"
                    >
                      {item?.location}
                    </Location>
                  </InfoWrapper>
                </Link>
              </LinkWrapper>
            </Card.Container>
          ))}
        </SlickSlider>
      </FeaturedEmployerContainer>
    )
  );
};

export default FeaturedEmployer;
