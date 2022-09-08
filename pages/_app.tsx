import '../styles/globals.css';
import { ClientProvider } from '@micro-stacks/react';

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { connectWebSocketClient, StacksApiWebSocketClient } from '@stacks/blockchain-api-client';
import { StacksApiClientProvider } from '../common/stacks-api-client';

function MyApp({ Component, pageProps }: AppProps) {
  const [stacksAPIClient, setStacksAPIClient] = useState<StacksApiWebSocketClient | undefined>(); 

  useEffect(() => {
    const initStacksApiClient = async () => {
      setStacksAPIClient(await connectWebSocketClient('wss://stacks-node-api.testnet.stacks.co/'));
    };

    if (!stacksAPIClient) {
      initStacksApiClient();
    }
  }, [stacksAPIClient])

  return (
    <ClientProvider
      appName="Nextjs + Microstacks"
      appIconUrl="/vercel.png"
      dehydratedState={pageProps?.dehydratedState}
    >
      <StacksApiClientProvider client={stacksAPIClient}>
        <Component {...pageProps} />
      </StacksApiClientProvider>
    </ClientProvider>
  );
}

export default MyApp;
