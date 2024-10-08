
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from './style'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions  = useContextSelector(TransactionsContext, (context) => { 
    return context.transactions;
  })

  return (
    <div>
      <Header></Header>
      <Summary></Summary>
      <TransactionsContainer>
        <SearchForm></SearchForm>
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHightLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHightLight>
                  </td>

                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
