import styled from "styled-components";

export const CartContainer = styled.main`
     padding: 1rem 8rem 1rem 8rem;
     display: flex; 
     gap: 2rem; 
     line-height: 130%;
`
export const FinalInfos = styled.section`
     h2{ 
          color: ${({ theme }) => theme['base-subtitle']};
          font-family: 'Baloo 2', sans-serif;
          font-size: 1.125rem;
          margin-bottom: 0.938rem;

     }

     form { 
          width: 40rem; 
          height: 36.938rem; 
          gap: 0.75rem; 
     } 

`
export const AddressContainer = styled.div`
     height: 23.25rem;
     padding: 2.5rem; 
     background-color: ${({ theme }) => theme['base-card']};
     margin-bottom: 0.6rem;
`
export const AddressHeading = styled.div`
     display: flex; 
     gap: 0.5rem; 
     margin-bottom: 2rem;

      svg { 
          color: ${({ theme }) => theme['yellow-dark']}
      }

      div { 
          h3{ 
              color: ${({ theme }) => theme['base-subtitle']};
              font-size: 1rem; 
              font-weight: normal;
          }

          span{ 
               color: ${({ theme }) => theme['base-text']};
               font-size: 0.875rem; 
          }
      }
     
`
export const AddressForm = styled.div`
     height: 13.5rem;  
     display: grid; 
     grid-template-areas: 
     'cep . .'
     'street street street'
     'number fullAdress fullAddress'
     'neighborhood city state';
     grid-template-columns: 200px 1fr 60px;
     grid-gap: 16px 12px;
    
    
`
export const PaymentContainer = styled.div`
     height: 12.938rem; 
     padding: 2.5rem; 
     background-color: ${({ theme }) => theme['base-card']};
`
export const PaymentHeading = styled.div`
     display: flex; 
     gap: 0.5rem; 
     margin-bottom: 2rem;

     svg { 
          color: ${({ theme }) => theme['purple']};
     }
     div { 
          h3{ 
              color: ${({ theme }) => theme['base-subtitle']};
              font-size: 1rem; 
              font-weight: normal;
          }

          span{ 
               color: ${({ theme }) => theme['base-text']};
               font-size: 0.875rem; 
          }
      }
` 
export const PaymentOptions = styled.div`
     display: flex;
     gap: 0.75rem; 
     align-items: center;
     justify-content: center;
`
export const CoffeesSelected = styled.section``
export const CoffeesOptions = styled.div``
export const Coffee = styled.div``
export const CoffeInfo = styled.div``
export const CartTotal = styled.div``
export const CartTotalInfo = styled.div``
export const CheckoutButton = styled.button``
export const PaymentErrorMessage = styled.p``
