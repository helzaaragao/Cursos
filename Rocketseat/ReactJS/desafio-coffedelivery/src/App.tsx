import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { defaultTheme } from "./styles/themes/default"
import { Router } from "./Router"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
       <Router></Router>
      </BrowserRouter> 
      <GlobalStyle></GlobalStyle> 
    </ThemeProvider> 
  )
}

export default App
