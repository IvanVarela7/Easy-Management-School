import React, { useEffect, useState } from "react";
import axios from "axios";
import LogoEscuela from "../../images/logo-escuela.jpg";
import "../IniciarSesion/IniciarSesion.css";
import { useNavigate } from "react-router-dom";

function IniciarSesion() {
  
  const navigate = useNavigate();

  //const cookies = new Cookies
  const baseUrl = "http://localhost:5106/api/usuarios/iniciarsesion";
  const [form, setForm] = useState({
    usuario: "",
    contrasenia: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const ingresar = async () => {
    await axios
      .get(baseUrl + `/${form.usuario}/${form.contrasenia}`)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          console.log(respuesta);

          navigate("/home");
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
