import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './Interface/Global/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <GlobalStyle/>
  </React.StrictMode>,
)
