import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
//import NotFound from "./Routes/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.detail} element={<Detail />} />
            <Route path={routes.favs} element={<Favs />} />
            <Route 
              path={routes.notFound} 
              element={<h1>Page not found - Error 404</h1>}
              //element={<NotFound /> 
            />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
