import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import CartProvider from './context/CartContext.jsx'
import GlobalProvider from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </GlobalProvider>
  </StrictMode>,
)
