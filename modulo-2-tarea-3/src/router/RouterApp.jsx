import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../views/Inicio.jsx'
import { Contacto } from '../views/Contacto.jsx'
import { NotFound } from '../views/NotFound.jsx'
import { Nosotros } from '../views/Nosotros.jsx'
import { Producto } from '../views/Producto.jsx'
import { Dashboard } from '../views/Dashboard.jsx'
import { Login } from '../views/Login.jsx'
import { ProtectedRoute } from '../components/ProtectedRoute.jsx'
import { useState } from 'react'
import { Layout } from '../views/Layout.jsx'

const RouterApp = () => {
  const [user, setUser] = useState(null)
  
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Inicio />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="producto/:id" element={<Producto />} />
      <Route path="dashboard" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>}/>
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route path="/login" element={<Login setUser={setUser} />} />
  </Routes>
</BrowserRouter>

  )
}

export { RouterApp }