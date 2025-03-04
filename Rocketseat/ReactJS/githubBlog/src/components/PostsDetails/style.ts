import styled from "styled-components";


export const PostContainer = styled.section`
    width : 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   

`
export const PostHeader = styled.div`
    position: relative;
    width: 54rem;
    height: 10.5rem;
    margin-top: 12rem;
    padding: 1.5rem;
    border-radius: 10px;
    background-color:  ${({ theme }) => theme.colors['base-profile']};

    > div:first-child{
        width: 100%;
        display: flex;
        justify-content: space-between;
        

        button{
            background-color: transparent;
            color:  ${({ theme }) => theme.colors['blue']};
            display: flex;
            align-items: center;
            gap: 0.4rem;
            font-weight: bold;
            font-size: 0.75rem;
        }

        a{
            color:  ${({ theme }) => theme.colors['blue']};
            display: flex;
            align-items: center;
            text-decoration: none;
            gap: 0.3rem;
            font-size: 0.75rem;
            font-weight: bold;
        }
    }

    h2 {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors['base-title']};
    }

    
`
export const PostIcones = styled.div`
    display: flex;
    gap: 1rem;

    > div {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        span{
            color: ${({ theme }) => theme.colors['base-span']};
        }
        

        svg{ 
            color: ${({ theme }) => theme.colors['base-label']};
        }
    }

`
export const PostBody = styled.div`
    width: 54rem;
    padding: 2rem;
`
