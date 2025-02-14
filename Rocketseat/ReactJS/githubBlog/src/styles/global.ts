import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    body, input, textarea, button {
        font-family: 'Nunito', serif;
        font-style: normal;

        line-height: 160%;
        font-weight: 400;
    }

    body {
        -webkit-font-smoothing: antialiased; 
        color: ${({ theme }) => theme.colors['base-text']};
        background-color: ${({ theme }) => theme.colors['base-background']};
    }

    button { 
        border: none; 
        cursor: pointer;
    }
`