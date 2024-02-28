import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean; 
    // essas propriedades não precisam porque existe na image element que estamos importando:
    // src: string; 
    // alt?: string; 
    //? não é obrigatorio colocar essa propriedade no componente
}

// crl espaço para ver todas as propriedades que podem utilizar nesse elemento que eu adicionei

export function Avatar( {hasBorder = true, ...props }: AvatarProps ) { 

    // ... props permiti qualquer tipo de propriedades sem precisar escrever ela um por um mesmo que não tenha no elemento que estou compartilhando
    
    // const hasBorder = props.hasBorder != false ; | formas de fazer para colocar o hasborder sem precisa ficar escrevendo um por um
    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder 
            : styles.avatar}
         {...props}
        />
    )
}