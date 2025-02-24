import { GithubLogo, Buildings, Users } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Info, InfoProfile, ProfileAvatar, ProfileImage } from "./style.ts";
import avatar from '../../assets/avatar.png'
import { useEffect, useState } from "react";

export function Profile({ username }) { 
    const [user, setUser] = useState(null); 
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!username){
            setUser(null)
            setError(null)
            return; 
        }
        const fetchUserData = async () => {
            try{
             
                const response = await fetch(`https://api.github.com/users/${username}`);
                if(!response.ok){
                    throw new Error("usuário não encontrado");
                }
                const data = await response.json();
                setUser(data); //atualiza o estado com os dados usuário 
            } catch(err){
                setError(err.message);
            }  
        }
        fetchUserData();
    },[username]);
    return(
        <ProfileAvatar>
        <ProfileImage>
            <img src={avatar} alt="" />
        </ProfileImage>
        <InfoProfile>  
        <h1>{user.name}</h1>
        <span><Link to={'/'}>Github</Link></span>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <Info>
            <div>
                <GithubLogo size={18} weight="fill"/>
                <span>cameronwill</span>
            </div>
            <div>
                <Buildings size={18} weight="fill"/>
                <span>Rocketseat</span>
            </div>
            <div>
                <Users size={18} weight="fill"/>
                <span>32 seguidores</span>
            </div>
        </Info>
        </InfoProfile>
        
    </ProfileAvatar>
    )
}