import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: #efefef;
  padding: 60px 40px;
  height: 100vh;
`;

export const ReferralsListContainer = styled.div`
  background-color: #fff;
  padding: 25px;
  height: 100%;
  overflow-y: auto;
  border-radius: 5px;
`;

export const Row = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
  justify-content: stretch;
  padding: 10px 0;
`;

export const Col = styled.div`
  flex: 1 1 120px;
  margin-right: 5px;
  overflow: hidden;
  word-wrap: break-word;
  color: #a9a9a9;
`;

export const StyledHeader = styled(Row)`
  font-size: 1.1rem;
  font-weight: 700;
  color: #bbb;
`;

export const Actions = styled.div`
  > * {
    cursor: pointer;
    margin-right: 20px;
  }
`;
