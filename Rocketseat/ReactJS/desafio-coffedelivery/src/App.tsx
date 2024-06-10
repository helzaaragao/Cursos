import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { defaultTheme } from "./styles/themes/default"
import { Header } from "./components/Header/Header"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      </BrowserRouter> 
      <Header></Header>
      <GlobalStyle></GlobalStyle> 
    </ThemeProvider> 
  )
}

export default App
