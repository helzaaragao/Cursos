import { MapPin, Money, Timer } from "@phosphor-icons/react";
import { Details, Heading, Ilustration, PedidoConfirmadoContainer } from "./style";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import ilustration from '../../assets/Illustration.svg'
import { useTheme } from "styled-components";

export function PedidoConfirmado(){
    const {orders} = useCart()
    const {orderId} = useParams()
    const orderInfo = orders.find((order) => order.id === Number(orderId))
    const paymentMethod = { 
        credit: 'Cartão de crédito', 
        debit: 'Cartão de débito', 
        cash: 'Dinheiro'
    }

    if (!orderInfo?.id) {
        return null
      }

      const theme = useTheme()

    return (
        <PedidoConfirmadoContainer>
            <Details>
                <Heading>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </Heading>
             
                <div>
                    <MapPin
                        color={theme.white}
                    ></MapPin>
                    <div>
                            <span>Entregue em <strong>{orderInfo.street}, {orderInfo.number} </strong></span>
                    </div>
                </div>
                <div>
                    <Timer></Timer>
                    <span>
                        Previsão de entrega
                        <strong>20 min - 30 min</strong>
                    </span>
                </div>
                <div>
                    <Money></Money>
                    <span>Pagamento na entrega <strong>{paymentMethod[orderInfo.paymentMethod]}</strong></span>
                </div>
            </Details>
            <Ilustration>
                <img src={ilustration} alt="" />
            </Ilustration>

        </PedidoConfirmadoContainer>
    )
}