import '@/App.css'
import Tarjeta from '@/components/Tarjeta'

function App() {

  return (
    <>
    <main>
      <div className='container'>
        <Tarjeta
          nombre="Sofía Martínez"
          profesion="Desarrolladora Full Stack"
          imagen="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
          descripcion="Especializada en React y Node.js. Creando soluciones escalables para startups tecnológicas."
        />
        
        <Tarjeta
          nombre="Diego Fernández"
          profesion="UX/UI Designer"
          imagen="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
          descripcion="Diseñando interfaces intuitivas que conectan marcas con usuarios. 5 años de experiencia."
        />

        <Tarjeta
          nombre="Ana Rodríguez"
          profesion="Data Scientist"
          imagen="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300"
          descripcion="Transformando datos en insights accionables. Experta en Machine Learning y Python."
        />
      </div>
    </main>
    <footer>
      <p>Desarrollado por Argenis Pinto© 2025 .</p>
    </footer>
    </>
  )
}

export default App