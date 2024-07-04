import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput } from "../../components/Form/TextInput";
import { AddressContainer, CartContainer, CoffeesSelected, 
    FinalInfos, PaymentContainer } from "./style";
import { MapPin } from "@phosphor-icons/react";


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
    paymentMethod: z.number(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento', 
    }),

})

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
                <AddressContainer>
                    <MapPin size={22}></MapPin> 
                    <div>
                   
                    <h3>Endereço de Entrega</h3>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                    
                    <form action="">
                        <TextInput
                            placeholder='CEP'
                            type='number'
                            containerProps={{style: {gridArea: 'cep'}}}
                            error={errors.cep}

                        ></TextInput>
                    </form>
                </AddressContainer>
                <PaymentContainer>

                </PaymentContainer>
            </FinalInfos>
            <CoffeesSelected></CoffeesSelected>
        </CartContainer>
    )
}