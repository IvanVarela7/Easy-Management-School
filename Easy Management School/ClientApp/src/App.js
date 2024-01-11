import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Asistencias from "./screens/Asistencias";
import NotFound404 from "./screens/NotFound404";
import Licencias from "./screens/Licencias";
import Sanciones from "./screens/Sanciones";
import LibroTemas from "./screens/LibroTemas";
import Planificaciones from "./screens/Planificaciones";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/asistencias" element={<Asistencias />} />
        <Route path="/licencias" element={<Licencias />} />
        <Route path="/sanciones" element={<Sanciones />} />
        <Route path="/librotemas" element={<LibroTemas />} />
        <Route path="/planificaciones" element={<Planificaciones />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
