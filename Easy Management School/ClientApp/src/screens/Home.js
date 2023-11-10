import React from "react";
import Navbar from "../components/Navbar";
import LogoEscuela from "../images/logo-escuela.jpg"

function Home() {
  return (
    <>
			<Navbar urlImagen={LogoEscuela}/>
      <div>Home</div>
    </>
  );
}

export default Home;
