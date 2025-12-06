document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('lead-form');
  const themeToggle = document.getElementById('theme-toggle');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
      alert('Por favor, completa tu nombre y correo electrónico para continuar.');
      return;
    }
    // Acá debería meter la lógica para enviar los datos a un servidor o al email de marketing pero no está en el alcance de la tarea.
    form.innerHTML = `<p>¡Gracias, <strong>${nombre}</strong>! Revisa tu correo <strong>${email}</strong> para obtener tu ebook de finanzas personales.</p>`;
  });

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});