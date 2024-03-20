import { ThemeProvider } from 'styled-components'

import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"></Button>
      <Button variant="secondary"></Button>
      <Button variant="sucess"></Button>
      <Button variant="danger"></Button>
      <Button></Button>
      {/* botões com estilos diferentes ( cores e etc) */}
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}
