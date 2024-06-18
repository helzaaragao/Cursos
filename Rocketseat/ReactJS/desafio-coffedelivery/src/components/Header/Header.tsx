import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer } from './style'
import { Link, NavLink } from 'react-router-dom'

// Link|  aside | div | Link

export function Header() { 

   return(
      <HeaderContainer>
         <Link to="/"> 
         <img src={logo} />
         </Link> 
        <nav>
         <div>
         <MapPin size={25} weight='fill'></MapPin>
         <span>Fortaleza, CE</span>
         </div>
         <NavLink to="/">
            <ShoppingCart size={25} weight='fill'></ShoppingCart>
         </NavLink>
        </nav>
     </HeaderContainer>
   )
  
}