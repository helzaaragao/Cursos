import style from './Input.module.css'

export function Input(
    {...rest}: 
    React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, 
    HTMLInputElement>){

    return(
        <input 
        type="text" 
        className={style.input}
        placeholder="Adicione uma nova tarefa"
        {...rest}
         />

    )
}

// No caso desse código, o ...rest está sendo usado para passar todas as propriedades que são permitidas para um <input> HTML padrão. Isso é feito utilizando React.DetailedHTMLProps para definir o tipo de todas as propriedades permitidas e HTMLInputElement para indicar o tipo do elemento HTML que está sendo renderizado.

// Essencialmente, esse código permite que você use o componente <Input> da seguinte maneira:
// jsx
// Copy code
// <Input id="myInput" name="myInput" />
// E isso seria equivalente a:

// jsx
// Copy code
// <input id="myInput" name="myInput" />
// Isso simplifica a criação de componentes personalizados que precisam aceitar todas as propriedades de um elemento HTML padrão, sem precisar listar todas as propriedades manualmente.





