import { useMutation } from 'react-query';
import axios from 'axios';

const createReferral = (newReferral) => {
  return axios.post('http://localhost:5000/referral', newReferral);
};

export default function useCreateReferral(queryClient) {
  return useMutation(createReferral, {
    onSuccess: () => {
      queryClient.invalidateQueries('referrals');
    },
  });
}
