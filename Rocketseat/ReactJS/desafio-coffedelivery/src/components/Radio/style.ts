import styled from 'styled-components'

export const RadioContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color:  ${({ theme }) => theme['base-button']};
    cursor: pointer; 
    font-size: 0.8rem;
    padding: 1rem;
    text-transform: uppercase;
    


input[type='radio'] {
  position: absolute; 
  opacity: 0;      
  width: 0;         
  height: 0;       
}

svg { 
    color:  ${({ theme }) => theme['purple']};
}

`