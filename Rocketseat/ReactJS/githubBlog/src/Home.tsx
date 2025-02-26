import { Profile } from "./components/Profile/index.tsx";
import { Card, HomeContainer, Posts, Search } from "./Home.ts";
import { Link } from "react-router-dom";

// const truncateText = (text, maxWords) => {
//     const words = text.split(' ');
//     if (words.length > maxWords) {
//       return words.slice(0, maxWords).join(' ') + '...';
//     }
//     return text;
//   };
  


export function Home({id, description}){ 
    // const truncatedDescription = truncateText(description,27);

    return (
        <HomeContainer>
            <Profile username="helzaaragao"></Profile>
            <Search>
                <div>
                    <h2>Publicações</h2>
                    <span>6 publicações</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo" />
            </Search> 
            <Posts>
                <Card>
                    <Link to={`/details/${id}`}>
                    <div>
                        <h3>JavaScript data types and data structures</h3>
                        <span>Há 1 dia</span>
                    </div>
                    <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
                    </Link>
                </Card>
                <Card>
                    <Link to={`/details/${id}`}>
                        <div>
                            <h3>JavaScript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </div>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
                    </Link>
                </Card>
            </Posts>

            
            
        </HomeContainer>
     
    )
}