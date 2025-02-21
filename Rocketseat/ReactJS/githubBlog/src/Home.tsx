
import { Profile } from "./components/Profile/index.tsx";
import { Card, HomeContainer, Posts, Search } from "./Home.ts";


export function Home(){ 
    return (
        <HomeContainer>
            <Profile></Profile>
            <Search>
                <div>
                    <h2>Publicações</h2>
                    <span>6 publicações</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo" />
            </Search> 
            <Posts>
                <Card>
                    <h3>JavaScript data types and data structures</h3>
                    <span>Há 1 dia</span>
                    <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
                </Card>
            </Posts>

            
            {/* Codar aqui o menor, coloca um link para o maior e assim vai. Mas não sei como seria funcionando isso */}
        </HomeContainer>
     
    )
}