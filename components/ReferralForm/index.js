import { string, shape, func, bool } from 'prop-types';
import { FormInput, Button } from '../base';
import { FormWrapper, FormTitle, FormSection, ActionsWrapper } from './styles';
import { SecondaryHeading, ErrorMessage } from '../base/styles';

const ReferralForm = ({ referral, onChange, onSubmit, isSaving, errors }) => {
  const isFormValid = Object.values(referral).every((value) =>
    Boolean(value.trim())
  );

  return (
    <FormWrapper>
      <form>
        <FormTitle> Referral Builder</FormTitle>
        <SecondaryHeading>Personal Details</SecondaryHeading>
        <FormSection>
          <FormInput
            name="givenName"
            label="GIVEN NAME"
            length={20}
            value={referral.givenName || ''}
            onChange={onChange}
          />
          <FormInput
            name="surName"
            label="SURNAME"
            length={30}
            value={referral.surName || ''}
            onChange={onChange}
          />
          <FormInput
            name="email"
            label="EMAIL"
            length={30}
            value={referral.email || ''}
            onChange={onChange}
          />
          <FormInput
            name="phone"
            label="PHONE"
            length={15}
            value={referral.phone || ''}
            onChange={onChange}
          />
        </FormSection>
        <SecondaryHeading>Address</SecondaryHeading>
        <FormSection>
          <FormInput
            name="streetNumber"
            label="HOME NAME OR #"
            length={20}
            value={referral.streetNumber || ''}
            onChange={onChange}
          />
          <FormInput
            name="streetName"
            label="STREET"
            length={40}
            value={referral.streetName || ''}
            onChange={onChange}
          />
          <FormInput
            name="suburb"
            label="SUBURB"
            length={30}
            value={referral.suburb || ''}
            onChange={onChange}
          />
          <FormInput
            name="state"
            label="STATE"
            length={15}
            value={referral.state || ''}
            onChange={onChange}
          />
          <FormInput
            name="postcode"
            label="POSTCODE"
            length={8}
            value={referral.postcode || ''}
            onChange={onChange}
          />
          <FormInput
            name="country"
            label="COUNTRY"
            length={15}
            value={referral.country || ''}
            onChange={onChange}
          />
        </FormSection>
      </form>
      <ErrorMessage>{errors.submit}</ErrorMessage>
      <ActionsWrapper>
        <Button.Default>UPLOAD AVATAR</Button.Default>
        <Button.Primary onClick={onSubmit} disabled={isSaving || !isFormValid}>
          {isSaving ? 'CREATING REFERRAL...' : 'CREATE REFERRAL'}
        </Button.Primary>
      </ActionsWrapper>
    </FormWrapper>
  );
};

ReferralForm.propTypes = {
  referral: shape({
    givenName: string,
    surName: string,
    email: string,
    phone: string,
    streetNumber: string,
    streetName: string,
    suburb: string,
    state: string,
    postcode: string,
    country: string,
  }).isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  isSaving: bool,
  errors: shape({}),
};

ReferralForm.defaultProps = {
  isSaving: false,
};

export default ReferralForm;
