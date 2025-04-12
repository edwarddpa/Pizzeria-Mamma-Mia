import { useContext} from 'react'
import { LoginPage } from './views/LoginPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext'
import toast, { Toaster } from 'react-hot-toast'
import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Footer from './components/Footer'
import RegisterPage from './views/RegisterPage'
import Cart from './views/Cart'
import Pizza from './views/Pizza'
import Profile from './views/Profile'
import NotFound from './views/NotFound'


function App() {

  const {userIsLogged} = useContext(GlobalContext)

  return (
    <BrowserRouter>
      <Toaster/>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path='/profile' element={userIsLogged ? <Profile /> : <Navigate to="/login" />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
