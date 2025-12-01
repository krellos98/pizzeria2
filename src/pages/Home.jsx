import { useState, useEffect } from "react";
import CardPizza from "./CardPizza"; 


const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.log("Error al obtener pizzas:", error);
      }
    };

    
    obtenerPizzas();
  }, []);

  return (
    <div className="container py-4 d-flex flex-wrap justify-content-center gap-4">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          id={pizza.id}             

          name={pizza.name}
          price={pizza.price}
          img={pizza.img}
          ingredients={pizza.ingredients}
        />
      ))}
    </div>
  );
};

export default Home;
