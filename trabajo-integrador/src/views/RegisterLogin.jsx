import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterLogin = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }
      navigate("/task-entity");

    } catch (error) {
      console.error(error);      
    }
}

  return (
    <main className="auth-container">
      <h1>{isRegister ? "Registrarse" : "Iniciar Sesión"}</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required 
        />

        <input 
          type="password" 
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required 
        />

        <button type="submit">
          {isRegister ? "Registrarme" : "Ingresar"}
        </button>
      </form>

      <p>
        {isRegister ? "¿Ya tenés cuenta?" : "¿No estás registrado?"}{" "}
        <span className="auth-link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Iniciá sesión" : "Registrate aquí"}
        </span>
      </p>
    </main>
  );
};

export { RegisterLogin }