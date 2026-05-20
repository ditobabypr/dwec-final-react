import './Inicio.css'

/**
 * Inicio: pantalla de bienvenida con descripción del proyecto.
 */
function Inicio() {
  return (
    <div className="inicio">
      <div className="inicio-hero">
        <h1>Bienvenido a MiApp</h1>
        <p className="inicio-subtitle">
          Una aplicación web moderna construida con React
        </p>
      </div>

      <div className="inicio-cards">
        <div className="card">
          <span className="card-icon">🧩</span>
          <h3>Componentes React</h3>
          <p>Interfaz construida con componentes reutilizables y estado dinámico.</p>
        </div>
        <div className="card">
          <span className="card-icon">🗺️</span>
          <h3>Navegación SPA</h3>
          <p>Navegación entre secciones sin recargar la página usando React Router.</p>
        </div>
        <div className="card">
          <span className="card-icon">🎨</span>
          <h3>Modo Oscuro/Claro</h3>
          <p>Sistema de temas con variables CSS que cambian en tiempo real.</p>
        </div>
      </div>
    </div>
  )
}

export default Inicio
