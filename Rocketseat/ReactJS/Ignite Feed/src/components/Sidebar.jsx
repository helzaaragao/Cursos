import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar(){ 
    return (
        <aside className={styles.sidebar}>
            <img 
             className={styles.cover} 
             src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className={styles.profile}>
                <img 
                  className={styles.avatar}
                  src="https://pbs.twimg.com/profile_images/1557503146800435201/MoY1k2Ms_400x400.jpg" />

                <strong>Roier Guapoduer</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}