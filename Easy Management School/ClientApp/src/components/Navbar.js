import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <nav className="contenedor-nav">
      <img className='logo-escuela' src={props.urlImagen} alt="logo-de-la-escuela" />

      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/asistencias"}>Asistencias</Link>
        </li>
        <li>
          <Link to={"/licencias"}>Licencias</Link>
        </li>
        <li>
          <Link to={"/sanciones"}>Sanciones</Link>
        </li>
        <li className="dropdown">
          <span>Gestión Académica</span>
          <ul className="dropdown-content">
            <li>
              <Link to={"/planificaciones"}>Planificaciones</Link>
            </li>
            <li>
              <Link to={"/librotemas"}>Libro de Temas</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
