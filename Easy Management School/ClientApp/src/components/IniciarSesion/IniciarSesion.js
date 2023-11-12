import React, { useEffect, useState } from "react";
import axios from "axios";
import LogoEscuela from "../../images/logo-escuela.jpg";
import "../IniciarSesion/IniciarSesion.css";
import { useNavigate } from "react-router-dom";

function IniciarSesion() {
  

  return (
    <div className="contenedor-principal">
      <img className="img-logo" src={LogoEscuela} alt="Logo" />
      <div className="card">
        <p className="p-bienvenido">Bienvenido!</p>
        <div className="contenedor-login">
          <input
            className="usuario"
            type="text"
            name="usuario"
            placeholder="Usuario"
            value={form.usuario}
            onChange={handleChange}
          />
          <input
            className="contraseña"
            type="password"
            name="contrasenia"
            placeholder="Contraseña"
            value={form.contrasenia}
            onChange={handleChange}
          />
          <button className="boton-login-ingresar" onClick={ingresar}>
            INGRESAR
          </button>
        </div>
      </div>
    </div>
  );
}
export default IniciarSesion;
