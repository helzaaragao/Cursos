import styled from "styled-components"

export const ProfileAvatar = styled.section`
       position: relative;
       width: 54rem;
       height: 13.25rem;
       margin-top: 12rem;
       border-radius: 10px;
       background-color:  ${({ theme }) => theme.colors['base-profile']};
       display: flex;
       align-items: center;
       padding: 1.5rem;
       gap: 2rem;
`
export const ProfileImage = styled.div`
    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }
`
export const InfoProfile = styled.div`
    width: 38.25rem;

    div:first-child{
        display: flex;
        justify-content: space-between;
            h1{
                font-size: 1.5rem;
                color: ${({ theme }) => theme.colors['base-title']};
                height: 1.938rem;
            }   

            span{
                display: flex;
                gap: 0.2rem;
                font-weight: bold;
                align-items: center;

                :hover{
                    border-bottom: 1px solid;
                    border-color: ${({ theme }) => theme.colors['blue']};
                }

                a{
                    color: ${({ theme }) => theme.colors['blue']};
                    text-decoration: none;
                    text-transform: uppercase;
                }
                svg {
                    color:${({ theme }) => theme.colors['blue']};
                    cursor: pointer;
                }
            
            }
        
    }

    p{
        margin-top: 0.4rem;
        height: 3.25rem;
    }
   
`

export const Info = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

     div{
        display: flex;
        align-items: center;
        gap: 0.3rem;
            svg{
            color: ${({ theme }) => theme.colors['base-label']};
            }
    }
`