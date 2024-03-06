import style from './Button.module.css'

type Props = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
 HTMLButtonElement>



export function Button({children, ...rest}: Props){
    return(
        <button 
        className={style.button} 
        {...rest}
        >
          {children}
        </button>
        // posso mudar o nome de children para um mais entendivel depois, 
        //se tiver
    )
}