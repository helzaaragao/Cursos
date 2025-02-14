import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header/header"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>
 
    <Header></Header>
    </ThemeProvider>
  )
}