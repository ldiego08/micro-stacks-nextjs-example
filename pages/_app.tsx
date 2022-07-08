import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { saveSession } from '../common/save-session';
import { destroySession } from '../common/destroy-session';
import { ClientProvider } from '@micro-stacks/react';
import { ClientConfig } from '@micro-stacks/client';
import { useCallback } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const config: ClientConfig = {
    appName: 'Nextjs + Microstacks',
    appIconUrl: '/',
    onPersistState: useCallback(async (dehydratedState: string) => {
      await saveSession(dehydratedState);
    }, []),
    onSignOut: useCallback(async () => {
      await destroySession();
    }, []),
  };

  return (
    <ClientProvider {...config} dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </ClientProvider>
  );
}

export default MyApp;
