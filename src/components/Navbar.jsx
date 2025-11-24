// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <div className="d-flex gap-2">

        <Link to="/" className="btn btn-outline-light">🍕 Home</Link>
        <Link to="/profile" className="btn btn-outline-light">🔓 Profile</Link>
        <Link to="/login" className="btn btn-outline-light">🔐 Login</Link>
        <Link to="/register" className="btn btn-outline-light">🔐 Register</Link>

      </div>

      <Link to="/cart" className="btn btn-success">
        🛒 Total: $0
      </Link>
    </nav>
  );
};

export default Navbar;
