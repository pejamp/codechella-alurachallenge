import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/reset.scss'
import './styles/style-guide.scss'
import './styles/base.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
