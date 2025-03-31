import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = ({ name, price, ingredients, img, desc }) => {
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
                {ingredients.toUpperCase.map((ingredient, index) => (
                <li key={index} className='text-dark'>🍕 {ingredient}</li>
            ))}
            </ul>
        </ListGroup.Item>
        <ListGroup.Item>

          <div className='precioDiv text-dark'>
          Precio: ${price}
          </div>

        <div className='btncards'>
          <Button variant="light">Ver más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
        </ListGroup.Item>

 
      </ListGroup>
    </Card>
      
    </div>
  )
}

export default CardPizza
