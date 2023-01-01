import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes'
import FontStyle from './style/fontStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
    <FontStyle />
  </React.StrictMode>,
)
