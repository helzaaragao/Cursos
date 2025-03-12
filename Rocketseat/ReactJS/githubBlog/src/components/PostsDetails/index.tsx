import { Link, useParams, useLocation } from "react-router-dom";
import { PostBody, PostContainer, PostHeader, PostIcones } from "./style";
import { ArrowUpRight, Calendar, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Issue } from "../../Home.tsx";

import {formatDistanceToNow} from "date-fns"
import {ptBR} from "date-fns/locale";
import ReactMarkdown from "react-markdown";

interface LocationState {
    issuesList: Issue[];
}

export function PostsDetails(){

    const location = useLocation();
    const {id} = useParams<{ id:string }>();
    const [issue, setIssue] = useState<Issue | null>(null);
    const issuesList = (location.state as LocationState)?.issuesList;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        if (id && issuesList) { 
            setLoading(true); 
            setError(null);
            setTimeout(() => {
                try {
                    const foundIssue = issuesList.find((issue) => issue.id === Number(id));
                    if (foundIssue) {
                        setIssue(foundIssue);
                    } else {
                        setError("Issue não encontrada");
                    }
                } catch (err) {
                    setError("Erro ao carregar a issue");
                } finally {
                    setLoading(false); 
                }
            }, 500); 
        }
    }, [id, issuesList]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!issue) {
        return <div>Issue não encontrada</div>;
    }

    return(
        <PostContainer>
            <PostHeader>
                <div>
                    <Link to={'/'}><CaretLeft size={18} weight="bold" />VOLTAR</Link>
                    <Link to={issue.html_url} target="_blank">VER NO GITHUB <ArrowUpRight size={18} weight="bold" /></Link>
                </div>
                <h2>{issue.title}</h2>
                <PostIcones>
                    <div>
                        <GithubLogo size={18} weight="fill"/>
                        <span>{issue.user.login}</span>
                    </div>
                    <div>
                     <Calendar size={18} weight="fill" />
                     <span>{formatDistanceToNow(new Date(issue.updated_at), {
                                addSuffix: true, 
                                locale: ptBR, 
                            })}</span>
                    </div>
                    <div>
                    <ChatCircle size={18} weight="fill" />
                    <span>{issue.comments} comentários</span>
                    </div>
                </PostIcones>
            </PostHeader>
            <PostBody>
                    <ReactMarkdown>
                       {issue.body}
                    </ReactMarkdown>
            </PostBody>
        </PostContainer>
    )
}