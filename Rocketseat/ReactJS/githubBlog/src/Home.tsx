import { useEffect, useState } from "react";
import { Profile } from "./components/Profile/index.tsx";
import { Card, HomeContainer, Posts, Search } from "./Home.ts";
import { Link } from "react-router-dom";
import {formatDistanceToNow} from "date-fns"
import {ptBR} from "date-fns/locale";

export interface Issue {
    updated_at: string;
    body: string;
    id: number;
    title: string;
    html_url: string;
    user: {
      login: string;
    };
}
  


export function Home({}){ 
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

    const limitWords = (text:string, maxWords:number) => {
        const safeText = text || "";
        const words = safeText.split(' ');
        if(words.length > maxWords){ 
            return words.slice(0,maxWords).join(' ')+ '...';
        }
        return safeText
    }

    
    if (loading) {
        return <div>Carregando...</div>; // Exibe um indicador de carregamento
    }

    if (error) {
        return <div>{error}</div>; // Exibe uma mensagem de erro
    }


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
                        <Link to={`/details/${issue.id}`} state={{issues}}>
                        <div>
                            <h3>{issue.title}</h3>
                            <span>{formatDistanceToNow(new Date(issue.updated_at), {
                                addSuffix: true, 
                                locale: ptBR, 
                            })}</span>
                        </div>
                        <p>{limitWords(issue.body,27)}</p>
                        </Link>
                </Card>
                ))}
            </Posts>

            
            
        </HomeContainer>
     
    )
}