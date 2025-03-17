import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const LoginPage = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre === "" || email === "" || password === "" || password.length < 6) {
      console.log('Todos los campos son obligatorios')
      toast.error("Datos introducidos incorrectamente")
      return false
    }
    console.log('Formulario enviado')
    toast.success('Inicio de sesión con éxito')
  }


  return (
    <div className='background'>
      <h1 className='text-center pt-5'>Iniciar Sesión</h1>
      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
       <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
       <div className='col-6'>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='nombre' name='name' value={nombre} onChange={(e) => handleChangeNombre(e)} placeholder='Introduce tu nombre' required />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Correo Electrónico</label>
          <input type='email' className='form-control' id='email' name='email' value={email} onChange={(e) => handleChangeEmail(e)} placeholder='example@mail.com' required />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>Contraseña</label>
          <input type='password' className='form-control' id='password' name='password' value={password}  onChange={(e) => handleChangePassword(e)} placeholder='Introduce tu contraseña' required />
            {password.length < 6 && <p className='text-danger'>La contraseña debe tener al menos 6 caracteres</p>}	
        </div>
        <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
       </div>
       </div>
      </form>
    </div>
  )
}
