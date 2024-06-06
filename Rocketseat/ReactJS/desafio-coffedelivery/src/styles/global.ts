import { createGlobalStyle } from 'styled-components' //pesquisar mais sobre

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0; 
        padding: 0; 
        box-sizing: border-box;
    }

    :focus{
        outline: 0; 
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']}; //não tenho certeza
    }

    body{ 
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased; //pesquisar mais sobre
    }

    body, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400; 
        font-size: 1rem;
        line-height: 130%;
    }

/* crl + ; |\ fazer comentários */
    

`