import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./style";

interface Transaction { 
    id: number;
    description: string;
    type: 'income' | 'outcome'; 
    price: "number"; 
    category: string; 
    createAt: string; 
}

export function Transactions(){ 
    //quer que use uma unica vez e por isso usa o useEffect
    // Pegando a API fake e o useEffect não pode ter assync
    // posso colocar estado no meu card? deve pelo jeito
    const [transactions, setTransactions] = useState<Transaction[]>([]); 

    async function loadTransactions() { 
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();
        setTransactions(data); 
    }

    useEffect(() => {
        loadTransactions(); 
    }, [])
   

    return(
        <div>
            <Header></Header>
            <Summary></Summary>
            <TransactionsContainer>
             <SearchForm></SearchForm>
                <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => { 
                        return(
                            <tr key={transaction.id}>
                            <td width="50%">{transaction.description}</td>
                            <td>
                            <PriceHightLight variant="income">{transaction.price}</PriceHightLight>
                            </td>
                            
                            <td>{transaction.category}</td>
                            <td>{transaction.createAt}</td>
                        </tr>
                       
                        )
                    })}
                </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}