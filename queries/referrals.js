import { useQuery } from 'react-query';
import axios from 'axios';

export default function useReferrals() {
  return useQuery('referrals', async () => {
    const { data } = await axios.get('http://localhost:5000/referrals');
    return data;
  });
}
