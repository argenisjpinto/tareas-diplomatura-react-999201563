import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../views/Layout";
import { Home } from "../views/Home";
import { NotFound } from "../views/NotFound";
import { FirebaseCheck } from "../views/FirebaseCheck";
import { ListadoAlumnos } from "../views/ListadoAlumnos";
import { FormularioEventos } from "../views/FormularioEventos";
import { FormularioReactHookForm } from "../views/FormularioReactHookForm";
import { Register } from "../views/Register";
import { Login } from "../views/Login";
import { ProtectedRoute } from "../components/ProtectedRoute";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="alumnos-list" element={<ProtectedRoute><ListadoAlumnos /></ProtectedRoute>} />
          <Route path="firebase-check" element={<ProtectedRoute><FirebaseCheck /></ProtectedRoute>} />
          <Route path="formulario-eventos" element={<ProtectedRoute><FormularioEventos /></ProtectedRoute>} />
          <Route path="react-hook-form" element={<ProtectedRoute><FormularioReactHookForm /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };