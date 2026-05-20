import { useState } from 'react'
import './Blog.css'

/**
 * PostCard: tarjeta individual de un post.
 * Permite destacar, editar y eliminar el post.
 */
function PostCard({ post, onEliminar, onDestacar, onEditar }) {
  const [editando, setEditando] = useState(false)
  const [titulo, setTitulo] = useState(post.titulo)
  const [descripcion, setDescripcion] = useState(post.descripcion)

  function guardarEdicion() {
    if (!titulo.trim() || !descripcion.trim()) return
    onEditar(post.id, titulo, descripcion)
    setEditando(false)
  }

  return (
    <div className={`post-card ${post.destacado ? 'destacado' : ''}`}>
      {post.destacado && <span className="post-badge">⭐ Destacado</span>}

      {editando ? (
        <div className="post-edit-form">
          <input
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder="Título"
          />
          <textarea
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            placeholder="Descripción"
            rows={3}
          />
          <div className="post-edit-actions">
            <button className="btn-guardar" onClick={guardarEdicion}>Guardar</button>
            <button className="btn-cancelar" onClick={() => setEditando(false)}>Cancelar</button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="post-titulo">{post.titulo}</h3>
          <p className="post-descripcion">{post.descripcion}</p>
          <span className="post-fecha">{post.fecha}</span>
        </>
      )}

      <div className="post-acciones">
        <button className="btn-destacar" onClick={() => onDestacar(post.id)} title="Destacar">
          {post.destacado ? '★ Quitar' : '☆ Destacar'}
        </button>
        {!editando && (
          <button className="btn-editar" onClick={() => setEditando(true)} title="Editar">
            ✏️ Editar
          </button>
        )}
        <button className="btn-eliminar" onClick={() => onEliminar(post.id)} title="Eliminar">
          🗑️ Eliminar
        </button>
      </div>
    </div>
  )
}

/**
 * Blog: sistema de publicaciones dinámicas.
 * Permite crear, editar, destacar y eliminar posts.
 */
function Blog() {
  const [posts, setPosts] = useState([
    { id: 1, titulo: 'Bienvenido al blog', descripcion: 'Este es el primer post de ejemplo. Puedes editarlo, destacarlo o eliminarlo.', fecha: '20 may 2026', destacado: false },
  ])
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!titulo.trim() || !descripcion.trim()) {
      setError('Rellena el título y la descripción.')
      return
    }
    const nuevo = {
      id: Date.now(),
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      fecha: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      destacado: false,
    }
    setPosts(prev => [nuevo, ...prev])
    setTitulo('')
    setDescripcion('')
    setError('')
  }

  function eliminarPost(id) {
    setPosts(prev => prev.filter(p => p.id !== id))
  }

  function destacarPost(id) {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, destacado: !p.destacado } : p))
  }

  function editarPost(id, nuevoTitulo, nuevaDescripcion) {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, titulo: nuevoTitulo, descripcion: nuevaDescripcion } : p))
  }

  return (
    <div className="blog">
      {/* Formulario de nuevo post */}
      <form className="blog-form" onSubmit={handleSubmit}>
        <h3>Nuevo post</h3>
        <input
          type="text"
          placeholder="Título del post"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Descripción del post"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
          rows={3}
        />
        {error && <span className="blog-error">{error}</span>}
        <button type="submit">Publicar post</button>
      </form>

      {/* Lista de posts */}
      <div className="blog-lista">
        {posts.length === 0 && (
          <p className="blog-vacio">No hay posts aún. ¡Crea el primero!</p>
        )}
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onEliminar={eliminarPost}
            onDestacar={destacarPost}
            onEditar={editarPost}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog
