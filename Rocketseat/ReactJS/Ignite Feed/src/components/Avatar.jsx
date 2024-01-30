import styles from './Avatar.module.css'

export function Avatar( {hasBorder = true, src} ) { 
    // const hasBorder = props.hasBorder != false ; | formas de fazer para colocar o hasborder sem precisa ficar escrevendo um por um
    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder 
            : styles.avatar}

        src={src} />

    )
}