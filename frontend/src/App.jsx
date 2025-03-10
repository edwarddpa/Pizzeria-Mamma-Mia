import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Footer from './views/Footer'


function App() {


  return (
    <div className=''>
      <NavBar />
      <Home  />
      <Footer />
    </div>
  )
}

export default App
