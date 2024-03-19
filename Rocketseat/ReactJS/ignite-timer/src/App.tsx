import { useState } from 'react'
import { Button } from './components/Button'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button color='primary'></Button>
    <Button color='secondary'></Button>
    <Button color='sucess'></Button>
    <Button color='danger'></Button>
    <Button></Button>
    {/* botões com estilos diferentes ( cores e etc) */}
    </>
  )
}