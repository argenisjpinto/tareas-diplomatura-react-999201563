import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { FormularioEventos } from "../views/FormularioEventos"
import { FormularioReactHookForm } from "../views/FormularioReactHookForm"
import { NotFound } from "../views/NotFound"
import { Layout } from "../views/Layout"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/formulario-eventos" element={<FormularioEventos />} />
            <Route path="/react-hook-form" element={<FormularioReactHookForm />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }