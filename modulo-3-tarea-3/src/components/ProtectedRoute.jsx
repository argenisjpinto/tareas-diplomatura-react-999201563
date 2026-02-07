import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to={redirectTo} replace />;
    }    
    return children ? children : <Outlet />;
};

export { ProtectedRoute }