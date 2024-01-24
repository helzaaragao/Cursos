import styles from './Post.module.css'

export function Post(){ 
    return (
        <article className={styles.post}>
           <header>
            <div className={styles.author}>
                <img 
                   className={styles.avatar}
                   src="https://pbs.twimg.com/profile_images/1557503146800435201/MoY1k2Ms_400x400.jpg" />
                   <div className={styles.authorInfo}>
                    <strong>Roier Guapoduer</strong>
                    <span>Web Developer</span>
                   </div>
            </div>
            <time 
               title='23 de Janeiro ás 16:30h'
               dateTime="2023-01-11 16:30:30 ">Publicado há 1h</time>
           </header>

           <div className={styles.content}>
            <p>Fala galeraa 👋  </p>

            <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀   </p>

            <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

             <p> 
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>
            </p>
           </div>

           <form className={styles.commentForm}>
              <strong>Deixe seu feedback</strong>

              <textarea
                placeholder='Deixe um comentário'
              ></textarea>

              <footer>
              <button type='submit'>Publicar</button>
              </footer>
           </form>
        </article>
    )
}