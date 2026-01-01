import { Usuarios } from '../components/Usuarios'
import '../styles/Home.css'
import { useCallback, useState } from 'react';

function Home() {
  const [refresh, setRefresh] = useState(0);
  const [searchUser, setSearchUser] = useState('');

  const handleRefresh = () => {setRefresh((prev) => prev + 1);};
  const handleSearchUser = useCallback((e) => {setSearchUser(e.target.value)}, []);
   
  return (
    <>
      <section>
        <div>
          <input type="text" placeholder="Buscar un usuario…" value={searchUser}
            onChange={handleSearchUser} aria-label="Buscar un usuario"/>
        </div>
              <button className="home-button" onClick={handleRefresh}>Recargar</button>
      </section>
      <section><Usuarios refresh={refresh} searchUser={searchUser} /></section>

    </>
  )
}

export default Home