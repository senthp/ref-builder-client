import { DefaultButton, PrimaryButton } from './styles';

const Button = (StyledButton) => ({ children, onClick, ...otherProps }) => (
  <StyledButton onClick={onClick} {...otherProps}>
    {children}
  </StyledButton>
);

export default {
  Primary: Button(PrimaryButton),
  Default: Button(DefaultButton),
};
