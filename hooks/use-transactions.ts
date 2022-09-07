import axios, { AxiosResponse } from "axios";

import { useEffect, useState } from "react";
import { useAccount } from "@micro-stacks/react";

export type Transaction = {
    id: string;
    status: 'confirmed';
}

export const useTransactions = () => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [shouldLoadTransactions, setShouldLoadTransactions] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const { stxAddress } = useAccount();

    useEffect(() => {
        const getTransactions = async () => {
            setIsLoading(true);
            
            let response: AxiosResponse;

            try {
                response = await axios.get(`https://stacks-node-api.testnet.stacks.co/extended/v1/address/${stxAddress}/transactions`);
            } catch (error) {
                setHasError(true);
                return;
            }

            const transactions = response.data.results.map((tx: any) => ({
                id: tx.tx_id,
                status: 'confirmed',
            }));
            
            setTransactions(transactions);
            setShouldLoadTransactions(false);
            setIsLoading(false);
        };

        if (shouldLoadTransactions) {
            getTransactions();
        }
    }, [stxAddress, shouldLoadTransactions]);

    return {
        hasError,
        isLoading,
        transactions,
    }
}