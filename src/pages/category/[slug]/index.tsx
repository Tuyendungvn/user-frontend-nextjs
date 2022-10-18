import { Fragment } from "react";
import { NextPage } from "next";
import { END } from "redux-saga";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import Main from "@layouts/Main";
import { getAllBasicAPIForPage } from "@layouts/Main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IRootState, SSGContext } from "@common/typings";
import { useSelector } from "react-redux";
import { PATH } from "@routes";
import { getStaticPageBySlug } from "@redux/actions/staticPages";
import Category from "@containers/Category";

const CategoryPage: NextPage = () => {
  const { staticPageDetail } = useSelector(
    (state: IRootState) => state.staticPages,
  );
  return (
    <Fragment>
      <Meta title={staticPageDetail?.name} routeName={PATH.CATEGORY} />
      <Main noBackground={true}>
        <Category />
      </Main>
    </Fragment>
  );
};

export default CategoryPage;

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: SSGContext) => {
    const {
      locale,
      params,
      store: { dispatch, sagaTask },
    } = context;

    const { slug = "" } = params || {};

    dispatch(getStaticPageBySlug({ slug: String(slug) }));
    getAllBasicAPIForPage(locale, dispatch);

    dispatch(END);
    await sagaTask.toPromise();

    return {
      props: {
        locale,
        ...(await serverSideTranslations(locale, ["common", "home"])),
      },
    };
  },
);
