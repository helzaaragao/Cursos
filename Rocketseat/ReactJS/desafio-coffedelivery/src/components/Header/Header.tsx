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
         <MapPin size={32} weight='fill'></MapPin>
         <span>Fortaleza,CE</span>
         </div>
         <NavLink to="/">
            <ShoppingCart size={32} weight='fill'></ShoppingCart>
         </NavLink>
        </nav>
     </HeaderContainer>
   // //   @react-refresh:278 Uncaught TypeError: Cannot destructure property 'basename' of 'React2.useContext(...)' as it is null.
   //  at LinkWithRef (react-router-dom.js?v=e7379eca:4885:5)
   //  at renderWithHooks (chunk-QIO56VBJ.js?v=e7379eca:11566:26)
   //  at updateForwardRef (chunk-QIO56VBJ.js?v=e7379eca:14343:28)
   //  at beginWork (chunk-QIO56VBJ.js?v=e7379eca:15964:22)
   //  at beginWork$1 (chunk-QIO56VBJ.js?v=e7379eca:19779:22)
   //  at performUnitOfWork (chunk-QIO56VBJ.js?v=e7379eca:19224:20)
   //  at workLoopSync (chunk-QIO56VBJ.js?v=e7379eca:19163:13)
   //  at renderRootSync (chunk-QIO56VBJ.js?v=e7379eca:19142:15)
   //  at recoverFromConcurrentError (chunk-QIO56VBJ.js?v=e7379eca:18762:28)
   //  at performSyncWorkOnRoot (chunk-QIO56VBJ.js?v=e7379eca:18905:28)
   )
  
}