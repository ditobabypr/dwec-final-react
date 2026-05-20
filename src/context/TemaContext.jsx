import { createContext, useContext, useState, useEffect } from 'react'

/**
 * TemaContext: contexto global para gestionar el tema claro/oscuro.
 * Persiste la preferencia del usuario en localStorage.
 */
const TemaContext = createContext()

export function TemaProvider({ children }) {
  const [oscuro, setOscuro] = useState(() => {
    return localStorage.getItem('tema') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', oscuro ? 'dark' : 'light')
    localStorage.setItem('tema', oscuro ? 'dark' : 'light')
  }, [oscuro])

  function toggleTema() {
    setOscuro(prev => !prev)
  }

  return (
    <TemaContext.Provider value={{ oscuro, toggleTema }}>
      {children}
    </TemaContext.Provider>
  )
}

/** Hook para acceder al contexto del tema desde cualquier componente */
export function useTema() {
  return useContext(TemaContext)
}
