import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
    <Button variant='primary'></Button>
    <Button variant='secondary'></Button>
    <Button variant='sucess'></Button>
    <Button variant='danger'></Button>
    <Button></Button>
    {/* botões com estilos diferentes ( cores e etc) */}
    </ThemeProvider>
  )
}