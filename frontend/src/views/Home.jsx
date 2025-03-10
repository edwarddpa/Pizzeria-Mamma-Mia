import React from 'react'
import Header from '../components/Header'
import Pizzacard from '../components/Pizzacard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css"


const Home = () => {
  return (
    <div>
      <Header />

        <div className='pizzas'>


      <Pizzacard 
        nombre="Pizza Napolitana"
        precio={6.453}
        ingredientes={["mozzarella, ", "tomates, ", "jamón, ", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>



      <Pizzacard 
        nombre="Pizza Española"
        precio={7.173}
        ingredientes={["mozzarella, ", "gorgonzola, ", "parmesano, ", "provolone"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/>
 


      <Pizzacard 
        nombre="Pizza Pepperoni"
        precio={7.348}
        ingredientes={["mozzarella, ", "pepperoni, ", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"/>
        </div>


    </div>
  )
}

export default Home
