import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContext } from './pages/Home'
import { createContext } from 'react'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
          }}
        >
        <Router></Router>
        </CyclesContext.Provider>
      </BrowserRouter>
      {/* botões com estilos diferentes ( cores e etc) */}
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}
