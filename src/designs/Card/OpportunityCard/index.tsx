import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";

import { renderLocation } from "@common/functions";
import { getUserCookies } from "@common/utils/auth";
import {
  IGetUser,
  IRecruitment,
  IRootState,
  ISetAppliedRecruitment,
} from "@common/typings";

import {
  Container,
  Content,
  Button,
  InfoWrapper,
  InfoItem,
  Link,
  Title,
  Wrapper,
  LinkWrapper,
  LinkDetail,
} from "./styles";

import {
  setAppliedRecruitment,
  setSeenRecruitment,
} from "@redux/actions/recruitment";
import { resetAction } from "@redux/actions/common";
import { getUserProfile } from "@redux/actions/user";
import { PATH } from "@routes";

interface IOpportunityProps {
  recruitment?: IRecruitment;
}

const Opportunity: React.FC<IOpportunityProps> = ({ recruitment }) => {
  const { t } = useTranslation(["company"]);
  const dispatch = useDispatch();

  const { user } = useSelector((state: IRootState) => state.user);

  const { name, level, location, slug, _id } = recruitment;
  const locationString = renderLocation(
    location.map((item) => item?.province?.name),
  );

  const { currentUser } = useSelector((state: IRootState) => state.auth);
  const { actionSuccess } = useSelector((state: IRootState) => state.actions);

  const [isApplied, setIsApplied] = useState<boolean>();

  const userInfo = currentUser?.userInfo || {};

  useEffect(() => {
    getUserProfileAPI();
  }, []);

  useEffect(() => {
    checkApplied();
  }, [user]);

  useEffect(() => {
    if (actionSuccess) {
      dispatch(resetAction());
      getUserProfileAPI();
      checkApplied();
    }
  }, [actionSuccess]);

  const setAppliedRecruitmentAPI = (userId: string, recruitmentId: string) => {
    const payload: ISetAppliedRecruitment = {
      userId: userId,
      recruitmentId: recruitmentId,
    };
    dispatch(setAppliedRecruitment(payload));
  };

  const getUserProfileAPI = () => {
    const payload: IGetUser = {
      id: getUserCookies()?.userInfo?._id,
    };
    dispatch(getUserProfile(payload));
  };

  const handleApply = () => {
    setAppliedRecruitmentAPI(userInfo?._id, _id);
  };

  const checkApplied = () => {
    const listAppliedId = user?.appliedRecruitment?.map(
      (item) => item?.recruitment?._id,
    );
    if (listAppliedId?.includes(_id)) {
      setIsApplied(true);
    }
  };

  const handleClickJob = () => {
    if (isEmpty(userInfo)) return;
    dispatch(
      setSeenRecruitment({
        userId: userInfo?._id,
        recruitmentId: _id,
      }),
    );
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <LinkWrapper onClick={handleClickJob}>
            <LinkDetail routeName={PATH.JOB_DETAIL} params={{ slug: slug }}>
              <Title title={name}>{name}</Title>
            </LinkDetail>
          </LinkWrapper>
          <InfoWrapper>
            <InfoItem>{level?.name}</InfoItem>
            <InfoItem>{locationString}</InfoItem>
          </InfoWrapper>
        </Content>
        {Object.keys(userInfo).length > 0 ? (
          <Button
            onClick={handleApply}
            style={{
              opacity: isApplied ? 0.5 : 1,
              pointerEvents: isApplied ? "none" : "initial",
            }}
          >
            {isApplied ? t("applied") : t("apply")}
          </Button>
        ) : (
          <Link routeName={PATH.LOGIN}>{t("apply")}</Link>
        )}
      </Container>
    </Wrapper>
  );
};

export default Opportunity;
