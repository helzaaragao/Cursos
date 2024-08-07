import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions(){ 
    return(
        <div>
            <Header></Header>
            <Summary></Summary>
            <TransactionsContainer>
                <TransactionsTable>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>
                        <PriceHightLight variant="income">R$ 13.259,00</PriceHightLight>
                        </td>
                        
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td>Hamburguer</td>
                        <td>
                        <PriceHightLight variant="outcome">R$ -3.000,00</PriceHightLight>
                        </td>
                        
                        <td>Alimentação</td>
                        <td>13/04/2022</td>
                    </tr>
                </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}