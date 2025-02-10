import styled from "styled-components";

export const Box = styled.div`
    width: 100%; 
  
`
export const InputContainer = styled.div`
    display: flex; 
    align-items: center;
    input{
        width: 100%;
        height: 2.625rem; 
        padding: 0.75rem; 
        border: 0;
        background-color: transparent;
     

      &::placeholder{
        color: ${({ theme }) => theme['base-label']};
        font-size: 0.875rem;
      }
    }
    span{ 
        color: ${({ theme }) => theme['base-label']};
        font-size: 0.875rem;
        font-style: italic;
        padding-right: 0.75rem; 
    }

   
`
export const ErrorMessage = styled.p`
    font-size: 0.8rem;
    margin-left: 1rem;
    color: ${({ theme }) => theme['purple-dark']};
       
`