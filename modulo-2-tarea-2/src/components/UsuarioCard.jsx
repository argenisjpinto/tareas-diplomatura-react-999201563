function UsuarioCard({ usuario }) {
  return (
    <div className="usuario-card">
      <h3>{usuario.name}</h3>
      <p>Email: {usuario.email}</p>
    </div>
  );
}

export { UsuarioCard };