import style from './Empty.module.css'
import { ClipboardText } from "@phosphor-icons/react";

export function Empty(){ 
    return(
        <main className={style.empty}>
            <ClipboardText size={56} opacity={0.5}/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
                </p>
        </main>
    )
}