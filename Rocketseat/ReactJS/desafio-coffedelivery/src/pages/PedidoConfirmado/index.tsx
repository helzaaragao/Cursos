import { MapPin } from "@phosphor-icons/react";
import { Details, Ilustration, PedidoConfirmadoContainer } from "./style";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import ilustration from '../../assets/Illustration.svg'
import { useTheme } from "styled-components";

export function PedidoConfirmado(){
    const {orders} = useCart()
    const {orderId} = useParams()
    const orderInfo = orders.find((order) => order.id === Number(orderId))

    if (!orderInfo?.id) {
        return null
      }

      const theme = useTheme()

    return (
        <PedidoConfirmadoContainer>
            <Details>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <div>
                    <MapPin></MapPin>
                    <div>
                        <span>Entregue em <strong>{orderInfo.street}, {orderInfo.number} </strong></span>
                    </div>
                </div>
            </Details>
            <Ilustration>
                <img src={ilustration} alt="" />
            </Ilustration>

        </PedidoConfirmadoContainer>
    )
}