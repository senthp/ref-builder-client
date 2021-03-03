import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReferralBuilder from '../components/ReferralBuilder';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <Head>
        <title>Referral Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <QueryClientProvider client={queryClient}>
          <ReferralBuilder />
        </QueryClientProvider>
      </main>
    </div>
  );
}
