import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { FormularioEventos } from "../views/FormularioEventos"
import { FormularioReactHookForm } from "../views/FormularioReactHookForm"
import { NotFound } from "../views/NotFound"
import { Layout } from "../views/Layout"
import { FirebaseCheck } from "../views/FirebaseCheck"
import { ListadoAlumnos } from "../views/ListadoAlumnos"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/alumnos-list" element={<ListadoAlumnos />} />
            <Route path="/formulario-eventos" element={<FormularioEventos />} />
            <Route path="/react-hook-form" element={<FormularioReactHookForm />} />
            <Route path="/firebase-check" element={<FirebaseCheck />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }