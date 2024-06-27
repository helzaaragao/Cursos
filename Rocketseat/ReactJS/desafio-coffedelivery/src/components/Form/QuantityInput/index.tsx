import { Minus, Plus } from "@phosphor-icons/react"

type Props = {
    quantity: number
    incrementQuantity: () => void 
    decrementQuantity: () => void 
}

export function QuantityInput({
    quantity, incrementQuantity, decrementQuantity
}: Props){ 
    return(
        <>
         <button onClick={decrementQuantity}>
            <Minus size={14}></Minus>
         </button>
         <span>{quantity}</span>
         <button onClick={incrementQuantity}>
            <Plus size={14}></Plus>
         </button>
        </>
    )
}