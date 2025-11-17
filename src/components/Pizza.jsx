import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {

    const obtenerPizza = async () => {
      const res = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await res.json();
      setPizza(data);
    };

    obtenerPizza();
  }, []);

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
      <button className="btn btn-success mt-3">Añadir</button>
    </div>
  );
};

export default Pizza;
