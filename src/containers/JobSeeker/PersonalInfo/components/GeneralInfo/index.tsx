import { SVG } from "@designs/SVG";

import EditGeneralInfoDialog from "./components/EditGeneralInfoDialog";
import { Container, Description, Text, Title, TitleWrapper } from "./styles";

export interface IGeneralInfoProps {
  displayName: string;
  code: string;
  title: string;
  description: string;
  userId: string;
  career: string[];
}

const GeneralInfo: React.FC<IGeneralInfoProps> = (props) => {
  const { displayName, code, title, description = "" } = props;

  const handleName = () => {
    if (!!displayName) {
      return displayName;
    }
    return !!code && `User ${code}`;
  };

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
      <TitleWrapper>
        <Title>{handleName()}</Title>
        <EditGeneralInfoDialog
          {...props}
          ButtonMenu={<SVG name="job-management/edit" />}
        />
      </TitleWrapper>

      <Text>{code}</Text>
      <Text>{title}</Text>

      <Description
        dangerouslySetInnerHTML={{ __html: formatText(description) }}
      ></Description>
    </Container>
  );
};

export default GeneralInfo;
