import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (form.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    alert("Ingreso exitoso.");
    setForm({ email: "", password: "" });
  };

  return (
    <div className="container py-5" style={{ maxWidth: 540 }}>
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            placeholder="Tu contraseña"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
