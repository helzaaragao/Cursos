import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router></Router>
        </CyclesContextProvider>
      </BrowserRouter>
      {/* botões com estilos diferentes ( cores e etc) */}
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}
