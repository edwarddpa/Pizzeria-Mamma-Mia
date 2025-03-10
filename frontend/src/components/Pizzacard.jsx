import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Pizzacard = ({nombre, precio, ingredientes, img}) => {



  return (
    <>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='ingredientes'>
          <h6>
            Ingredientes:
          </h6>
          <p className='ingredientesTexto'>🍕{ingredientes}</p>

        </ListGroup.Item>
        <ListGroup.Item>

          <div className='precioDiv'>
          Precio: ${precio}
          </div>

        <div className='btncards'>
          <Button variant="light">Ver más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
        </ListGroup.Item>

 
      </ListGroup>
    </Card>
      
    </>
  )
}

export default Pizzacard
