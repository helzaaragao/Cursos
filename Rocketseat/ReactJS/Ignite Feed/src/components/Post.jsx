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
        1, 
        2,
    ])

    
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

            setComments([...comments, comments.lengh + 1]); 
        }

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
                    return <p>{line.content}</p>
                } else if ( line.type === 'link'){ 
                    return <p><a  href='#'>{line.content}</a></p>
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
                placeholder='Deixe um comentário'
              ></textarea>

              <footer>
              <button type='submit'>Publicar</button>
              </footer>
           </form>

           <div className={styles.commentList}>
               {comments.map(comment => {
                 return <Comment></Comment>
               })}
           </div>
        </article>
    )
}