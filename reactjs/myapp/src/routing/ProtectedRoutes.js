import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector((store) => store.authSlice.isAuthenticated);
    console.log("ProtectedRoute", isAuthenticated);
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
    }