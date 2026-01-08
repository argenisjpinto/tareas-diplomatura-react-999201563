import { useNavigate } from 'react-router-dom'

const Inicio = () => {
  const navigate = useNavigate()

  return (
    <section className="inicio">
      <h2>Inicio</h2>
      <p>Bienvenido a la tarea de React Router.</p>
      <button onClick={() => navigate('/contacto')}>Ir a Contacto con useNavigate</button>
    </section>
  )
}

export default Inicio