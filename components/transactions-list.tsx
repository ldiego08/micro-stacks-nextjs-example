import { useTransactions } from "../hooks/use-transactions";

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
                        <th>Tx ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, i) => (
                        <tr key={i}>
                            <td>{tx.id}</td>
                            <td>Confirmed</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}