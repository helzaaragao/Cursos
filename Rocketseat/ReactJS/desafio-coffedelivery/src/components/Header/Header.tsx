import logo from '../../assets/logo.svg'
import { CepPrompt } from '../CepPrompt'

// setValue ('nome dado por mim', varivael.tanto)
// ideia: colocar um prompt quando abrir o site para pedir cep e utilizar ele no campo que pede
// https://www.npmjs.com/package/react-router-prompt testar
// pesquisar prompt no react no youtube | mas eu acho que em qualquer lugar funciona e é primeira coisa a abrir, talvez não precise de uma pasta para isso seila

export function Header() { 
   return(
 
      <header>
      <img src={logo} />
     
       <div>
       <CepPrompt></CepPrompt>
       </div>
     </header>
   )
  
}