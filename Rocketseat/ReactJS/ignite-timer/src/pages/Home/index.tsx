import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles.ts'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm/index.tsx'
import { CountDown } from './components/CountDown/index.tsx'
import { CyclesContext } from '../../contexts/CyclesContext.tsx'

// controlled (mantem em tempo real controle do que o usuario está digitando ou fazendo em uma variavel | toda vez atualiza quando utilizada e pode ser um peso ao sistema em certos momentos/ uncontrolled ( você não ver em tempo real mas fica sem atualizar tudo quando utilizada e atualiza apenas uma vez)

/* 
   function register ( name: string)`{
    return { 
      onChange()
      ref 
      requited?
    }
   }
*/

// interface NewCycleFormData{
//    task: string
//    minutesAmount: number
// }

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O cicle precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

// formato dos ciclos

export function Home() {
  const { activeCycle, createNewCycle, interruptCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  // converter o numero de minutos em segundos pois a aplicação vai precisar

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  /*
  Prop Drilling -> Quando a gente tem MUITAS propriedades APENAS para comunicação entre componentes
  tem mais de 3 propriedades para um componente só, começa a ficar complicado para dá manutenção
  O que resolve é Context API --> permite compartilhamos informações entre vários compoenntes ao mesmo tempo, como se fosse informações globais que todos tem acesso 
  */

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm></NewCycleForm>
        </FormProvider>

        <CountDown></CountDown>

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCycle} type="button">
            <HandPalm size={24}></HandPalm>
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24}></Play>
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
