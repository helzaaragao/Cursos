import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

/* 

  Por que um componente renderiza? 
  Hooks changed (mudou estado, contexto, reducer)
  Props changed (mudou propriedade)
  Parent rerendered (componente pai renderizou)

  Qual o fluxo de renderização?
  O react recria o HTML da interface daquele componente
  Compara a versão do HTML recriada com a versão anterior
  Se mudou alguma coisa, ele rescreve o HTML na tela 

  Memo: 
  Hooks changed, Props Changed (deep comparasion)
  Comparar a versãop anterior dos Hooks e Props 
  Se mudou algo, ele vai permitir a nova renderização
  Isso só quando tiver pesado a aplicação com essa rendizações demais, não precisa fazer em TODO projeto
  E não faça o Memo em todos os arquivos da aplicação porque pode ficar ainda mais lento do que deixar o react comparar logo com html
  É apenas em *casos especificos*
  


*/

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => { 
    return context.fetchTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque  por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}></MagnifyingGlass>
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)