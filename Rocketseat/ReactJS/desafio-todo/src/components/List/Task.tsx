import style from './Task.module.css'

import { ITask } from '../../App'
import { Trash, Check } from '@phosphor-icons/react'

interface Props{
    data: ITask, 
    removeTask: (id: number) => void 
    toggleTaskStatus: ({id, value}: {id: number; value:boolean}) => void
}

export function Task({data, removeTask, toggleTaskStatus}: Props){ 
    function handleTaskToggle(){ 
        toggleTaskStatus({id: data.id, value: !data.isChecked})
    }

    function handleRemove(){ 
        removeTask(data.id)
    }

    const checkboxCheckedClassName = data.isChecked ? style['checkbox-checked'] 
    : style['checkbox-unchecked']

    const paragraphCheckedClassName = data.isChecked ? style['paragraph-checked'] 
    : ''
    return (
        <main className={style.newTasks}>
            <div className={style.check}>
              <label 
              htmlFor="checkbox" 
              onClick={handleTaskToggle}>
                <input 
                readOnly 
                type="checkbox"
                checked={data.isChecked} 
                />
                <span 
                className={`${style.checkbox} 
                ${checkboxCheckedClassName}`}>
                    {data.isChecked && <Check size={12}></Check>}
                </span>

                <p 
                className={`${style.paragraph} 
                ${paragraphCheckedClassName}`}>
                    {data.text}
                </p>
              </label>
            </div>
            <button onClick={handleRemove}>
                <Trash 
                size={20} 
                color="#808080" 
                ></Trash>
            </button>
        </main>
    )
}