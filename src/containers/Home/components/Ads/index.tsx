import Link from "@designs/Link";
import { PATH } from "@routes";
import { AdsContainer, AdImage } from "./styles";

interface IAdsProps {
  code: string;
}

const Ads: React.FC<IAdsProps> = (props) => {
  const { code } = props;
  return (
    <AdsContainer>
      <Link routeName={PATH.JOB}>
        <AdImage className="mb-2" dangerouslySetInnerHTML={{ __html: code }} />
      </Link>
    </AdsContainer>
  );
};

export default Ads;
