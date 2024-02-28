import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ! para dizer que vai existir sim, mesmo que ele discorde ( não é ideal para muitas ocasião)
