import styled from "styled-components";

export const QuantityContainer = styled.div`
    width: 4.5rem; 
    height: 2.375rem;
    border-radius: 8px 8px;
    display: flex; 
    align-items: center;
    justify-content: center;
    gap: 0.2rem; 
    text-align: center;

    background-color: ${({ theme }) => theme['base-button']};
    

    button {
        background-color: transparent;
        border-color: transparent;
    }

    button svg {
        color:  ${({ theme }) => theme['purple']};

        transition: all 0.2s;

        &:hover {
            color: ${({ theme }) => theme['purple-dark']};
        }
    }
`