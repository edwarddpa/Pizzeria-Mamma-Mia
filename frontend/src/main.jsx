import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import CartProvider from './context/CartContext.jsx'
import GlobalProvider from './context/GlobalContext.jsx'
import UserProvider from './context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>,
)
