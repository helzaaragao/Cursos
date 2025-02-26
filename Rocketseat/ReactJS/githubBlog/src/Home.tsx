import { useEffect, useState } from "react";
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

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
      login: string;
    };
}
  


export function Home({id, description}){ 
    // const truncatedDescription = truncateText(description,27);
    const [issues, setIssues] = useState<Issue[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const repo = "reactjs-github-blog-challenge"; // Nome do repositório
    const username = "rocketseat-education";

    const fetchIssues = async () => { 
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(
                    `https://api.github.com/repos/${username}/${repo}/issues`   
            );

            if(!response.ok){
                throw new Error("Erro ao buscar issues");
            }
            const data = await response.json();
            setIssues(data);
                
        } catch(err){
            setError("Ocorreu um erro ao buscar as issues");
            console.error(err)
        } finally {
            setLoading(false)
        }
       
    };

    useEffect(() => {
        fetchIssues()
    }, [] );


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
                {issues.map((issue) => (
                  <Card key={issue.id}>
                        <Link to={`/details/${issue.id}`}>
                        <div>
                            <h3>{issue.title}</h3>
                            <span>{issue.updated_at}</span>
                        </div>
                        <p>{issue.body}</p>
                        </Link>
                </Card>
                ))}
               
                {/* <Card>
                    <Link to={`/details/${id}`}>
                        <div>
                            <h3>JavaScript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </div>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
                    </Link>
                </Card> */}
            </Posts>

            
            
        </HomeContainer>
     
    )
}