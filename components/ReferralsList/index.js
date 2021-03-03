import { FaPen, FaTrash } from 'react-icons/fa';
import {
  Wrapper,
  ReferralsListContainer,
  StyledHeader,
  Row,
  Col,
  Actions,
} from './styles';

const Header = () => (
  <StyledHeader>
    {['Given Name', 'Surname', 'Email', 'Phone', 'Actions'].map(
      (fieldTitle) => (
        <Col key={fieldTitle}>{fieldTitle.toUpperCase()}</Col>
      )
    )}
  </StyledHeader>
);

const Referral = ({ referral }) => (
  <Row>
    {['givenName', 'surName', 'email', 'phone'].map((fieldName) => (
      <Col key={fieldName}>{referral[fieldName]}</Col>
    ))}
    <Col>
      <Actions>
        <FaPen onClick={() => console.log('editing :' + referral.givenName)} />
        <FaTrash
          onClick={() => console.log('deleting :' + referral.givenName)}
        />
      </Actions>
    </Col>
  </Row>
);

const ReferralsList = ({ referrals = [] }) => {
  return (
    <Wrapper>
      <ReferralsListContainer>
        <Header />
        {referrals.map((referral) => (
          <Referral key={referral.email} referral={referral} />
        ))}
      </ReferralsListContainer>
    </Wrapper>
  );
};

export default ReferralsList;
