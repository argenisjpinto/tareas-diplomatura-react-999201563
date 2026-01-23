import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>Tarea 1 - Firebase: Parte 1</h1>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/firebase-check">Firebase Check</Link></li>
                <li><Link to="/formulario-eventos">Formulario de Eventos</Link></li>
                <li><Link to="/react-hook-form">Formulario con react-hook-form</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export { Header };