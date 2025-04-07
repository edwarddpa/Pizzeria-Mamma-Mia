import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const CardPizza = ({ id, name, price, ingredients, img, desc }) => {

  const handleSubmit = (e) => {
          e.preventDefault()
          toast.success('Pizza añadida al carrito!')
      }

  return (
    <div>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={img}  alt={name}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='text-dark' >{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='ingredientes'>
        <h6>Ingredientes:</h6>
            <ul className='ingredientesTexto'>
            {ingredients && ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
            <li className='text-dark' key={index}>🍕 {ingredient}</li>
      ))
          ) : (
               <li className='text-dark'>No hay ingredientes disponibles</li>
          )}
            </ul>
        </ListGroup.Item>
        <ListGroup.Item>

          <div className='precioDiv text-dark'>
          Precio: ${price}
          </div>

        <div className='btncards'>
        <Link to={`/pizza/${id}`} className='btn btn-light'>Ver más 👀</Link>
        <Button variant="dark" onClick={(e) => handleSubmit(e)}>Añadir 🛒</Button>
        </div>
        </ListGroup.Item>

 
      </ListGroup>
    </Card>
      
    </div>
  )
}

export default CardPizza
