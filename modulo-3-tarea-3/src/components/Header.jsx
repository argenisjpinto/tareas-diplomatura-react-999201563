import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout, user } = useAuth();

  return (
    <header>
      <h1>Módulo 3 - Tarea 3: React Avanzado</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          {!user ? (
            <>
              <li><Link to="/register">Registrarme</Link></li>
              <li><Link to="/login">Iniciar Sesión</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/alumnos-list">Listado de Alumnos</Link></li>
              <li><Link to="/firebase-check">Firebase Check</Link></li>
              <li><Link to="/formulario-eventos">Formulario de Eventos</Link></li>
              <li><Link to="/react-hook-form">React Hook Form</Link></li>
            </>
          )}
        </ul>
          {user && <button className="logout-button" onClick={logout}>Cerrar sesión</button>}        
      </nav>
    </header>
  );
};

export { Header };