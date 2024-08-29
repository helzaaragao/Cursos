import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
// import * as RadioGroup from '@radix-ui/react-radio-group';

const newTransactionFormSchema = z.object({
    description: z.string(), 
    price: z.number(), 
    category: z.string(), 
    type: z.enum(['income', 'outcome']), 
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal(){ 
    // control para controlar componentes não nativos do react
    const {
        control,  
        register, handleSubmit,
        formState: {isSubmitting}
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema), 
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs){
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data);
    }

    return(
        <Dialog.Portal>
            <Overlay></Overlay>
            <Content>
                    <Dialog.Title>Nova transação</Dialog.Title>
                    <CloseButton>
                     <X size={24}></X>
                    </CloseButton>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input 
                            type="text" 
                            placeholder='Descrição' 
                            required 
                            {...register('description')}
                            />
                        <input 
                            type="text" 
                            placeholder='Preço' 
                            required 
                            {...register('price', {valueAsNumber: true})}
                            />
                        <input 
                            type="text" 
                            placeholder='Categoria' 
                            required 
                            {...register('category')}
                            />

                            <Controller
                              control={control}
                              name='type'
                              render={({field}) => {
                                

                                return(

                                        <TransactionType onValueChange={field.onChange} value={field.value}>
                                        <TransactionTypeButton variant="income" value='income'>
                                            <ArrowCircleUp size={24}></ArrowCircleUp>
                                            Entrada
                                        </TransactionTypeButton>
                                        <TransactionTypeButton variant="outcome" value='outcome'>
                                            <ArrowCircleDown size={24}></ArrowCircleDown>
                                            Saída
                                        </TransactionTypeButton>
                                    </TransactionType>
                                )
                              }}
                            />

                           


                        <button
                        type='submit' disabled={isSubmitting}>
                            Cadastrar
                        </button>

                    </form>

                    
            </Content>
        </Dialog.Portal>
    )
}