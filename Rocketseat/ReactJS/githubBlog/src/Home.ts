import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    justify-content: center;

`
export const Profile = styled.div`
      position: relative;
       width: 54rem;
       height: 13.25rem;
       margin-top: 12rem;
       border-radius: 10px;
       background-color:  ${({ theme }) => theme.colors['base-profile']};
       display: flex;
       align-items: center;
       gap: 2rem;
`
export const ProfileImage = styled.div`
    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }
`
export const InfoProfile = styled.div``

export const Info = styled.div``