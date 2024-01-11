import React, { useEffect, useState } from "react";
import axios from "axios";
import LogoEscuela from "../../images/logo-escuela.jpg";
import "../IniciarSesion/IniciarSesion.css";
import { useNavigate } from "react-router-dom";

function IniciarSesion() {

  const navigate = useNavigate();

  //const cookies = new Cookies
  const baseUrl = "http://localhost:5106/api/autenticacion/validar"; // Endpoint de autenticación
  const [form, setForm] = useState({
    Nombre_usuario: "",
    Contrasenia_usuario: "",
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
    try {
      const response = await axios.post(baseUrl, form); // Enviar los datos al endpoint POST
      const { token } = response.data;

      if (token) {
        // Si se recibe un token válido, redirigir a la página de inicio
        navigate("/home");
      } else {
        alert("El usuario o la contraseña no son correctos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un error al iniciar sesión");
    }
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
            name="Nombre_usuario"
            placeholder="Usuario"
            value={form.Nombre_usuario}
            onChange={handleChange}
          />
          <input
            className="contraseña"
            type="password"
            name="Contrasenia_usuario"
            placeholder="Contraseña"
            value={form.Contrasenia_usuario}
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
