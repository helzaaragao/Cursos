import style from './Header.module.css'

interface Props{ 
    taskCounter: number, 
    checkedTaskCounter: number
}

export function Header({taskCounter, checkedTaskCounter}: Props){ 
    return(
        <header className={style.ListHeader}>
          <aside>
            <p>Tarefas criadas</p>
            <span>{taskCounter}</span>
          </aside>

          <aside>
            <p>Concluídas</p>
            <span>{taskCounter === 0 ? taskCounter : 
            `${checkedTaskCounter} de ${taskCounter}`}</span>
    {/* 
          :: Separador entre a expressão verdadeira e a expressão falsa.
         ${checkedTaskCounter} de ${taskCounter}: Esta é a expressão que será retornada se a condição for falsa. Aqui, checkedTaskCounter e taskCounter são interpolados em uma string. Por exemplo, se checkedTaskCounter for 2 e taskCounter for 5, a expressão retornada será "2 de 5" */}
          </aside>
        </header>
    )
}