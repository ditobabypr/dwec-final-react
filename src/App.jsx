import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TemaProvider } from './context/TemaContext'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import './App.css'

/**
 * App: componente raíz con el router, el proveedor de tema y la estructura principal.
 */
function App() {
  return (
    <TemaProvider>
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TemaProvider>
  )
}

export default App
