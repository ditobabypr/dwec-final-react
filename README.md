# MiApp — Proyecto React DWEC

Aplicación web desarrollada con **React + Vite** como práctica de la unidad de alternancia. Incluye navegación SPA, formulario con validación, galería interactiva, blog dinámico y modo oscuro/claro.

---

## Índice

1. [Arquitectura del proyecto](#arquitectura-del-proyecto)
2. [Componentes y páginas](#componentes-y-páginas)
3. [Sistema de routing](#sistema-de-routing)
4. [Sistema de temas (modo oscuro/claro)](#sistema-de-temas)
5. [Guía de instalación en local](#guía-de-instalación-en-local)
6. [Guía de despliegue en producción](#guía-de-despliegue-en-producción)

---

## Arquitectura del proyecto

```
dwec-final-react/
├── public/                  # Archivos estáticos
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── Navbar.css
│   │   ├── Formulario.jsx   # Formulario de contacto con validación
│   │   ├── Formulario.css
│   │   ├── Galeria.jsx      # Galería de imágenes interactiva
│   │   ├── Galeria.css
│   │   ├── Blog.jsx         # Sistema de posts dinámicos
│   │   └── Blog.css
│   ├── context/
│   │   └── TemaContext.jsx  # Contexto global para el tema oscuro/claro
│   ├── pages/               # Páginas asociadas a cada ruta
│   │   ├── Inicio.jsx       # Página de bienvenida
│   │   ├── Inicio.css
│   │   ├── Servicios.jsx    # Página con Galería y Blog
│   │   ├── Servicios.css
│   │   ├── Contacto.jsx     # Página con el Formulario
│   │   └── Contacto.css
│   ├── App.jsx              # Componente raíz: router + proveedor de tema
│   ├── App.css
│   ├── index.css            # Variables CSS globales (temas)
│   └── main.jsx             # Punto de entrada de la aplicación
├── index.html
├── package.json
└── vite.config.js
```

La aplicación sigue una arquitectura de **componentes desacoplados**:
- Las **páginas** (`/pages`) representan cada ruta y componen los componentes necesarios.
- Los **componentes** (`/components`) son piezas reutilizables con su propia lógica y estilos.
- El **contexto** (`/context`) gestiona el estado global del tema sin necesidad de prop drilling.

---

## Componentes y páginas

### Páginas

| Página | Ruta | Descripción |
|--------|------|-------------|
| `Inicio` | `/` | Pantalla de bienvenida con descripción del proyecto |
| `Servicios` | `/servicios` | Contiene la Galería de imágenes y el Blog |
| `Contacto` | `/contacto` | Contiene el Formulario de contacto |

### Componentes

#### `Navbar`
Barra de navegación fija en la parte superior. Usa `NavLink` de React Router para marcar automáticamente la sección activa con una clase CSS. Incluye el botón de alternancia de tema.

#### `Formulario`
Formulario de contacto con tres campos: **Nombre**, **Email** y **Mensaje**.
- Gestión de estado con `useState`.
- Validación en tiempo real con los eventos `onChange` y `onBlur`.
- Indicadores visuales: borde verde (válido) / rojo (error) en cada campo.
- Bloqueo del envío si hay campos inválidos.
- Pantalla de confirmación tras el envío correcto.

#### `Galeria`
Galería interactiva de imágenes.
- Muestra una imagen principal grande y una fila de miniaturas.
- Al hacer clic en una miniatura, se actualiza la imagen principal con `useState`.
- La miniatura activa queda visualmente resaltada con un borde de color.

#### `Blog`
Sistema de publicaciones dinámicas.
- Formulario para crear nuevos posts (título + descripción).
- Cada post se renderiza como un componente `PostCard` independiente.
- Funcionalidades: **crear**, **editar** (inline), **destacar** y **eliminar** posts.
- El estado de todos los posts se gestiona en el componente padre `Blog`.

#### `TemaContext`
Contexto de React que provee el estado del tema (`oscuro: boolean`) y la función `toggleTema` a toda la aplicación. Persiste la preferencia del usuario en `localStorage`.

---

## Sistema de routing

La navegación se implementa con **React Router v6** (`react-router-dom`).

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/"          element={<Inicio />} />
    <Route path="/servicios" element={<Servicios />} />
    <Route path="/contacto"  element={<Contacto />} />
  </Routes>
</BrowserRouter>
```

- Al cambiar de ruta **no se recarga la página** (SPA).
- `NavLink` aplica automáticamente la clase `active` al enlace de la ruta actual, permitiendo resaltarla en el CSS.
- El prop `end` en el enlace de Inicio evita que quede activo en todas las rutas.

---

## Sistema de temas

El modo oscuro/claro se basa en **variables CSS** definidas en `index.css`:

```css
/* Modo claro (por defecto) */
:root {
  --color-primary: #6d28d9;
  --color-bg:      #ffffff;
  --color-text:    #1f2937;
}

/* Modo oscuro */
[data-theme='dark'] {
  --color-primary: #a78bfa;
  --color-bg:      #111827;
  --color-text:    #f3f4f6;
}
```

El `TemaContext` añade o quita el atributo `data-theme="dark"` en el elemento `<html>` al pulsar el botón del Navbar. Todos los componentes usan las variables CSS, por lo que el cambio de tema es instantáneo y global.

---

## Guía de instalación en local

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/dwec-final-react.git
cd dwec-final-react

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## Guía de despliegue en producción

### Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` con los archivos estáticos optimizados listos para subir a cualquier servidor.

### Despliegue en Vercel (automático)

1. Conectar el repositorio de GitHub a [Vercel](https://vercel.com).
2. Vercel detecta automáticamente que es un proyecto Vite.
3. Cada `push` a la rama `main` despliega automáticamente la nueva versión.

> **Importante para rutas SPA:** añadir un archivo `vercel.json` en la raíz con el siguiente contenido para que las rutas funcionen correctamente:
>
> ```json
> {
>   "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
> }
> ```

### Despliegue por FTP en InfinityFree

1. Ejecutar `npm run build` para generar la carpeta `dist/`.
2. Acceder al panel de [InfinityFree](https://infinityfree.net) y abrir el gestor de archivos o un cliente FTP (FileZilla).
3. Subir **el contenido de la carpeta `dist/`** al directorio `htdocs/` del servidor.
4. La aplicación estará disponible en el dominio asignado por InfinityFree.

> **Nota:** InfinityFree no soporta reescritura de rutas para SPA de forma nativa. Si las rutas directas dan error 404, usar la navegación desde la página de inicio.
