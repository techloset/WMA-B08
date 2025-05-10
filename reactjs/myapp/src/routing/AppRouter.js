import { BrowserRouter, Routes, Route } from "react-router";

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Services from '../pages/services/Services';
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute >} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
                    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}