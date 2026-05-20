import Formulario from '../components/Formulario'
import './Contacto.css'

/**
 * Contacto: página con el formulario de contacto validado.
 */
function Contacto() {
  return (
    <div className="contacto">
      <h1>Contacto</h1>
      <p className="contacto-subtitle">¿Tienes alguna pregunta? Escríbenos.</p>
      <Formulario />
    </div>
  )
}

export default Contacto
