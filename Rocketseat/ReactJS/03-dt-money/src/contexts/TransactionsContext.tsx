import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction { 
    id: number;
    description: string;
    type: 'income' | 'outcome'; 
    price: number; 
    category: string; 
    createAt: string; 
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps{ 
    children: ReactNode; 
}
export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}: TransactionsProviderProps){
       //quer que use uma unica vez e por isso usa o useEffect
    // Pegando a API fake e o useEffect não pode ter assync
    // posso colocar estado no meu card? deve pelo jeito
    const [transactions, setTransactions] = useState<Transaction[]>([]); 

    async function fetchTransactions(query?: string) { 
        const url = new URL('http://localhost:3000/transactions')
        
        if(query){
            url.searchParams.append('q', query);
        }

        const response = await fetch(url)
        const data = await response.json();
        setTransactions(data); 
    }

    useEffect(() => {
        fetchTransactions(); 
    }, [])

    return(
        <TransactionsContext.Provider value ={{ transactions, fetchTransactions,  }}>
            {children}
        </TransactionsContext.Provider> 
    )
}
