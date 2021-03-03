import { useState } from 'react';
import { useQueryClient } from 'react-query';
import Referral from '../../models/Referral';
import ReferralForm from '../ReferralForm';
import ReferralsList from '../ReferralsList';
import useReferrals from '../../queries/referrals';
import useCreateReferral from '../../mutations/createReferral';
import { PageWrapper, ContentWrapper } from './styles';

const ReferralBuilder = () => {
  const [referral, setReferral] = useState(new Referral());
  const queryClient = useQueryClient();

  const { isLoading, isError, data: referrals, error } = useReferrals();

  const {
    isLoading: isSubmitting,
    mutate: saveReferral,
    error: submitError,
  } = useCreateReferral(queryClient);

  const handleChange = (name, value) => {
    setReferral((prevReferral) => ({
      ...prevReferral,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    saveReferral(referral, {
      onSuccess: () => {
        setReferral(new Referral());
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <PageWrapper>
      <ContentWrapper>
        <div>
          <ReferralForm
            referral={referral}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isSaving={isSubmitting}
            errors={{ submit: submitError?.message }}
          />
        </div>
        <div>
          <ReferralsList referrals={referrals} />
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ReferralBuilder;
