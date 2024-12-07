//import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import {routes} from "../Routes/routes";
import {useContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar navbar-expand-lg ${state.theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"} px-4`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="container-fluid">
        <h1 className="navbar-brand text-danger">DH Odonto</h1>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to={routes.home} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={routes.contact} className="nav-link"> 
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to={routes.favs} className="nav-link">
              Favs
            </Link>
          </li>
        </ul>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className={`btn ${state.theme === "light" ? "btn-dark" : "btn-light"} text-warning`} onClick={toggleTheme}>
        {state.theme === "light" ? <i className="bi bi-moon"></i> : <i className="bi bi-sun"></i>}
      </button>
    </nav>
  )
}

export default Navbar;