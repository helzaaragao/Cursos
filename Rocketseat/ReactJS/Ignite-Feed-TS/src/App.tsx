import { Header } from "./components/Header";
import { Post,PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';


// Tudo que muda em um Post
//author: {avatar_url: "", name:"", role:""}
// publishedAt: Date
// content:String

// para deixar menos estatico o post 

const post: PostType[] = [
  {
    id: 1,
    author: {
       avatarUrl: 'https://pbs.twimg.com/profile_images/1557503146800435201/MoY1k2Ms_400x400.jpg',
       name: 'Roier Guapoduer',
       role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', } , 
      {type: 'link', content: '👉 jane.design/doctorcare' },
    ], 
    publishedAt: new Date('2023-01-11 16:30:30')
  },
  {
    id: 2,
    author: {
       avatarUrl: 'https://pbs.twimg.com/profile_images/1602025996265422849/5n677swY_400x400.jpg',
       name: 'Cellbit Lanches',
       role: 'Game Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', } , 
      {type: 'link', content: '👉 jane.design/doctorcare' },
    ], 
    publishedAt: new Date('2024-02-13 15:27:25')
  },
];

// iteração ( repitir alguma coisa, uma estrutura de repetição)


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />


        <main>
          {/* pecorrendo os posts | forEach não trás retorno e por isso não deve ser usado, por isso utilizamos o map que retorna algo*/}
        {post.map(post => {
          return (
          <Post
             key={post.id}
             post={post}    
          ></Post> 
          )


        })}
        </main>
      </div>



    </div>
  )
}


