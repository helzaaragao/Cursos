
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

//  Utilizamos para fazer hooks quando a lógica se torna grande demais para ficar em um componente solto, melhor organizar em uma pasta própria para manutenção
export function useSummary() {
  const  transactions = useContextSelector(TransactionsContext, (context) => { 
    return context.transactions
  })

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
