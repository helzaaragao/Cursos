import { Link, useParams } from "react-router-dom";
import { PostBody, PostContainer, PostHeader, PostIcones } from "./style";
import { ArrowLineUpRight, Calendar, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Issue } from "../../Home.tsx";

interface LocationState {
    issuesList: Issue[];
}

export function PostsDetails(){
    const {id} = useParams<{ id:string }>();
    const [issue, setIssue] = useState<Issue | null>(null);
    const issuesList = (location.state as LocationState)?.issuesList;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const isValidIssue = issuesList?.some((issue) => issue.id === Number(id))

    const fetchIssueDetails = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`
            );

            if (!response.ok) {
                throw new Error("Erro ao buscar detalhes da issue");
            }
            const data = await response.json();
            setIssue(data);
        } catch (err) {
            setError("Ocorreu um erro ao buscar os detalhes da issue");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id && isValidIssue) { // Só faz a requisição se o `id` existir
            fetchIssueDetails();
        }
    }, [id, isValidIssue]);

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
                    <button><CaretLeft size={18} weight="fill" />VOLTAR</button>
                    <Link to={'/'}>VER NO GITHUB <ArrowLineUpRight size={18} weight="bold" /></Link>
                </div>
                <h2>{issue.title}</h2>
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
            <PostBody>
                <p>As principais lições e dicas compiladas para quem está começando na programação ou migrando para a área.

*Texto por Camila Coelho

Hoje devs são peças fundamentais de todo negócio, estão nas startups e nas pequenas e médias empresas que buscam soluções tecnológicas para seus produtos e serviços.

Em uma busca rápida, é possível encontrar centenas de notícias e pesquisas que apontam a falta de mão de obra qualificada na área. A conclusão das matérias é a mesma: sobram vagas no Brasil e chovem oportunidades internacionais.

Quem se destaca pode nadar de braçada nesse oceano de possibilidades. Nesse artigo estão reunidos todos os ensinamentos para você iniciar sua carreira em programação com o pé direito.

Defina sua jornada
Antes de tudo, você precisa saber para onde está indo. Iniciantes na programação costumam se perder em meio a tanta informação. Você precisa ter objetivos bem definidos para traçar a melhor rota de evolução na carreira.

Certifique-se de ter uma base sólida nos fundamentos da programação. Só depois de conhecer o básico, você saberá para onde seguir. Esse curso gratuito ensina programação desde o marco zero, para quem nunca teve contato com tecnologia e ajuda a consolidar conhecimentos padrões.

Escolha uma linguagem
Conhecer uma única tecnologia profundamente vai te ajudar mais que saber várias superficialmente. Isso não significa que você nunca poderá aprender outras no futuro, apenas que vai direcionar seu foco para um objetivo de aprendizagem.

Dominando uma linguagem você se aproxima de empresas que costumam buscar por pessoas que cumpram papéis específicos em um time de tecnologia.
Acompanhando a evolução das ferramentas que usa, você não deixa que suas aplicações fiquem ultrapassadas e continua relevante para o mercado.

Organize seus estudos
Tenha em mente que a tecnologia está em constante evolução, devs precisam continuar estudando mesmo depois de ingressar no mercado. Ter o hábito de se dedicar aos estudos irá fazer toda a diferença no seu crescimento de carreira.

Crie um cronograma de estudos
Defina um plano de estudos que faça parte da sua rotina da melhor forma possível. Dicas para construir seu cronograma de estudos:

Entenda sua rotina. Faça um planejamento realista. Liste suas tarefas, refeições, obrigações e reserve um tempo de foco profundo para se dedicar ao código.
Organize seu cronograma conforme pequenos objetivos. Separe seu tempo para absorver conteúdos, praticar, testar e revisar o que aprendeu nos últimos dias.
Use ferramentas de organização. Plataformas como o Notion são ótimas opções para planificar sua agenda e para documentar seus materiais de estudo, links úteis e ideias de projetos.
Aplique a técnica Pomodoro. Esse método te ajuda a aproveitar tempos de estudo sem nenhuma interrupção, intercalando com momentos de descanso. Cronometre 25 minutos de estudos, quando o tempo terminar, faça uma pausa de 5 minutos e retome os estudos por mais 25 minutos.
Tenha constância nos estudos
Ter frequência nos estudos é mais relevante para o seu aprendizado que focar por grandes períodos de tempo.

Estudar todos os dias o ajudará a fixar conhecimentos ao manter-se em contato recorrente com o que precisa aprender. É preferível que você estude por um período de tempo menor por dias recorrentes, que por muitas horas em um único dia da semana.

Pratique e Pratique
Não tem jeito, programação é uma disciplina prática. Apenas codando que você vai conseguir desenvolver suas habilidades técnicas. A teoria virá a partir da prática, não ao contrário. Praticar também vai te ajudar a desenvolver o pensamento crítico necessário para resolver problemas e priorizar tarefas.

Conte com a comunidade
Se envolver em comunidades será um divisor de águas para sua carreira. Ajudar outras pessoas desenvolvedoras vai fazer com que você fixe melhor seu aprendizado. A comunidade vai te dar suporte frente a problemas desafiadores para você.

Evoluir em comunidade também é uma ótima oportunidade para você se preparar para trabalhar em um ambiente de Pair Programming.

Pair Programming é uma técnica de desenvolvimento ágil em que devs trabalham em pares, em uma única estação de trabalho. Em algum momento da sua carreira você vai ter contato com o trabalho em par, use a comunidade para sair na frente e se preparar para ele.

Dica: abra em nova aba ou favorite esse guia prático de como contribuir para o ecossistema de tecnologia. Ele tem dicas super úteis para você que está começando a programar.

Networking é tudo!
Em toda e qualquer carreira, fazer Networking é uma das principais estratégias de visibilidade para profissionais. Em desenvolvimento não seria diferente.

Ao passo que ganha relevância na comunidade, melhores oportunidades chegarão até você. Ou talvez, você possa encontrar aquela pessoa que vai criar sociedade com você para empreender conforme seus objetivos, e se conectar com profissionais que você conhece as competências.

Desenvolva suas soft skills
Soft Skills são as habilidades comportamentais, aquelas que vão além dos seus conhecimentos técnicos. Não negligencie suas habilidades de comunicação, atitude, pensamento crítico, criatividade e outras que não podem ser substituídas pelo domínio da programação.

Parece complicado para quem se acostumou a lidar apenas com a sua própria tela, a boa notícia é que você verá o desenvolvimento dessas habilidades fluir sempre que você estiver presente em comunidade, compartilhando conhecimento.

Impulsione sua carreira
Pense na sua carreira profissional como uma marca. Sua marca precisa ser sólida, ter credibilidade e ser divulgada. Para se destacar no início da sua carreira ou em qualquer outra etapa dela, avance por alguns atalhos como Eventos de Tecnologia, Hackathons e Projetos Pessoais.

Eventos de tecnologia - Basta acompanhar as comunidades para ficar por dentro dos principais eventos de tecnologia. Desde workshops, para você aprender praticando, a empreendedorismo e conversas, para você acompanhar o avanço da tecnologia. O Networking é outro ponto positivo de fazer parte dos eventos sempre que possível.

Hackathons - Esses são eventos que podem ser definidos como uma disputa prática para profissionais de tecnologia. Os Hackathons te ajudam a ganhar experiência no desenvolvimento de soluções em grupo, indo da ideação ao produto final.

Projetos pessoais - Os projetos pessoais são uma forma de você desenvolver suas habilidades técnicas, criatividade e pensamento crítico. Tudo que você construir se torna bagagem para seu currículo e casos reais para o seu portfólio.

Importante, adicione tudo que você fizer ao Github e escreva um bom README.

Todos seus projetos contam como experiência para seu portfólio, independentemente da complexidade. Como toda sua evolução, a construção do seu portfólio também começa com um primeiro passo e vai avançando de nível.

Mesmo que você acredite que não tem por onde começar, comece. Com o tempo seu conhecimento e projetos vão ganhando forma.

Tá sem ideia de projetos e já quer começar a se desafiar? Entre no Discover, você terá acesso a dezenas de desafios com instruções de como realizá-los.</p>
            </PostBody>
        </PostContainer>
    )
}