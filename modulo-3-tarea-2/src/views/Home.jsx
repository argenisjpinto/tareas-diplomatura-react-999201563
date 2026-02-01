import '../styles/Home.css'

function Home() {

  return (
    <>
      <main className="home-main">
        <h2>Bienvenidos a la Tarea 3 del módulo 3: Firebase 2da parte<br /> de la Diplomatura Full Stack en React</h2>
        <p>En esta tarea, trabajaremos sobre la el marco del proyecto de la tarea anterior (Firebase Parte 1) e implementar la configuración de Firebase.</p>
        <p>Utiliza el menú de navegación para acceder a los formularios y experimentar el manejo de CRUD en Firestore.</p>
        <h3>Ve a <a href="/alumnos-list">Listado de Alumnos</a> para verificar la conexión</h3>
      </main>
    </>
  )
}

export { Home };