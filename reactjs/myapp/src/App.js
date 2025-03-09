import { BrowserRouter,Routes, Route, useLocation  } from "react-router";

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import Button from "./components/button/Button";
import Header from "./components/header/Header";


function App() {



  return (
    <div>

    <BrowserRouter>

    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>  
    </BrowserRouter>


    </div>
  )
}
export default App;