import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IAds, IMongoObjectId, IRootState } from "@common/typings";
import { filterAdByLocation } from "@common/functions/filter";
import { AdsContainer } from "./styles";
interface IAdsProps {
  ads: IAds;
}

const AdsImage: React.FC<IAdsProps> = (props) => {
  const { ads } = props;
  const { urlImage, name, link } = ads || {};
  return (
    <AdsContainer className="container">
      <a href={link}>
        <LazyLoadImage
          className="w-full h-full"
          src={urlImage?.medium || urlImage?.default}
          alt={name}
          effect="blur"
          width="100%"
          height="100%"
          sizes={`
          (min-width: 600px) 600w,
          (min-width: 800px) 800w
        `}
          srcSet={`
        ${urlImage?.small || urlImage?.default} 600w
        ${urlImage?.medium || urlImage?.default} 800w
        `}
        />
      </a>
    </AdsContainer>
  );
};

export default AdsImage;
