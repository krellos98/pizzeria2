// src/pages/Home.jsx
import { pizzas } from "../pizzas";
import CardPizza from "../components/CardPizza";

const Home = () => {
  return (
    <div className="container py-4 d-flex flex-wrap justify-content-center gap-4">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
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
