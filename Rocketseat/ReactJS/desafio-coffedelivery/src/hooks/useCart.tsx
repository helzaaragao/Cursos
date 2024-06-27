import {useContext} from 'react'

import {CartContext} from '../contexts/CartProvider'

export function useCart() {
    return(
       return useContext(CartContext)
    )
}