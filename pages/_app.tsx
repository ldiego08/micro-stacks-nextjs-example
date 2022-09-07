import '../styles/globals.css';
import { ClientProvider } from '@micro-stacks/react';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientProvider
      appName="Nextjs + Microstacks"
      appIconUrl="/vercel.png"
      dehydratedState={pageProps?.dehydratedState}
    >
      <Component {...pageProps} />
    </ClientProvider>
  );
}

export default MyApp;
