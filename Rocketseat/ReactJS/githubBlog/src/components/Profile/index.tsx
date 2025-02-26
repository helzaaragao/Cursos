import { GithubLogo, Buildings, Users, ArrowLineUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Info, InfoProfile, ProfileAvatar, ProfileImage } from "./style.ts";
import { useEffect, useState } from "react";

interface ProfileProps {
    username: string;
}

interface UserData {
    avatar_url: string;
    name: string;
    html_url: string;
    bio: string;
    login: string;
    followers: number;
}

export function Profile({ username }: ProfileProps) { 
    const [user, setUser] = useState<UserData | null>(null); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if(!username){
            setUser(null) //limpa os dados do usuário
            setError(null)
            return; 
        }
        const fetchUserData = async () => {
            setLoading(true); //inicia o carregamento
            setError(null) //limap os erros anteriores

            try{
                const response = await fetch(`https://api.github.com/users/${username}`)
                if(!response.ok){
                    throw new Error("usuário não encontrado");
                }
                const data = await response.json();
                setUser(data); //atualiza o estado com os dados usuário 
            } catch(error){
                if(error instanceof Error){
                    setError(error.message);
                } else{
                    setError("Ocorreu um erro desconhecido");
                }
    
            }  finally { 
                setLoading(false);
            }
        };

        fetchUserData();
    },[username]);

    if (!user) {
        return <p>Nenhum dado encontrado</p>
    }
    if (loading) {
        return <p>Carregando...</p>;
    }
    if (error) {
        return <p>Erro: {error}</p>;
    }
    return(
        <ProfileAvatar>
        <ProfileImage>
            <img src={user.avatar_url} alt="" />
        </ProfileImage>
        <InfoProfile>  
            <div>
                <h1>{user.name || "Nome não disponivel"}</h1>
                <span><Link to={user.html_url}>Github</Link><ArrowLineUpRight size={18} weight="bold" /></span>
            </div>
        <p>{user.bio}</p>
        <Info>
            <div>
                <GithubLogo size={18} weight="fill"/>
                <span>{user.login}</span>
            </div>
            <div>
                <Buildings size={18} weight="fill"/>
                <span>Rocketseat</span>
            </div>
            <div>
                <Users size={18} weight="fill"/>
                <span>{user.followers} seguidores</span>
            </div>
        </Info>
        </InfoProfile>
        
    </ProfileAvatar>
    )
}