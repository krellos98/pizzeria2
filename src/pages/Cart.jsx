import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <div className="container py-5" style={{ maxWidth: 700 }}>
      <h2 className="mb-4">🛒 Carrito de compras</h2>
      {cart.map((p) => (
        <div
          key={p.id}
          className="d-flex align-items-center justify-content-between border rounded-3 p-3 mb-3 shadow-sm"
        >
          <div className="d-flex align-items-center gap-3">
            <img
              src={p.img}
              alt={p.name}
              style={{ width: 80, borderRadius: 10 }}
            />
            <div>
              <h6 className="text-capitalize mb-1">{p.name}</h6>
              <p className="m-0">${p.price.toLocaleString("es-CL")}</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decrease(p.id)}
            >
              -
            </button>
            <span>{p.count}</span>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => increase(p.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h4 className="text-end mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h4>
      <button className="btn btn-success w-100 mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
