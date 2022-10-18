import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import _Link from "next/link";
import { isEmpty } from "lodash";

import { getLoggedInAccount, getUserCookies } from "@common/utils/auth";

import { PATH } from "@routes";
import { IRootState } from "@redux/reducers";
import { getCurrentUser } from "@redux/actions/auth";

import UserInfo from "./components/UserInfo";
import Hamburger from "./components/Hamburger";
import Notification from "./components/Notification";
import ContentNotify from "./components/ContentNotify";
import {
  HeaderWrapper,
  HeaderContainer,
  LogoLink,
  Text,
  NavigationWrapper,
  PageNavigation,
  AuthenNavigation,
  Link,
  Button,
  Mobile,
  NotifyContainer,
  GroupInfo,
  SwitchWrapper,
  SwitchTitle,
} from "./styles";
import {
  getNotificationsByUser,
  getNotificationsSetting,
  getNotificationsSettingByUser,
} from "@redux/actions/notification";
import useAuth from "@common/hooks/useAuth";
import { SVG } from "@designs/SVG";
import Switch from "@designs/Switch";
import AlertDialog from "@components/AlertDialog";
import { updateUserProfile } from "@redux/actions/user";
import { IUpdateUserInput } from "@common/typings";
import { refreshToken } from "@redux/actions/auth";
import { resetAction } from "@redux/actions/common";

interface IHeaderProps {
  type?: "job" | "company";
}

const Header = (props: IHeaderProps) => {
  const { type = "" } = props;

  const { t } = useTranslation(["common"]);
  const dispatch = useDispatch();

  const { isAuth } = useAuth();
  const { currentUser } = useSelector((state: IRootState) => state.auth);
  const userInfo = currentUser?.userInfo || {};
  const { actionSuccess } = useSelector((state: IRootState) => state.actions);
  const [onSeekingJob, setOnSeekingJob] = useState<boolean>();

  useEffect(() => {
    if (actionSuccess) {
      dispatch(refreshToken());
      dispatch(resetAction());
    }
  }, [actionSuccess]);

  useEffect(() => {
    if (isEmpty(currentUser) && userInfo?.email !== null) {
      dispatch(getCurrentUser(getLoggedInAccount()));
    } else {
      dispatch(getNotificationsByUser({ userId: userInfo?._id }));
      dispatch(
        getNotificationsSettingByUser({
          id: userInfo?._id,
        }),
        // getNotificationsSettingById({
        //   id: userInfo?._id,
        // }),
      );
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.userInfo?.isSeekingJob === true) {
      setOnSeekingJob(true);
    } else {
      setOnSeekingJob(false);
    }
  }, [actionSuccess, currentUser]);

  const handleConfirm = () => {
    const payload: IUpdateUserInput = {
      updateUserInput: {
        isSeekingJob: !onSeekingJob,
      },
    };
    dispatch(updateUserProfile(payload));
  };

  return (
    <>
      <HeaderWrapper className="wrapper">
        <HeaderContainer className="container">
          <LogoLink routeName={PATH.HOME}>
            <SVG name="logo/logo" />
          </LogoLink>
          {/*
           * Desktop navigation
           */}
          <NavigationWrapper>
            <PageNavigation>
              <Fragment>
                <Link highlight={type === "job"} routeName={PATH.JOB}>
                  {t("header.job")}
                </Link>
                <Link highlight={type === "company"} routeName={PATH.COMPANY}>
                  {t("header.company")}
                </Link>
              </Fragment>
            </PageNavigation>
            {isAuth ? (
              <GroupInfo>
                <SwitchWrapper hasBorderLeft={false}>
                  <SwitchTitle>Tìm việc</SwitchTitle>
                  <AlertDialog
                    ButtonMenu={<Switch enabled={onSeekingJob} />}
                    title={"Bật/tắt chế độ tìm việc"}
                    content={`Bạn có muốn thay đổi chế độ tìm việc không?`}
                    onConfirm={handleConfirm}
                  />
                </SwitchWrapper>
                <NotifyContainer hasBorderLeft={false}>
                  <Notification />
                </NotifyContainer>
                <UserInfo />
              </GroupInfo>
            ) : (
              <AuthenNavigation>
                <_Link href="https://employer.tuyendungvn.com/">
                  <Text>{t("header.employer")}</Text>
                </_Link>
                <NotifyContainer hasBorderLeft={true}>
                  <Notification />
                </NotifyContainer>
                <Button outline routeName={PATH.REGISTER}>
                  {t("header.register")}
                </Button>
                <Button fullFill routeName={PATH.LOGIN}>
                  {t("header.login")}
                </Button>
              </AuthenNavigation>
            )}
          </NavigationWrapper>

          {/*
           * Mobile navigation
           */}
          <Mobile.NavigationWrapper>
            <Hamburger />
          </Mobile.NavigationWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <ContentNotify />
    </>
  );
};
export default Header;
