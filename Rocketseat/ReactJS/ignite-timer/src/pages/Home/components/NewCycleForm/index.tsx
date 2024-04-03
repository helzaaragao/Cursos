import{ FormContainer, TaskInput, MinutesAmountInput }from './styles'

export function NewCycleForm(){ 
    return(
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          placeholder="Dê um nome para a sua task"
          list="task-suggestions"
          disabled={!!activeCycle}
          {...register('task')}
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
          disabled={!!activeCycle}
          // utiliza para setar um min de minutos e max de minutos nesse input permitido e o step é que vai mudando de 5 em 5 exemplo: primeiro= 5 e depois 10, 15, 20
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </FormContainer>

    )
}