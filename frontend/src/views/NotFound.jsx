import React from 'react'
import pizza404 from '../assets/imgs/pizza404.png';


const NotFound = () => {
  return (
    <div className="background h-100 ">
        <div className='container d-flex justify-content-center aling-items-center py-5'>
            <div className='text-center'>
                <h1 className='text-danger'>Error 404</h1>
                <h2 className='text-white'>Página no encontrada</h2>
                <p className='text-white'>Lo sentimos, la página que buscas no existe.</p>
                <img src={pizza404} alt="404" className="img-fluid" style={{ width: '300px' }} />
                <a href="/" className='btn btn-outline-warning'>Volver al inicio</a>
            </div>

        </div>
    </div>
  )
}

export default NotFound
