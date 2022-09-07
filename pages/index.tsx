import styles from '../styles/Home.module.css';

import { useAuth } from '@micro-stacks/react';

import { TransactionsList } from '../components/transactions-list';
import { WalletConnectButton } from '../components/wallet-connect-button';
import { UserCard } from '../components/user-card';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { isSignedIn } = useAuth();
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <UserCard />
        {isSignedIn && <TransactionsList />}
        <WalletConnectButton />
      </main>
    </div>
  );
};

export default Home;
