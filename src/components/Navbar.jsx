import { NavLink } from 'react-router-dom'
import './Navbar.css'

/**
 * Navbar: barra de navegación principal.
 * Usa NavLink para marcar automáticamente la sección activa.
 */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MiApp</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/servicios" className={({ isActive }) => isActive ? 'active' : ''}>
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
