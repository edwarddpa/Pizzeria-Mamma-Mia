import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CartContext } from '../context/CartContext';


const CardPizza = ({ id, name, price, ingredients, img, desc }) => {

  const { sumar} = useContext(CartContext)

  const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('Pizza añadida al carrito!')
        sumar(id)
      }

  return (
    <>
    <Card style={{ width: '23rem' }} >
      <Card.Img variant="top" src={img} alt={name}/>
      <Card.Body>
        <Card.Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>
        <Card.Text className='text-dark' >{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='ingredientes'>
        <h6>Ingredientes:</h6>
            <ul className='ingredientesTexto'>
            {ingredients && ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
            <li className='text-dark' key={index}>🍕 {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</li>
      ))
          ) : (
               <li className='text-dark'>No hay ingredientes disponibles</li>
          )}
            </ul>
        </ListGroup.Item>
        <ListGroup.Item>

          <div className='precioDiv text-dark'>
          Precio: ${price.toLocaleString('es-VE')}
          </div>

        <div className='btncards'>
        <Link to={`/pizza/${id}`} className='btn btn-light'>Ver más 👀</Link>
        <Button variant="dark" onClick={(e) => handleSubmit(e)}>Añadir 🛒</Button>
        </div>
        </ListGroup.Item>

 
      </ListGroup>
    </Card>
      
    </>
  )
}

export default CardPizza
