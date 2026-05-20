import { useState } from 'react'
import './Galeria.css'

/** Lista de imágenes de la galería */
const imagenes = [
  { id: 1, src: 'https://picsum.photos/seed/arquitectura/800/500', thumb: 'https://picsum.photos/seed/arquitectura/200/130', alt: 'Arquitectura moderna' },
  { id: 2, src: 'https://picsum.photos/seed/naturaleza/800/500',   thumb: 'https://picsum.photos/seed/naturaleza/200/130',   alt: 'Naturaleza' },
  { id: 3, src: 'https://picsum.photos/seed/ciudad/800/500',       thumb: 'https://picsum.photos/seed/ciudad/200/130',       alt: 'Ciudad nocturna' },
  { id: 4, src: 'https://picsum.photos/seed/montaña/800/500',      thumb: 'https://picsum.photos/seed/montaña/200/130',      alt: 'Montañas' },
  { id: 5, src: 'https://picsum.photos/seed/oceano/800/500',       thumb: 'https://picsum.photos/seed/oceano/200/130',       alt: 'Océano' },
]

/**
 * Galeria: muestra una imagen principal y miniaturas seleccionables.
 * Al hacer clic en una miniatura, se actualiza la imagen principal.
 */
function Galeria() {
  const [seleccionada, setSeleccionada] = useState(imagenes[0])

  return (
    <div className="galeria">
      {/* Imagen principal */}
      <div className="galeria-principal">
        <img
          src={seleccionada.src}
          alt={seleccionada.alt}
          className="galeria-imagen-principal"
        />
        <p className="galeria-caption">{seleccionada.alt}</p>
      </div>

      {/* Miniaturas */}
      <div className="galeria-miniaturas">
        {imagenes.map(img => (
          <button
            key={img.id}
            className={`miniatura-btn ${seleccionada.id === img.id ? 'activa' : ''}`}
            onClick={() => setSeleccionada(img)}
            aria-label={`Ver imagen: ${img.alt}`}
          >
            <img
              src={img.thumb}
              alt={img.alt}
              className="miniatura-img"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Galeria
