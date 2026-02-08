
const Home = () => {
  return (
    <main className="home-page">
      <section className="home-section">
        <h1>Trabajo Integrador Final – React</h1>
        <p>
          Esta aplicación web fue desarrollada como trabajo integrador del módulo
          React de la Diplomatura Professional FullStack. El objetivo principal es 
          aplicar los conceptos fundamentales vistos a lo largo de la cursada, integrando 
          autenticación, navegación entre páginas y gestión de datos con Firebase.
        </p>
      </section>

      <section className="home-section">
        <h2>🧩 Descripción general del proyecto</h2>
        <p>
          La aplicación permite a los usuarios registrarse e iniciar sesión mediante
          Firebase Authentication. Una vez autenticados, pueden acceder a un
          dashboard privado donde gestionan una lista de tareas personales.
        </p>
        <p>
          Cada tarea se clasifica según la Matriz de Gestión del Tiempo
          (urgente/importante), lo que facilita la priorización y organización de
          actividades diarias.
        </p>
      </section>

      <section className="home-section">
        <h2>⚙️ Tecnologías utilizadas</h2>
        <ul>
          <li>React JS</li>
          <li>React Router DOM</li>
          <li>Firebase Authentication</li>
          <li>Firebase Firestore</li>
          <li>Context API (AuthContext)</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>📁 Estructura del proyecto</h2>
        <ul>
          <li><strong>components:</strong> componentes reutilizables (Header, Footer, TaskCard, etc.)</li>
          <li><strong>views:</strong> vistas principales de la aplicación (Home, Login/Registro, Dashboard)</li>
          <li><strong>context:</strong> manejo global de autenticación mediante AuthContext</li>
          <li><strong>services:</strong> lógica de acceso a Firebase (Firestore)</li>
          <li><strong>styles:</strong> estilos CSS nativos</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>🔐 Autenticación y manejo de sesión</h2>
        <p>
          El estado de autenticación se gestiona de forma global mediante un
          AuthContext, permitiendo acceder al usuario autenticado desde cualquier
          componente de la aplicación.
        </p>
        <p>
          Las rutas privadas están protegidas para evitar el acceso a usuarios no
          autenticados.
        </p>
      </section>

      <section className="home-section">
        <h2>🛠️ Decisiones técnicas relevantes</h2>
        <ul>
          <li>Separación de componentes según responsabilidad.</li>
          <li>Uso de Context API para evitar prop drilling.</li>
          <li>Reglas de seguridad en Firestore basadas en el usuario autenticado.</li>
          <li>Clasificación automática de tareas según la matriz Q1–Q4.</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>⚠️ Dificultades encontradas</h2>
        <p>
          Durante el desarrollo se presentaron desafíos relacionados con la
          configuración de reglas de seguridad en Firestore y el manejo correcto
          del estado global de autenticación, los cuales fueron resueltos aplicando
          las buenas prácticas recomendadas por la bibliografía y lo visto en clase.
        </p>
      </section>
    </main>
  );
};

export { Home }