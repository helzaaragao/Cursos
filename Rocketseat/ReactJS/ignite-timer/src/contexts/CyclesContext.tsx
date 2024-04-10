import { createContext } from "react";

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
    amountSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
  }
  
export const CyclesContext = createContext({} as CyclesContextType)


export function CyclesContextProvider(){ 
    return (
        //11:39 contexto entre rotas
    )
}