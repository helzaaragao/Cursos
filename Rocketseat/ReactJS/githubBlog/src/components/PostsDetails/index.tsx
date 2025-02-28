import { Link } from "react-router-dom";
import { PostContainer, PostHeader, PostIcones } from "./style";
import { Calendar, ChatCircle, GithubLogo } from "@phosphor-icons/react";

export function PostsDetails(){
    return(
        <PostContainer>
            <PostHeader>
                <div>
                    <button>VOLTAR</button>
                    <Link to={'/'}></Link>
                </div>
                <h2>JavaScript data types and data structures</h2>
                <PostIcones>
                    <div>
                        <GithubLogo size={18} weight="fill"/>
                        <span>cameronwill</span>
                    </div>
                    <div>
                     <Calendar size={18} weight="fill" />
                     <span>Há 1 dia</span>
                    </div>
                    <div>
                    <ChatCircle size={18} weight="fill" />
                    <span>5 comentários</span>
                    </div>
                </PostIcones>
            </PostHeader>
            
        </PostContainer>
    )
}