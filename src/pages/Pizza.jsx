import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  

import { useCart } from "../context/CartContext"; 

const Pizza = () => {
  const { id } = useParams();   
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart(); 


  useEffect(() => {
    const obtenerPizza = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await res.json();
      setPizza(data);
    };

    obtenerPizza();
  }, [id]);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="container py-5 text-center">
       <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: 300, borderRadius: 10 }}
      />

      <h2 className="text-capitalize mt-3">{pizza.name}</h2>
      <p className="text-muted">{pizza.desc}</p>

      <h5 className="mt-3">Ingredientes:</h5>
      <ul className="list-unstyled">
        {pizza.ingredients.map((i, idx) => (
          <li key={idx}>🍕 {i}</li>
        ))}
      </ul>

      <h4 className="mt-4">${pizza.price.toLocaleString("es-CL")}</h4>

      <button
        className="btn btn-success mt-3"
        onClick={() =>
          addToCart({
            id: pizza.id,
            name: pizza.name,
            img: pizza.img,
            price: pizza.price,
          })
        }
      >
        Añadir
      </button>
    </div>
  );
};

export default Pizza;
