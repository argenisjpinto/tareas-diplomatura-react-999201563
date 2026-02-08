import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../views/Layout"
import { Home } from "../views/Home";
import { RegisterLogin } from "../views/RegisterLogin"
import { NotFound } from "../views/NotFound";
import { TasksEntity } from "../views/TasksEntity";
import { ProtectedRoute } from "../components/ProtectedRoute"

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="register-login" element={<RegisterLogin />} />
                    <Route path="task-entity" element={<ProtectedRoute><TasksEntity /></ProtectedRoute>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp };