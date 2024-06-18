import styled from 'styled-components'
import bg from '../../assets/bannerBackground.svg'

export const CoffeeBanner = styled.section`
    width: 100vw; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 2rem; 
    padding: 1rem 8rem 1rem 8rem; 

    background-image: url(${bg});
`

export const CoffeeBannerContent = styled.div`
    display: flex; 
    gap: 2rem; 
`

export const Heading = styled.div`
   width: 36.75rem; 
   height: 12rem; 
   h1{
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.5rem;
    font-weight: bolder; 
    line-height: 130%;

    color:  ${({ theme }) => theme['base-title']};
   }

   h2 {
    font-size: 1.25rem; 
    line-height: 130%;
    color:  ${({ theme }) => theme['base-subtitle']};
   }
    
`

export const Info = styled.div`
    display: flex; 
    flex-wrap: wrap;
    width: 35.438rem; 
    height: 5.25rem; 
    gap: 2rem;
    
`

export const CoffeeList = styled.section`
   

`

// Coloca padding no global porque vai ser para todos

