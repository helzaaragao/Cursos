import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    display: flex; 
    align-items: center;
    justify-content: space-between; 
    padding: 1rem 8rem 1rem 8rem;

    nav{
        display: flex; 
        gap: 1rem; 
        align-items: center;
        justify-content: center;

       div{ 
            width:8.938rem; 
            height: 2.375rem;
            gap: 0.2rem; 
            display: flex; 
            align-items: center;
            justify-content: center;
            background-color: ${({ theme }) => theme['purple-light']};
            border-radius: 6px;

            svg{
                color:  ${({ theme }) => theme['purple']};
            }

            span {
            font-size: 14px;
            line-height: 130%;
            color:  ${({ theme }) => theme['purple-dark']};
           }
          
        } 

        a { 
            width:2.375rem; 
            height: 2.375rem; 
            display: flex; 
            align-items: center;
            justify-content: center;
            background-color: ${({ theme }) => theme['yellow-light']};
            border-radius: 6px;

            svg{
                color:  ${({ theme }) => theme['yellow-dark']};
            }
        }
    }
`