import React, { useContext } from 'react'
import Header from '../components/Header'
import "./Home.css"
import CardPizza from '../components/CardPizza';
import { GlobalContext } from '../context/GlobalContext';


const Home = () => {
  
  const  {listaPizzas} = useContext(GlobalContext)

  return (
  <div>
      <Header />

      <div className='container g-2 my-4 pizzas'>

        {listaPizzas.map((pizza, index) => (
          <CardPizza
          key={index}
          id={pizza.id}
          desc={pizza.desc}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
           />
          ))}

    </div>
  </div>
  )
}

export default Home
