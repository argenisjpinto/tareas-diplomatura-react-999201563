import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await register(formData.email, formData.password);
      setSuccess('Usuario registrado con éxito');
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      setError(err.message || 'Error al registrar el usuario');
    }
  };

  return (
    <main className="auth-main">
      <section className="auth-form">
        <h2>Registro de Usuario</h2>
        <p>Crea tu cuenta para acceder a los módulos de la aplicación.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Registrarse</button>
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>

        <div className="auth-link">
          ¿Ya tenés cuenta? <a href="/login">Iniciar sesión</a>
        </div>
      </section>
    </main>
  );
};

export { Register };