import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {

  const {handleChangeNombre, handleChangePassword, handleChangeEmail, nombre, email, password, handleSubmitLogin} = useContext(UserContext)




  return (
    <div className='background'>
      <h1 className='text-center pt-5'>Iniciar Sesión</h1>
      <form action="submit" onSubmit={(e) => handleSubmitLogin(e)}>
       <div className=" d-flex justify-content-center pt-5" style={{height: '100vh'}}>
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
