import { useState } from 'react'
import './Formulario.css'

/**
 * Valida los campos del formulario.
 * Devuelve un objeto con los errores encontrados.
 */
function validar(campos) {
  const errores = {}

  if (!campos.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio.'
  } else if (campos.nombre.trim().length < 2) {
    errores.nombre = 'El nombre debe tener al menos 2 caracteres.'
  }

  if (!campos.email.trim()) {
    errores.email = 'El email es obligatorio.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email)) {
    errores.email = 'El formato del email no es válido.'
  }

  if (!campos.mensaje.trim()) {
    errores.mensaje = 'El mensaje es obligatorio.'
  } else if (campos.mensaje.trim().length < 10) {
    errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
  }

  return errores
}

/**
 * Formulario: componente de contacto con validación en tiempo real.
 * Gestiona estado con useState y eventos onChange, onBlur y onSubmit.
 */
function Formulario() {
  const [campos, setCampos] = useState({ nombre: '', email: '', mensaje: '' })
  const [tocados, setTocados] = useState({ nombre: false, email: false, mensaje: false })
  const [enviado, setEnviado] = useState(false)

  const errores = validar(campos)
  const formularioValido = Object.keys(errores).length === 0

  /** Actualiza el valor del campo al escribir */
  function handleChange(e) {
    const { name, value } = e.target
    setCampos(prev => ({ ...prev, [name]: value }))
  }

  /** Marca el campo como tocado al perder el foco */
  function handleBlur(e) {
    const { name } = e.target
    setTocados(prev => ({ ...prev, [name]: true }))
  }

  /** Envía el formulario si es válido */
  function handleSubmit(e) {
    e.preventDefault()
    setTocados({ nombre: true, email: true, mensaje: true })
    if (!formularioValido) return
    setEnviado(true)
  }

  /** Reinicia el formulario tras el envío */
  function handleNuevoMensaje() {
    setCampos({ nombre: '', email: '', mensaje: '' })
    setTocados({ nombre: false, email: false, mensaje: false })
    setEnviado(false)
  }

  if (enviado) {
    return (
      <div className="formulario-exito">
        <span>✅</span>
        <h3>¡Mensaje enviado!</h3>
        <p>Gracias, <strong>{campos.nombre}</strong>. Te responderemos en breve.</p>
        <button onClick={handleNuevoMensaje}>Enviar otro mensaje</button>
      </div>
    )
  }

  return (
    <form className="formulario" onSubmit={handleSubmit} noValidate>

      {/* Campo Nombre */}
      <div className={`campo ${tocados.nombre && errores.nombre ? 'campo-error' : ''} ${tocados.nombre && !errores.nombre ? 'campo-ok' : ''}`}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={campos.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tu nombre"
          autoComplete="off"
        />
        {tocados.nombre && errores.nombre && <span className="error-msg">{errores.nombre}</span>}
        {tocados.nombre && !errores.nombre && <span className="ok-msg">✓ Correcto</span>}
      </div>

      {/* Campo Email */}
      <div className={`campo ${tocados.email && errores.email ? 'campo-error' : ''} ${tocados.email && !errores.email ? 'campo-ok' : ''}`}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={campos.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="tucorreo@ejemplo.com"
          autoComplete="off"
        />
        {tocados.email && errores.email && <span className="error-msg">{errores.email}</span>}
        {tocados.email && !errores.email && <span className="ok-msg">✓ Correcto</span>}
      </div>

      {/* Campo Mensaje */}
      <div className={`campo ${tocados.mensaje && errores.mensaje ? 'campo-error' : ''} ${tocados.mensaje && !errores.mensaje ? 'campo-ok' : ''}`}>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={campos.mensaje}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Escribe tu mensaje (mínimo 10 caracteres)"
          rows={5}
        />
        {tocados.mensaje && errores.mensaje && <span className="error-msg">{errores.mensaje}</span>}
        {tocados.mensaje && !errores.mensaje && <span className="ok-msg">✓ Correcto</span>}
      </div>

      <button type="submit" className="btn-enviar" disabled={!formularioValido && Object.values(tocados).some(Boolean)}>
        Enviar mensaje
      </button>
    </form>
  )
}

export default Formulario
