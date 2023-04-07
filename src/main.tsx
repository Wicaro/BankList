import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './Interface/Global/GlobalStyle'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Core/Router/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
