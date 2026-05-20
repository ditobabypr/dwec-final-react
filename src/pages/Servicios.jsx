import './Servicios.css'

/**
 * Servicios: sección que contendrá la Galería y el Blog.
 * Los componentes se añadirán en los ejercicios 3 y 4.
 */
function Servicios() {
  return (
    <div className="servicios">
      <h1>Servicios</h1>
      <p className="servicios-subtitle">Explora nuestra galería y blog</p>

      <div className="servicios-grid">
        <div className="servicio-card placeholder">
          <span>🖼️</span>
          <h3>Galería</h3>
          <p>Próximamente: galería interactiva de imágenes</p>
        </div>
        <div className="servicio-card placeholder">
          <span>📝</span>
          <h3>Blog</h3>
          <p>Próximamente: sistema de publicaciones dinámicas</p>
        </div>
      </div>
    </div>
  )
}

export default Servicios
