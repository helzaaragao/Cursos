import styled from "styled-components";
import Cover from '../../assets/Cover.svg'
export const HeaderContainer = styled.header`
    width: 100vw;
    height: 296px;
    position: absolute;
    background-image: url(${Cover});
    background-repeat:no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    img{ 
       width: 9.25rem;
       height: 6.125rem;
       margin-top: 2rem;
    }
`