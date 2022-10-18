import { SVG } from "@designs/SVG";
import { Container, Text } from "./styles";

interface IAddProps {
  children: React.ReactNode;
}

const Add: React.FC<IAddProps> = (props) => {
  const { children } = props;
  return (
    <Container>
      <SVG name="common/add-icon" className="w-3 phone:w-4" />
      <Text>{children}</Text>
    </Container>
  );
};

export default Add;
