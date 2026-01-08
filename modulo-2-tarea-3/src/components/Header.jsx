import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>Tarea 3 - React Router</h1>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/producto/123?color=bordo&qty=1">Producto</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export { Header };