import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { TextInput } from "../../components/Form/TextInput";
import { AddressContainer, CartContainer, CoffeesSelected, 
    FinalInfos, PaymentContainer } from "./style";
import { MapPin } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";


type FormInputs = {
    cep: number
    street: string
    number: string
    fullAddress: string
    neighborhood: string 
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
    cep: z.number({invalid_type_error: 'Informe o CEP'}),
    street: z.string().min(1, 'informe a rua'), 
    number: z.string().min(1, 'informe o número'), 
    fullAddress: z.string(), 
    neighborhood: z.string().min(1,'Informe o bairro'),
    city: z.string().min(1,'Informe a cidade'),
    state: z.string().min(1,'Informe a UF'),
    paymentMethod: z.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento', 
    }),

})

// export function Cart() {
//     const {
//         cart
//     } = useCart()
// }

// const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
//     if(cart.length === 0) { 
//         return alert("É preciso ter pelo menos um item no carrinho")
//     }
// }

export function Cart() {
    const {
        register, handleSubmit, watch, formState: {errors}, 
    } = useForm<FormInputs>({
        resolver: zodResolver(newOrder), 
    })
    return(
        <CartContainer>
            <FinalInfos>
            <h2>Complete seu pedido</h2>

            <form onSubmit={handleSubmit()}>
                <AddressContainer>
                    <MapPin size={22}></MapPin> 
                    <div>
                   
                    <h3>Endereço de Entrega</h3>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                    
                   
                        <TextInput
                            placeholder='CEP'
                            type='number'
                            containerProps={{style: {gridArea: 'cep'}}}
                            error={errors.cep}
                            {...register('cep', {valueAsNumber: true})}
                        ></TextInput>

                         <TextInput
                            placeholder='Rua'
                            containerProps={{style: {gridArea: 'street'}}}
                            error={errors.street}
                            {...register('street')}
                        ></TextInput>

                        <TextInput
                            placeholder='Número'
                            type='number'
                            containerProps={{style: {gridArea: 'number'}}}
                            error={errors.number}
                            {...register('number')}
                        ></TextInput>
                        
                         <TextInput
                            placeholder='Complemento'
                            optional
                            containerProps={{style: {gridArea: 'fullAdress'}}}
                            error={errors.fullAddress}
                            {...register('fullAddress')}
                        ></TextInput>

                        <TextInput
                            placeholder='Bairro'
                            containerProps={{style: {gridArea: 'neighborhood'}}}
                            error={errors.neighborhood}
                            {...register('neighborhood')}
                        ></TextInput>
                        
                       <TextInput
                            placeholder='Cidade'
                            containerProps={{style: {gridArea: 'city'}}}
                            error={errors.city}
                            {...register('city')}
                        ></TextInput>

                          <TextInput
                            placeholder='UF'
                            containerProps={{style: {gridArea: 'state'}}}
                            error={errors.state}
                            {...register('state')}
                        ></TextInput>

                  
                </AddressContainer>
                <PaymentContainer>
                    
                </PaymentContainer>
                </form>
            </FinalInfos>
           
            <CoffeesSelected></CoffeesSelected>
        </CartContainer>
    )
}

// Selecionar Palavras Iguais:

// Ctrl + D (ou Cmd + D no macOS):
// Selecione a palavra onde está o cursor e repita o comando para selecionar a próxima ocorrência da mesma palavra.
// Ctrl + Shift + L (ou Cmd + Shift + L no macOS):
// Seleciona todas as ocorrências da palavra onde está o cursor.

// Criar Cursores Manualmente:

// Alt + Click (ou Option + Click no macOS):
// Clique com o mouse onde deseja adicionar cursores adicionais enquanto mantém pressionada a tecla Alt (ou Option no macOS).