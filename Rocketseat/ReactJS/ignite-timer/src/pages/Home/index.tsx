import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles.ts'
import { useState } from 'react'

// controlled (mantem em tempo real controle do que o usuario está digitando ou fazendo em uma variavel | toda vez atualiza quando utilizada e pode ser um peso ao sistema em certos momentos/ uncontrolled ( você não ver em tempo real mas fica sem atualizar tudo quando utilizada e atualiza apenas uma vez)

export function Home() {
  const [task, setTask] = useState('')

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para a sua task"
            list="task-suggestions"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            // utiliza para setar um min de minutos e max de minutos nesse input permitido e o step é que vai mudando de 5 em 5 exemplo: primeiro= 5 e depois 10, 15, 20
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24}></Play>
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
