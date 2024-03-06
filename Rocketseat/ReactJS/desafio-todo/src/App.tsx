//import { useState } from 'react'
import style from './App.module.css'
import { Header } from '../src/components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'

import {PlusCircle} from '@phosphor-icons/react';

export function App() {

  return (
    <>
     <Header></Header>
     
     <section>
        <div className={style.newtask}>
          <Input></Input>
          <Button>Criar
          <PlusCircle size={16} />
          </Button>
        </div>

     </section>
    </>
  )
}

