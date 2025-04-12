import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [listaPizzas, setListaPizzas] = useState([])
    const [pizzas, setPizzas] = useState([])

    // register & login

    const [user, setUser] = useState(null)
    const [userIsLogged, setUserIsLogged] = useState(false)
    const [products, setProducts] = useState([])

    const getPizzas = async () => {
        const response = await fetch ("http://localhost:5000/api/pizzas")
        const data = await response.json()
        setListaPizzas(data)
      }

    useEffect(() => {
        getPizzas()
      }, [])

    return (
        <GlobalContext.Provider value={{listaPizzas, setListaPizzas, getPizzas, pizzas, user, setUser, setUserIsLogged, userIsLogged}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider