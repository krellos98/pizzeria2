import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [message, setMessage] = useState(null); // { type: 'success'|'error', text }

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setMessage(null);
  };

  const validate = () => {
    if (!form.email.trim() || !form.password || !form.confirm) {
      return { ok: false, text: "Todos los campos son obligatorios." };
    }
    if (form.password.length < 6) {
      return { ok: false, text: "La contraseña debe tener al menos 6 caracteres." };
    }
    if (form.password !== form.confirm) {
      return { ok: false, text: "La contraseña y su confirmación no coinciden." };
    }
    return { ok: true };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (!v.ok) {
      setMessage({ type: "error", text: v.text });
      return;
    }
    setMessage({ type: "success", text: "Registro exitoso." });
    setForm({ email: "", password: "", confirm: "" });
  };

  return (
    <div className="container py-5" style={{ maxWidth: 540 }}>
      <h2 className="mb-4">Registro</h2>

      {message && (
        <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"}`} role="alert">
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            name="password"
            type="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            name="confirm"
            type="password"
            className="form-control"
            value={form.confirm}
            onChange={handleChange}
            required
            minLength={6}
            placeholder="Repita la contraseña"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
