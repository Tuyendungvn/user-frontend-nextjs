import { Container, Content, Title, SubTitle, Text } from "./styles";

interface IITemProps {
  title: string;
  content: string;
  duration: string;
  description: string;
}

const Item: React.FC<IITemProps> = (props) => {
  const { title, content, duration, description = "" } = props;

  const formatText = (description: string) => {
    const regex = /(?:\r\n|\r|\n)/g;
    if (description) {
      return description.replace(regex, "<br>");
    } else {
      return;
    }
  };

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{content}</SubTitle>
        {duration && <Text>{duration}</Text>}
        <Text
          dangerouslySetInnerHTML={{ __html: formatText(description) }}
        ></Text>
      </Content>
    </Container>
  );
};

export default Item;
