import { useEffect, useMemo, useState } from 'react';
import { UsuarioCard } from './UsuarioCard';

function Usuarios({ refresh, searchUser }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
    setLoading(true);
    setError(null);

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('No se pudo obtener la lista de usuarios'); 
        const data = await res.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();      
  }, [refresh]);

  const usersFiltered = useMemo(() => {
    console.log("Filtrando usuarios...");
    const s = String(searchUser ?? "").toLowerCase();
    if (!s) return usuarios;

    return usuarios.filter((u) =>
      String(u.name ?? "").toLowerCase().includes(s.toLowerCase())
    );
  }, [usuarios, searchUser]);

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Lista de Usuarios</h2>
      {usersFiltered.length === 0 ? (<p>No se encontraron usuarios.</p>) : null}
      <ul>
        {usersFiltered.map((usuario) => (
          <li key={usuario.id}><UsuarioCard usuario={usuario} /></li>
        ))}
      </ul>
    </>
  );
}

export { Usuarios };