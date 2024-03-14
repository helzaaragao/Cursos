import { useState } from 'react'
import style from './App.module.css'
import { Header } from '../src/components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import {Header as ListHeader } from './components/List/Header'
import { Empty } from './components/List/Empty'

import {PlusCircle} from '@phosphor-icons/react';
import { Task } from './components/List/Task'


export interface ITask { 
  id: number, 
  text: string, 
  isChecked: boolean
}

export function App() {

  const [inputValue, setInputValue] = useState(''); 
  const [tasks, setTasks] = useState<ITask[]>([]);

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked){
      return prevValue + 1
    }
    return prevValue
  }, 0)

  function handleAddTask(){
     if(!inputValue){ 
      return 
     }

     const newTask: ITask = {
      id: new Date().getTime(), 
      text: inputValue, 
      isChecked: false, 
     }

     setTasks((state => [...state, newTask]))
     setInputValue(''); 

  }

  function handleRemoveTask(id: number){
    const filteredTask = tasks.filter((task) => task.id !== id)

    if(!confirm('Deseja mesmo apagar essa tarefa?')){ 
      return 
    }
    setTasks(filteredTask)
  }

  function handleToggleTask({id, value}: {id: number, value:boolean}){
    const updatedTasks = tasks.map((task) => { 
      if(task.id === id){
        return {...task, isChecked: value}
      }
      return {...task }
    })

    setTasks(updatedTasks)
    
  }

  // function handleKeyDown(e: { key: string; preventDefault: () => void }) { 
  //   if(e.key === 'Enter'){
  //     e.preventDefault(); 
  //     handleAddTask();
  //   }
  // }

  return (
    <main>
     <Header></Header>
     
     <section className={style.content}>
        <div className={style.newtask}>
          <Input 
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          ></Input>

          <Button
           onClick={handleAddTask}
          > Criar <PlusCircle size={16} />
          </Button>
        </div>
        
        <div className={style.taskList}>
         <ListHeader 
         taskCounter={tasks.length} 
         checkedTaskCounter={checkedTasksCounter} 
         ></ListHeader>

         {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => (
                <Task
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
                ></Task>
            ))}
            </div>
         ): ( 
         <Empty></Empty>
        )}    
        </div>
     </section>
    </main>
  )
}

