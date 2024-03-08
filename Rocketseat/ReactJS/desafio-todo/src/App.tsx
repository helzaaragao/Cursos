import { useState } from 'react'
import style from './App.module.css'
import { Header } from '../src/components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import {Header as ListHeader } from './components/List/Header'

import {PlusCircle} from '@phosphor-icons/react';

export interface ITask { 
  id: number, 
  text: string, 
  isChecked: boolean
}

export function App() {

  const [inputValue, setInputValue] = useState(''); 
  const [tasks, setTasks] = useState<ITask[]>([]);

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

  return (
    <>
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
         taskCounter={0} 
         checkedTaskCounter={0} ></ListHeader>
        </div>

     </section>
    </>
  )
}

