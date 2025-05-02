import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import './RegisterPage.css'

const RegisterPage = () => {

  const { handleSubmitRegister, handleChangePassword, handleChangeEmail, handleChangeNombre, handleChangeConfirmPassword, email, password, nombre, confirmPassword } = useContext(UserContext)

  return (
    <div className='background'>
      <h1 className='text-center pt-5'>Registrarse</h1>
      <form onSubmit={handleSubmitRegister}>
       <div className="d-flex justify-content-center  pt-5" style={{height: '100vh'}}>
       <div className='col-6'>
       <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='nombre' name='name' value={nombre} onChange={(e) => handleChangeNombre(e)} placeholder='Introduce tu nombre' required />
          {nombre === "" && <p className='text-danger'>El campo Nombre es obligatorio</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Correo Electrónico</label>
          <input type='email' className='form-control' id='email' name='email' value={email} onChange={(e) => handleChangeEmail(e)} placeholder='example@mail.com' required/>
          {email === "" && <p className='text-danger'>El campo Correo Electrónico es obligatorio</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>Contraseña</label>
          <input type='password' className='form-control' id='password' name='password' value={password} onChange={(e) => handleChangePassword(e)} placeholder='Introduce tu contraseña' required />
            {password === "" && <p className='text-danger'>El campo Contraseña es obligatorio</p>}
            {password.length < 6 && <p className='text-danger'>La contraseña debe tener al menos 6 caracteres</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='confirmPassword' className='form-label'>Confirmar Contraseña</label>
          <input type='password' className='form-control' id='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={(e) => handleChangeConfirmPassword(e)} placeholder='Confirma tu contraseña'/>
          {confirmPassword && password !== confirmPassword && <p className='text-danger'>Las contraseñas no coinciden</p>}
        </div>
        <button type='submit' className='btn btn-primary'>Registrarse</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
