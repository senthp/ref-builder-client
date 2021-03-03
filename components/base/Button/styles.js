import styled from '@emotion/styled';

export const DefaultButton = styled.button`
  display: inline-block;
  text-align: center;
  padding: 1em;
  min-width: 100px;
  min-height: 50px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: transparent;
  color: #aaa;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  box-shadow: 3px 3px 2px #ddd;
  outline: none;
  transition: 100ms all ease-in-out;

  :hover:not(:disabled) {
    box-shadow: 3px 3px 4px 4px #ddd;
    filter: saturate(80%);
  }

  :active {
    transform: translateY(1px);
  }
`;

export const PrimaryButton = styled(DefaultButton)`
  border: none;
  background-color: ${(props) => (props.disabled ? '#ddd' : '#0b0')};
  color: #fff;
`;
