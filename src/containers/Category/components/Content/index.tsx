import { Wrapper, Title, MainContent } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@redux/reducers";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getBlogBySlug } from "@redux/actions/blog";
import { IGetBlogBySlug } from "@common/typings";
import "moment/locale/vi";

interface IContent {}

const Content: React.FC<IContent> = (props) => {
  const { staticPageDetail } = useSelector(
    (state: IRootState) => state.staticPages,
  );
  const { name, content } = staticPageDetail || {};
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;

  const getBlogBySlugAPI = (payload: IGetBlogBySlug) => {
    dispatch(getBlogBySlug(payload));
  };
  useEffect(() => {
    const payload: IGetBlogBySlug = {
      slug: String(slug),
    };
    getBlogBySlugAPI(payload);
  }, []);

  return (
    <Wrapper>
      <Title>{name}</Title>
      <MainContent dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  );
};

export default Content;
