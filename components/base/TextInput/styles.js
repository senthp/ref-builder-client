import styled from '@emotion/styled';

export const FormInputWrapper = styled.div`
  label {
    display: block;
    color: #b0b8bc;
    margin-bottom: 4px;
  }

  input {
    font-size: 1.6rem;
    width: 100%;
    height: 3.5rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
  }

  input:active,
  input:focus {
    outline: none;
    border-color: #0b0 !important;
    border-width: 2px;
  }
`;
