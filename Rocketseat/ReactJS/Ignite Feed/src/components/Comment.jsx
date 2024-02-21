import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment ({content}){
     
    function handleDeleteComment({ content, OnDeleteComment }){
       // console.log('deletar')

       //ENSINAMENTO MAIS IMPORTANATE DO REACT: um componente se comunica com outro por propriedade | passando uma função de um componente pai como propriedade para o componente filho

       OnDeleteComment(content); 
    }

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
                <button>
                    <ThumbsUp></ThumbsUp> 
                    {/* Relembrar como coloquei essa biblioteca de icones */}
                    Aplaudir <span>20</span>
                </button>
            </footer>
          </div>
        </div>
    )
}