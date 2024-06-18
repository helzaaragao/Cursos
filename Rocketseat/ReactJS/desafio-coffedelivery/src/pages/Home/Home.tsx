import { ShoppingCart, Package, Coffee, Timer } from '@phosphor-icons/react'
import { CoffeeBanner, CoffeeBannerContent, CoffeeList, Heading, Info } from './styles'
import coffeBanner from '../../assets/coffeBanner.svg'

export function Home(){ 
    return(
        <main>
           <CoffeeBanner>
                <CoffeeBannerContent>
                    <div>
                        <Heading>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                        </Heading>
                        <Info>
                           <div>
                            <ShoppingCart
                             size={25} 
                             weight='fill'></ShoppingCart>
                            <span>Compra simples e segura</span>
                           </div>
                           <div>
                           <Timer
                             size={25} 
                             weight='fill'></Timer>
                            <span>Entrega rápida e rastreada</span>
                           </div>
                           <div>
                           <Package
                             size={25} 
                             weight='fill'></Package>
                            <span>Embalagem mantém o café intacto</span>
                           </div>
                           <div>
                           <Coffee
                             size={25} 
                             weight='fill'></Coffee>
                            <span>O café chega fresquinho até você</span>
                           </div>
                        </Info>
                    </div>

                  <img src={coffeBanner} alt="" />
                </CoffeeBannerContent>
                 
                 <div></div>
           </CoffeeBanner>
           
           <CoffeeList>

           </CoffeeList>
        </main>
    )
}