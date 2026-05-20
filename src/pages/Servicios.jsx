import Galeria from '../components/Galeria'
import './Servicios.css'

/**
 * Servicios: sección con la Galería interactiva y el Blog.
 * El Blog se añadirá en el ejercicio 4.
 */
function Servicios() {
  return (
    <div className="servicios">
      <h1>Servicios</h1>
      <p className="servicios-subtitle">Explora nuestra galería y blog</p>

      <section className="servicios-seccion">
        <h2>Galería de imágenes</h2>
        <Galeria />
      </section>

      <section className="servicios-seccion">
        <h2>Blog</h2>
        <div className="servicio-card placeholder">
          <span>📝</span>
          <h3>Blog</h3>
          <p>Próximamente: sistema de publicaciones dinámicas</p>
        </div>
      </section>
    </div>
  )
}

export default Servicios
