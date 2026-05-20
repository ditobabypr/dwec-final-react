import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import './App.css'

/**
 * App: componente raíz que define el router y la estructura principal.
 */
function App() {
  return (
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
  )
}

export default App
