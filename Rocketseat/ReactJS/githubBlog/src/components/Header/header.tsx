import { HeaderContainer } from "./style";
import Logo from '../../assets/Logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <img src={Logo} alt="" />
        </HeaderContainer>
    )
}