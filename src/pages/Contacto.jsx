import './Contacto.css'

/**
 * Contacto: sección que contendrá el formulario de contacto.
 * El formulario completo se añadirá en el ejercicio 2.
 */
function Contacto() {
  return (
    <div className="contacto">
      <h1>Contacto</h1>
      <p className="contacto-subtitle">¿Tienes alguna pregunta? Escríbenos.</p>

      <div className="contacto-placeholder">
        <span>✉️</span>
        <p>Próximamente: formulario de contacto con validación</p>
      </div>
    </div>
  )
}

export default Contacto
