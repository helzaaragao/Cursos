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
   }
  
`
export const Posts = styled.section``
export const Card = styled.div``