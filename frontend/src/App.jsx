import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Footer from './components/Footer'
import RegisterPage from './views/RegisterPage'
import toast, { Toaster } from 'react-hot-toast'
import { LoginPage } from './views/LoginPage'
import Cart from './views/Cart'
import Pizza from './views/Pizza'

function App() {


  return (
    <>
      <Toaster/>
      <NavBar />
      {/*<Home  />*/}
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      {/*<Cart />*/}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
