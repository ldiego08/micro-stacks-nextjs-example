import axios, { AxiosResponse } from "axios";

import { useEffect, useState } from "react";
import { useAccount, useMicroStacksClient } from "@micro-stacks/react";
import { useStacksApiClient } from "../common/stacks-api-client";
import { StacksApiWebSocketClient } from "@stacks/blockchain-api-client";

import type { TransactionStatus, MempoolTransactionStatus } from '@stacks/stacks-blockchain-api-types';

export type Transaction = {
    id: string;
    type: string;
    status: TransactionStatus | MempoolTransactionStatus;
};

type TransactionsResponse = {
    results: [{
        tx_id: string;
        tx_status: TransactionStatus | MempoolTransactionStatus;
        tx_type: string;
    }];
};

type Subscription = Awaited<ReturnType<StacksApiWebSocketClient['subscribeAddressTransactions']>>;

export const useTransactions = () => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [shouldLoadTransactions, setShouldLoadTransactions] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const { stxAddress } = useAccount();

    const { client } = useStacksApiClient();

    const [subscription, setSubscription] = useState<Subscription | undefined>();
    const [shouldSubscribe, setShouldSubscribe] = useState(true);

    useEffect(() => {
        const getTransactions = async () => {
            setIsLoading(true);
            
            console.log(`Loading transactions for address ${stxAddress}`);

            try {
                const [mempoolTransactionsResponse, transactionsResponse] = await Promise.all([
                    axios.get<TransactionsResponse>(`https://stacks-node-api.testnet.stacks.co/extended/v1/tx/mempool?address=${stxAddress}`),
                    axios.get<TransactionsResponse>(`https://stacks-node-api.testnet.stacks.co/extended/v1/address/${stxAddress}/transactions`)
                ]);

                const transactions = mapTransactionResponses(mempoolTransactionsResponse.data, transactionsResponse.data);

                setTransactions(transactions);
                setShouldLoadTransactions(false);
            } catch (error) {
                setHasError(true);
            }

            setIsLoading(false);
        };

        if (shouldLoadTransactions) {
            getTransactions();
        }
    }, [stxAddress, shouldLoadTransactions]);


    useEffect(() => {
        const subscribe = async () => {
            if (!client || !stxAddress) {
                return;
            }

            const subscription = await client.subscribeAddressTransactions(stxAddress, (event) => { // this callback somehow detaches from the hook context, emptying the list for some reason.
                console.log(`Refreshing transactions for address ${event.tx_id}`);

                let transactionFound = false;

                const nextTransactions = transactions.map((transaction) => {
                    if (transaction.id === event.tx_id) {
                        transactionFound = true;

                        return {
                            ...transaction,
                            status: event.tx_status,
                        }
                    }

                    return transaction;
                });

                console.log({
                    transactions,
                    nextTransactions,
                })

                if (!transactionFound) {
                    nextTransactions.push({
                        id: event.tx_id,
                        type: event.tx_type,
                        status: event.tx_status,
                    })
                }

                setTransactions(nextTransactions);
            });

            console.log(`Listening for new transactions for address ${stxAddress}`);

            setSubscription(subscription);
            setShouldSubscribe(false);
        }

        if (shouldSubscribe) {
            subscribe();
        }
    }, [shouldSubscribe, client, stxAddress, subscription, transactions]);

    return {
        hasError,
        isLoading,
        transactions,
    }
}

const mapTransactionResponses = (mempoolTransactionsResponse: TransactionsResponse, transactionsResponse: TransactionsResponse) => {
    const mapTransactionResponse = (transactionResponse: TransactionsResponse['results'][0]) => ({
        id: transactionResponse.tx_id,
        status: transactionResponse.tx_status,
        type: transactionResponse.tx_type,
    });

    return [
        ...mempoolTransactionsResponse.results.map(mapTransactionResponse), 
        ...transactionsResponse.results.map(mapTransactionResponse)
    ];
}