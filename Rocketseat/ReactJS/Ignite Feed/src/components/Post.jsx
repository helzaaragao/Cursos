import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useState } from 'react';

// Tudo que muda em um Post
//author: {avatar_url: "", name:"", role:""}
// publishedAt: Date
// content:String

export function Post({author, publishedAt, content}){

     // estado > variaveis que você quer que seja monitoradas 
    const [comments, setComments] = useState([
       "Post muito bacana, hein"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    
// utilizando uma extensão do proprio JS para melhorar datas 
    // const publisheadDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit', 
    //     month: 'long', 
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publisheadAt); 

//outra forma de lidar com datas é baixando date-fns
     const publisheadDateFormatted = format(publishedAt, 
        "d 'de' LLLL 'ás' HH:mm'h'", {
            locale: ptBR, 
        })

        const publishedDateRelativeToNow = formatDistanceToNow ( publishedAt, {
            locale: ptBR, 
            addSuffix: true,
        })

       

        function handleCreateNewComment() {
            event.preventDefault(); 

            // const newCommentText = event.target.comment.value

            setComments([...comments, newCommentText]); 
            // comentário não ficar ali depois de comentado
            setNewCommentText('');
        }

      function handleNewCommentChange(){
        event.target.setCustomValidity(""); 
        setNewCommentText(event.target.value);
      }

      function handleNewCommentInvalid(){ 
        event.target.setCustomValidity("Esse campo é obrigatório!"); 
        
    }

      function deleteComment(commentToDelete){
        // imutabilidade -> as variaveis não sofrem mutação, nos criamos um novo valor ( um novo espaço na mémoria) -- é mais rápido para o react ver o que mudou e comparar em duas versões por exemplo do que alterar o valor origional que ai eu não vou ter o que comparar
          const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete; 
          }) 
          setComments(commentsWithoutDeletedOne);
          //para apagar algo da lista de comentários
      }

      const isNewCommentEmpty = newCommentText.length === 0; 

    return (
        <article className={styles.post}>
           <header>
            <div className={styles.author}>
                <Avatar  
                src={author.avatarUrl}></Avatar>
                   <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                   </div>
            </div>
            <time 
               title={publisheadDateFormatted}
               dateTime={publishedAt.toISOString()}>
                 {publishedDateRelativeToNow}
                </time>
           </header>

           <div className={styles.content}>
            {/* percorrendo arrays paa chegar ao conteúdo */}
            {content.map(line => {
                if ( line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
                } else if ( line.type === 'link'){ 
                    return <p key={line.content}><a  href='#'>{line.content}</a></p>
                }
            })}
             <p> 
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>
            </p>
           </div>

           <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
              <strong>Deixe seu feedback</strong>

              <textarea
                name="comment"
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
              ></textarea>

              <footer>
              <button 
              type='submit' 
              disabled={isNewCommentEmpty} >Publicar</button>
              {/* ajuda criar variaveis para uma manutenção melhor para um código clean */}
              </footer>
           </form>

           <div className={styles.commentList}>
               {comments.map(comment => {
                // a key com o próprio texto do comentário pois não temos id 
                 return <Comment 
                 key={comment}
                 content={comment} 
                 onDeleteComment={deleteComment}
                 ></Comment>
                  //ENSINAMENTO MAIS IMPORTANATE DO REACT: um componente se comunica com outro por propriedade | passando uma função de um componente pai como propriedade para o componente filho
               })}
               {/* array.map(item ⇒ <p>{item}</p>) */}
           </div>
        </article>
    )
}