import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Header = () => {
    const { logout, user } = useAuth();

    return (
        <header>
            <h1>Trabajo Integrador - React</h1>
            <nav>
                <ul>
                <li><Link to="/">Inicio</Link></li>
                {!user ? (
                    <>
                    <li><Link to="/register-login">Iniciar Sesión o Registrarme</Link></li>
                    </>
                ) : (
                    <>
                    <li><Link to="/task-entity">Lista de Tareas</Link></li>
                    </>
                )}
                </ul>
                {user && <button className="logout-button" onClick={logout}>Cerrar sesión</button>}        
            </nav>
        </header>
    )
}

export { Header }