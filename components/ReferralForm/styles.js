import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  padding: 40px;
`;

export const FormTitle = styled.p`
  font-size: 35px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  padding-bottom: 20px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > * {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
  }

  @media (max-width: 608px) {
    flex-direction: column;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  > * {
    flex-basis: calc(50% - 20px);
  }
`;
