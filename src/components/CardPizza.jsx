const CardPizza = ({ name, price, img, ingredients }) => {
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
        <h6 className="fw-bold mt-3">${price.toLocaleString("es-CL")}</h6>
        <div className="d-flex justify-content-center gap-2 mt-2">
          <button className="btn btn-outline-primary btn-sm">Ver más</button>
          <button className="btn btn-success btn-sm">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
