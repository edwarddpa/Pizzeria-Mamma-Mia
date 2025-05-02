import {  createContext, useContext, useEffect, useState } from "react";
import { pizzaCart } from "../components/pizzas";
import { GlobalContext } from "./GlobalContext";
import toast from "react-hot-toast";
import { UserContext } from "./UserContext";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const { listaPizzas } = useContext(GlobalContext); // se obtienen las pizzas desde GlobalContext
    const [cart, setCart] = useState([])

    const token = localStorage.getItem("token")

    const fetchCheckout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ cart, user}), // Envía el carrito actual
            });
    
            if (response.ok) {
                const data = await response.json()
                toast.success("Pago realizado con éxito!")
                console.log("Respuesta del backend:", data)
            } else {
                toast.error("Error al procesar el pago");
                console.error("Error en la respuesta del backend:", response.statusText)
            }
        } catch (error) {
            toast.error("Error al conectar con el servidor")
            console.error("Error en fetchCheckout:", error)
        }
    }
        

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
        <CartContext.Provider value={{cart, sumar, restar, precioTotal, recargarCarrito, handlePago, fetchCheckout}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider