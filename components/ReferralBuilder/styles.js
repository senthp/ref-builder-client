import styled from '@emotion/styled';

export const PageWrapper = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;

  > div {
    flex: 1;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
