import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex; 
    gap: 1rem; 
    input { 
        flex: 1; 
        border-radius: 6px;
        background: ${props => props.theme["gray-900"]};
        color:  ${props => props.theme["gray-300"]};
        padding: 1rem; 

        &::placeholder { 
            color:  ${props => props.theme["gray-500"]};
        }
    }

    button { 
        display: flex; 
    }
`