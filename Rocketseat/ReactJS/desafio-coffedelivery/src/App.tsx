import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"
import { defaultTheme } from "./styles/themes/default"
import { CartContextProvider } from "./contexts/CartProvider"
import { Header } from "./components/Header/Header"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle> 

   
        <CartContextProvider>
            <Header></Header>
            <Outlet></Outlet>
        </CartContextProvider>
   
    </ThemeProvider> 
  )
}


