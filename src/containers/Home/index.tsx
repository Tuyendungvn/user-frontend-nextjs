import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { IRootState } from "@redux/reducers";

import Ads from "./components/Ads";
import Help from "./components/Help";
import Banner from "./components/Banner";
import Consult from "./components/Consult";
import CardLayout from "./components/CardLayout";
import BannerBenefit from "./components/BannerBenefit";
import FeaturedEmployer from "./components/FeaturedEmployer";

import { HomeContainer } from "./styles";
import { getAdsByLocation2 } from "./helper";
import { IAds } from "@common/typings";
import AdsImage from "./components/AdsImage";
interface IHome {}

const Home: React.FC<IHome> = (props) => {
  const { t } = useTranslation(["home"]);
  const [adsBottomCode, setAdsBottomCode] = useState<IAds[]>([]);
  const {
    bestRecruitment: { results: listBest = [], loading: loadingBest = true },
    allRecruitment: { results = [], loading = true },
  } = useSelector((state: IRootState) => state.recruitment);
  const { adsByLocation = [], loadingAdsByLocation = true } = useSelector(
    (state: IRootState) => state.ads,
  );

  useEffect(() => {
    getAdsByLocation2API();
  }, []);
  const getAdsByLocation2API = async () => {
    const result = await getAdsByLocation2();
    setAdsBottomCode(result);
  };

  return (
    <HomeContainer>
      <Banner />
      <CardLayout loading={loadingBest} data={listBest} title={t("best-job")} />
      <AdsImage ads={adsByLocation?.[0]} />
      {/* <Ads code={adsByLocation?.[0]?.urlImage.default} /> */}
      <BannerBenefit />
      <CardLayout loading={loading} data={results} title={t("newest-job")} />
      <AdsImage ads={adsBottomCode?.[0]} />
      {/* <Ads code={adsBottomCode?.[0]?.urlImage.default} /> */}
      <FeaturedEmployer />
      <Consult />
      <Help />
    </HomeContainer>
  );
};

export default Home;
