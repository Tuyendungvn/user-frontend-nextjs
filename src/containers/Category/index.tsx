import Content from "./components/Content";

import { CategoryContainer, Container } from "./styles";

interface ICategory {}

const Category: React.FC<ICategory> = (props) => {
  return (
    <CategoryContainer className="wrapper">
      <Container className="container">
        <Content />
      </Container>
    </CategoryContainer>
  );
};

export default Category;
