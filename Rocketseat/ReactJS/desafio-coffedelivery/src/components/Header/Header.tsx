import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer } from './style'

// Link|  aside | div | Link

export function Header() { 

   return(
      <HeaderContainer>
      <img src={logo} />
        <nav>
         <div>
         <MapPin size={32} weight='fill'></MapPin>
         <span>Fortaleza,CE</span>
         </div>
         <div>
            <ShoppingCart size={32} weight='fill'></ShoppingCart>
         </div>
        </nav>
     </HeaderContainer>
   )
  
}