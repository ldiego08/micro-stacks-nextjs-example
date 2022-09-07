import { useAuth, useNetwork } from '@micro-stacks/react';

export const WalletConnectButton = () => {
  const { setNetwork } = useNetwork();
  const { openAuthRequest, isRequestPending, signOut, isSignedIn } = useAuth();
  
  const label = isRequestPending ? 'Loading...' : isSignedIn ? 'Sign out' : 'Connect Stacks wallet';
  
  return (
    <button
      onClick={async () => {
        if (isSignedIn) await signOut();
        else { 
          setNetwork('testnet'); // required, or else useAccount will always show mainnet acct.
          await openAuthRequest()
        };
      }}
    >
      {label}
    </button>
  );
};
