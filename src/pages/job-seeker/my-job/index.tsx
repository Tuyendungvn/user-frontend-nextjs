import { Fragment } from "react";
import { NextPage } from "next";
import { END } from "redux-saga";
import { wrapper } from "@redux/store";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { withAuth } from "@common/HOC/withAuth";
import { withRecord } from "@common/HOC/withRecord";
import { SSGContext } from "@common/typings";

import Main, { getAllBasicAPIForPage } from "@layouts/Main";
import TabLayout from "@layouts/TabJob";
import { PATH } from "@routes";

import MyJob from "@containers/JobSeeker/my-job";
import { FindCompanyAPICaller } from "@containers/CompanyResult/helper";

import Meta from "@components/Meta";
import { getAllMostKeyword } from "@redux/actions/recruitment";

const Page: NextPage = (props) => {
  const { t } = useTranslation(["common"]);
  return (
    <Fragment>
      <Meta title={t("header.my-job")} routeName={PATH.JOB_MANAGEMENT_MYJOB} />
      <Main>
        <TabLayout active={"MY_JOB"}>
          <MyJob />
        </TabLayout>
      </Main>
    </Fragment>
  );
};

export default withAuth(withRecord(Page));

export const getStaticProps = wrapper.getStaticProps(
  async (context: SSGContext) => {
    const {
      locale = "vi",
      store: { dispatch, sagaTask },
    } = context;

    const apiCaller = new FindCompanyAPICaller({ dispatch });
    await apiCaller.getProvinces();
    getAllBasicAPIForPage(locale, dispatch);
    dispatch(getAllMostKeyword());
    dispatch(END);
    await sagaTask.toPromise();

    return {
      props: {
        locale,
        ...(await serverSideTranslations(locale)),
      },
      revalidate: 3600,
    };
  },
);
