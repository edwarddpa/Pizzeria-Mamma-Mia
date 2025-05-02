import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Pizza = ({id}) => {
    const [pizza , setPizza] = useState({})
    const { parametro } = useParams()

    const { sumar} = useContext(CartContext)

    const getPizza = async () => {
        const response = await fetch (`http://localhost:5000/api/pizzas/${parametro}`)
        const data = await response.json()
        setPizza(data)
    }

    useEffect(() => {
        getPizza()
    }, [parametro, pizza])

    if (!pizza) {
        // Muestra un mensaje de carga mientras se obtiene la pizza
        return <p>Cargando...</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sumar(id)
        toast.success('Pizza añadida al carrito!')
    }
     
  return (
    <div className='background d-flex justify-content-center align-items-center py-4' >

<Card style={{ width: '32rem' }} >
                <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                <Card.Body>
                    <Card.Title>
                        {pizza.name
                        ? pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1).toLowerCase()
                        : ''}
                    </Card.Title>
                    <Card.Text className="text-dark">{pizza.desc}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="ingredientes">
                        <h6>Ingredientes:</h6>
                        <ul className="ingredientesTexto">
                            {pizza.ingredients && pizza.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-dark">
                                    🍕 {ingredient.charAt(0).toUpperCase() + ingredient.slice(1).toLowerCase()}
                                </li>
                            ))}
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="precioDiv text-dark">
                        Precio: $
                            {pizza.price
                                ? Number(pizza.price).toLocaleString('es-VE')
                                : 'N/A'}
                        </div>
                        <div className="btncards">
                            <Button variant="light">Ver más 👀</Button>
                            <Button variant="dark" onClick={(e) => handleSubmit(e)}>Añadir 🛒</Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

      
    </div>
  )
}

export default Pizza
