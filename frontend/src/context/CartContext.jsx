import {  createContext, useContext, useEffect, useState } from "react";
import { pizzaCart } from "../components/pizzas";
import { GlobalContext } from "./GlobalContext";
import toast from "react-hot-toast";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const { listaPizzas } = useContext(GlobalContext); // Obtén las pizzas desde GlobalContext
    const [cart, setCart] = useState([])

    const handlePago = (e) => {
        e.preventDefault()
        toast.success("Pago realizado con exito!")
        console.log("hola")
    }

    useEffect(() => {
        if (listaPizzas.length > 0) {
            setCart(listaPizzas.map((pizza) => ({ ...pizza, count: 1 })));
        }
    }, [listaPizzas])

    const precioTotal = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0).toLocaleString('es-VE')

    const recargarCarrito = () => {
        if (listaPizzas.length > 0) {
            setCart(listaPizzas.map((pizza) => ({ ...pizza, count: 1 })));
        }
    }

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
        <CartContext.Provider value={{cart, sumar, restar, precioTotal, recargarCarrito, handlePago}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider