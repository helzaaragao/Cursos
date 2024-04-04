import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
  StopCountdownButton,
} from './styles.ts'
import { useEffect, useState, createContext, useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm/index.tsx'
import { CountDown } from './components/CountDown/index.tsx'
// import { useState } from 'react'

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



interface Cycle {
  id: string
  task: string
  minutesAmount: number
  starDate: Date
  InterruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType { 
   activeCycle: Cycle | undefined
   activeCycleId: string | null
}

export const CyclesContext = createContext({} as CyclesContextType)

// formato dos ciclos

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])

  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      starDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    // alterando o estado é assim em formato de função porque ta mudando
    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (state.id === activeCycle) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  // converter o numero de minutos em segundos pois a aplicação vai precisar

 

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])
  const task = watch('task')
  const isSubmitDisabled = !task

  /*
  Prop Drilling -> Quando a gente tem MUITAS propriedades APENAS para comunicação entre componentes
  tem mais de 3 propriedades para um componente só, começa a ficar complicado para dá manutenção
  O que resolve é Context API --> permite compartilhamos informações entre vários compoenntes ao mesmo tempo, como se fosse informações globais que todos tem acesso 
  */

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
      <CyclesContext.Provider value={{activeCycle}}>
        <NewCycleForm></NewCycleForm>
        <CountDown></CountDown>
      </CyclesContext.Provider>
    
       

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
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
