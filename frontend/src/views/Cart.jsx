import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, sumar, restar, precioTotal, recargarCarrito, handlePago } = useContext(CartContext)

    if (cart.length === 0) {
        return (
        <div className='background '>

         <h2 className="text-center pt-5">El carrito está vacío</h2>
         <div className='d-flex justify-content-center pt-5'>
         <button className='btn btn-primary' onClick={recargarCarrito}>Volver a cargar las pizzas</button>
         </div>
        </div>
        )
    }

  return (
    <div className='background'>
        <h1 className='cartTitulo text-center py-2'>Detalles del pedido</h1>
        {cart.map((pizza) => (
            <div key={pizza.id} className='cartContainer'>
                <div className='cartContainerLeft'>
                <img className='img-fluid img-thumbnail ' src={pizza.img} alt={pizza.name} width="150rem"/>
                <h3 className=' text-capitalize p-2'>{pizza.name}</h3>
                </div>

                <div className='cartContainerRight'>
                    <p className='cartPrecio mx-3  p-2 fs-4'>${pizza.price.toLocaleString('es-VE')}</p>
                    <button onClick={() => restar(pizza.id)} className='btnCart btn btn-outline-danger' >-</button>
                    <p className='cartCount p-2 fs-4'>{pizza.count}</p>
                    <button onClick={() => sumar(pizza.id)} className='btnCart btn btn-outline-primary'>+</button>
                </div>
            </div>
        ))}

        <div className='cartTotal'>
            <h3 className='text-center'>Total: ${precioTotal}</h3>
            <button type="button" className="btn btn-success btn-lg" onClick={handlePago}>Pagar</button>
        </div>
    </div>
  )
}

export default Cart
