import '../styles/Home.css'

function Home() {

  return (
    <>
      <main className="home-main">
        <h2>Bienvenidos a la Tarea 4 del módulo 3: React Avanzado<br /> de la Diplomatura Full Stack en React</h2>
        <p>En esta tarea, trabajaremos sobre el marco del proyecto de la tarea anterior (Firebase Parte 2).</p>
        <p>Esta aplicación utiliza <strong>Context API</strong> para manejar de forma global el estado de autenticación del usuario. 
          A través de este contexto, se controla el acceso a los distintos módulos de la aplicación, asegurando que solo los usuarios 
          registrados y logueados puedan acceder al contenido protegido.
          </p>

        <h3>Ve a <a href="/register">Registro</a> o a <a href="/login">Login</a> para acceder</h3>
      </main>
    </>
  )
}

export { Home };