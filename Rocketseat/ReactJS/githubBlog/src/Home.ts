import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Search = styled.section`
    width: 54rem;
    margin-top: 3.5rem;
   > div{
     display: flex;
     justify-content: space-between;
   }

   > input {
        margin-top: 0.8rem;
        width: 100%;
        border-radius: 6px;
        border: 1px solid;
        height: 3.125rem;
        border-color: ${({ theme }) => theme.colors['base-border']};
        background-color: ${({ theme }) => theme.colors['base-input']};
        color: ${({ theme }) => theme.colors['base-text']};
        padding: 1rem;

        &::placeholder{
            color: ${({ theme }) => theme.colors['base-label']};
        }

        &:hover{
            border-color: ${({ theme }) => theme.colors['blue']};
        }
   }
  
`
export const Posts = styled.section`
    width: 54rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    
`
export const Card = styled.div`
    width: auto;
    height: 15.25rem;
    background-color: ${({ theme }) => theme.colors['base-post']};
    border-radius: 10px;
    border: 1px solid;
    border-color: transparent;
    padding: 1.5rem;
    a{
        text-decoration: none;
    }

    &:hover{
        
        border-color: ${({ theme }) => theme.colors['base-label']};
    }

   
    div{
       
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between;

        h3{
        color:  ${({ theme }) => theme.colors['base-title']};
        font-size: 1.25rem;
        }

        span{
        color: ${({ theme }) => theme.colors['base-span']};
        font-size: 0.875rem;
        }
    }
   
    p{
        color: ${({ theme }) => theme.colors['base-text']};
        margin-top: 1.5rem;
    }
    
`