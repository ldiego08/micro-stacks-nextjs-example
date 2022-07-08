import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import { ClientProvider } from '@micro-stacks/react';
import { saveSession } from '../lib/save-session';
import { destroySession } from '../lib/destroy-session';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('pageProps.dehydratedState', pageProps.dehydratedState);
  return (
    <ClientProvider
      appName={'Nextjs + Microstacks'}
      appIconUrl={'/'}
      dehydratedState={pageProps.dehydratedState}
      onPersistState={async dehydratedState_ => {
        await saveSession(dehydratedState_);
      }}
      onSignOut={async () => {
        await destroySession();
      }}
    >
      <Component {...pageProps} />
    </ClientProvider>
  );
}

export default MyApp;
