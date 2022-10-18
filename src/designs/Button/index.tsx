import { ButtonContainer } from "./styles";
import Spinner from "@designs/icons/Spinner";

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  primary?: boolean;
  className?: string;
  loading?: boolean;
  innerClassName?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    primary,
    children,
    className,
    loading,
    innerClassName = "",
    ...rest
  } = props;
  return (
    <ButtonContainer
      loading={loading}
      className={className}
      primary={primary}
      {...(rest as any)}
    >
      {loading && <Spinner className="mr-1 text-white" />}
      {children}
    </ButtonContainer>
  );
};

export default Button;
