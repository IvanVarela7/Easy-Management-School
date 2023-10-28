import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className='contenedor-nav'>
			<ul>
				<li>
					<Link to={'/'}>Inicio</Link>
				</li>
				<li>
					<Link to={'/asistencias'}>Asistencias</Link>
				</li>
				<li>
					<Link to={'/licencias'}>Licencias</Link>
				</li>
				<li>
					<Link to={'/sanciones'}>sanciones</Link>
				</li>
			</ul>

		</nav>
	)
}

export default Navbar