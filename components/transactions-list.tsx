import { useTransactions } from "../hooks/use-transactions";
import type { TransactionStatus, MempoolTransactionStatus } from '@stacks/stacks-blockchain-api-types';

export const TransactionsList = () => {
    const { transactions, isLoading, hasError } = useTransactions();

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (hasError) {
        return <h2>Could not get transactions.</h2>;
    }

    return  (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Transaction</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.id}</td>
                            <td>{getTransactionStatusDisplayName(transaction.status)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const getTransactionStatusDisplayName = (status: TransactionStatus | MempoolTransactionStatus) => {
    switch (status) {
        case 'success':
            return 'Success';
        
        case 'pending':
            return 'Pending';

        default:
            return 'Other';
    }
}