// public routes

import { useSelector } from "react-redux";
import { Navigate } from "react-router";


export default function PublicRoute({ children }) {
    const isAuthenticated = useSelector((store) => store.authSlice.isAuthenticated);
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }
    return children;
    }