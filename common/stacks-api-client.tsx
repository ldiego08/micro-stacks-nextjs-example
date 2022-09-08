import { StacksApiWebSocketClient } from "@stacks/blockchain-api-client";
import { createContext, FC, useContext } from "react";

export const StacksApiClientContext = createContext<{ client?: StacksApiWebSocketClient }>({});

export type StacksApiClientProviderProps = { 
    client?: StacksApiWebSocketClient; 
    children: JSX.Element; 
};

export const StacksApiClientProvider = ({ client, children }: StacksApiClientProviderProps) => (
    <StacksApiClientContext.Provider value={{ client }}>
        {children}
    </StacksApiClientContext.Provider>
);

export const useStacksApiClient = () => useContext(StacksApiClientContext);
