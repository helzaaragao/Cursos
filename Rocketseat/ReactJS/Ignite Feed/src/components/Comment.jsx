import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment ({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);
     
    function handleDeleteComment(){
       // console.log('deletar')

       //ENSINAMENTO MAIS IMPORTANATE DO REACT: um componente se comunica com outro por propriedade | passando uma função de um componente pai como propriedade para o componente filho

       onDeleteComment(content); 
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
        //likes que eu já tenho mais um para adicionar na tela
        //para ter os valores atualizados em tela: criar variaveis para armazenar esse valor novo ou fazer um function array
        // sempre que for atualizar uma informação, e essa informação depende dela mesma, é sempre bom fazer o padrão abaixo: 
        //setLikeCount((state) => { return state + 1})
    }

    //TypeScript: deixa o seu editor mais inteligênte e faz uma tipagem que faz ter menos erro no código antes de aplicar

    return (
        <div className={styles.comment}>
          <Avatar hasBorder={false} src="https://pbs.twimg.com/profile_images/1602025996265422849/5n677swY_400x400.jpg" />
          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Cellbit Lanches</strong>
                        <time 
                        title='30 de Janeiro de 2024 ás 15:27h' 
                        dateTime='2024-01-30 15:27:25'
                        >Cerca de 1h atrás</time>
                    </div>

                    <button 
                      onClick={handleDeleteComment}
                      title="Deletar comentário">
                        <Trash size={24}></Trash>
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    {/* se colocar do lado handleLikeComment() ele vai executar sem esperar o onClick pois seria uma função EXECUTAVEL e entraria em loop*/}
                    {/* Relembrar como coloquei essa biblioteca de icones */}
                    <ThumbsUp></ThumbsUp> 
                    
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
          </div>
        </div>
    )
}