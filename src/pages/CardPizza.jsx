import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, img, ingredients }) => {
  const { addToCart } = useCart();

  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body text-center">
        <h5 className="card-title text-capitalize">{name}</h5>

        <p className="fw-bold">Ingredientes:</p>
        <ul className="list-unstyled">
          {ingredients.map((item, index) => (
            <li key={index}>🍕 {item}</li>
          ))}
        </ul>

        <h6 className="fw-bold mt-3">
          ${price.toLocaleString("es-CL")}
        </h6>

        <div className="d-flex justify-content-center gap-2 mt-2">
          {/* Ver más → Pizza individual */}
          <Link
            to={`/pizza/${id}`}
            className="btn btn-outline-primary btn-sm"
          >
            Ver más
          </Link>

          <button
            className="btn btn-success btn-sm"
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                img,
              })
            }
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
