import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const User = "ProfeGabriel"
const Pass = "HaganLaTarea"

const Login = ({ setUser }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/dashboard'

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    setError("")

    if (username === User && password === Pass) {
      setUser({ name: username })
      navigate(from, { replace: true })
      return
    }

    setError("Usuario o contraseña incorrectos.")
  }

  return (
    <>
    <Header />
    <main className='login-main'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit">Ir al Dashboard</button>
      </form>
      {error && <p style={{ padding: '10px', color: 'red', fontSize: '20px' }}>{error}</p>}
      <p style={{ padding: '10px', fontSize: '20px' }}><br />Usuario válido: ProfeGabriel <br />Password válido: HaganLaTarea</p>
    </main>
    <Footer />
    </>
  )
}

export { Login }