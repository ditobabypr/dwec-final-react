import Galeria from '../components/Galeria'
import Blog from '../components/Blog'
import './Servicios.css'

/**
 * Servicios: sección con la Galería interactiva y el Blog de posts dinámicos.
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
        <Blog />
      </section>
    </div>
  )
}

export default Servicios
