import React from 'react'
import { pizzaCart } from '../components/pizzas'
import { useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart)

    const sumar = (id) => {
        const newCart = cart.map((pizza) => {
            if (pizza.id === id) {
                return {
                    ...pizza,
                    count: pizza.count + 1
                }
            }
            return pizza
        })
        setCart(newCart)
    }

    const restar = (id) => {
        const newCart = cart.map((pizza) => {
            if (pizza.id === id) {
                return {
                    ...pizza,
                    count: pizza.count - 1,
                };
            }
            return pizza;
        })
        .filter((pizza) => pizza.count > 0)
        setCart(newCart);
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
            <h3 className='text-center'>Total: ${cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0).toLocaleString('es-VE')}</h3>
            <button type="button" class="btn btn-success btn-lg">Pagar</button>
        </div>
    </div>
  )
}

export default Cart
