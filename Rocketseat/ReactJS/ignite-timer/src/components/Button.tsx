import style from './Button.module.css'
import { ButtonContainer } from './Button.styles';

interface ButtonProps{ 
    color?:'primary' | 'secondary' | 'danger'| 'sucess'; 
}

export function Button( {color = 'primary'}:ButtonProps){
    return(
        <ButtonContainer color={color}>Enviar</ButtonContainer>
    )
}