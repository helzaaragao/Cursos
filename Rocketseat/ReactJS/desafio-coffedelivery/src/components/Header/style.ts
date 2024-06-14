import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    display: flex; 
    align-items: center;
    justify-content: space-between; 
    padding: 1rem 8rem 1rem 8rem;

    nav{
        display: flex; 
        gap: 1.5rem; 
        align-items: center;
        justify-content: center;

       div{ 
            width:8.938rem; 
            height: 2.375rem;
            background-color: ${({ theme }) => theme['purple-light']};
            display: flex; 
            align-items: center;
            justify-content: center;
        }
    }
`