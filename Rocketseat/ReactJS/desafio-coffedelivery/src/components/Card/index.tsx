import { CardContainer, CoffeImg, Description, Tags, Title} from "./style"

  type Props = { 
        coffee: {
            id: string
            title: string
            description: string
            tags: string[]
            price: number
            image: string
        }
    }

export function Card({coffee}: Props) {
    return(
        <CardContainer>
            <CoffeImg src={coffee.image} alt={coffee.title}></CoffeImg>

            <Tags>
                {coffee.tags.map((tag) => (
                <span 
                key={tag}>
                    {tag} 
                 </span>
                ))}
            </Tags>

            <Title>
                {coffee.title}
            </Title>

            <Description>
                {coffee.description}
            </Description>

            
       
        
        </CardContainer>
    )
}