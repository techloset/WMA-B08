import { BrowserRouter } from "react-router";

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import Header from "./src/components/header/Header";


function App() {



  let url = window.location.href;
  console.log(url);
  url = url.split('/').pop();
  url = '/' + url;
  console.log(url);

  return (
    <div>
       <Header/>
      {url == '/' && <Home />}
      {url == '/about' && <About />}
      {url == '/contact' && <Contact />}
      {url == '/services' && <Services />}


    </div>
  )
}
export default App;