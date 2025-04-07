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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './views/Profile'
import NotFound from './views/NotFound'


function App() {


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
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
