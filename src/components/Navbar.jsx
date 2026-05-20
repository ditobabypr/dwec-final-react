import { NavLink } from 'react-router-dom'
import { useTema } from '../context/TemaContext'
import './Navbar.css'

/**
 * Navbar: barra de navegación principal.
 * Incluye links con NavLink y botón de alternancia de tema claro/oscuro.
 */
function Navbar() {
  const { oscuro, toggleTema } = useTema()

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

      <button className="btn-tema" onClick={toggleTema} title="Cambiar tema">
        {oscuro ? '☀️ Claro' : '🌙 Oscuro'}
      </button>
    </nav>
  )
}

export default Navbar
