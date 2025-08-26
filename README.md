🌊 Zukunft Welle Fanzine – Full-Stack Final Project

🖥️ Aplicación Full-Stack desarrollada como proyecto final de bootcamp.
El proyecto combina React.js (Front-End) y Flask + SQLAlchemy (Back-End), con integración a Supabase y APIs de terceros.
Además, incluye funcionalidades de Blog + E-commerce, con sistema de autenticación seguro.

🚀 Tecnologías
🔹 Front-End

React 18 + Vite ⚡

Context API (manejo de estado global)

Bootstrap 5 + Tailwind (UI Components y estilos responsivos)

Lucide React (íconos modernos)

🔹 Back-End

Python 3.11

Flask (API con Blueprints + JWT Authentication)

SQLAlchemy (ORM + Migrations)

Supabase (Base de datos y autenticación)

Postman (pruebas de API)

🔹 Otros

APIs externas (integración de datos)

Librerías para optimización y calidad (ej. ESLint, Prettier)

📌 User Stories

✅ Registro y autenticación segura con contraseñas cifradas.
✅ CRUD completo (artículos, productos, usuarios).
✅ Navegación dinámica con mínimo 3 vistas adicionales.
✅ Blog: Home, listado de artículos, detalle con comentarios.
✅ E-commerce: Home, listado de productos, carrito, checkout simulado.
✅ Integración de APIs externas para enriquecer contenido.

🖼️ Wireframes (ejemplo)

Home: Vista principal con navegación a secciones.

Listado: Artículos o productos en tarjetas.

Detalle: Vista con descripción, imágenes y comentarios.

Auth: Login, Registro, Password Reset.

🧪 Pruebas

Con Postman se validan:

Endpoints de autenticación (login, register, logout, reset password).

CRUD completo (create, read, update, delete).

APIs externas.

🌊 Sobre Zukunft Welle Fanzine
🎯 Misión

Crear una plataforma digital para jóvenes apasionados por STEAM, cultura e idiomas, donde el conocimiento sea accesible, creativo e interactivo.

🌍 Visión

Formar una comunidad global donde Millennials y Gen Z compartan ideas y talentos.

💡 Valores

🌍 Multiculturalidad – Diversidad cultural como motor de innovación.

🌈 Diversidad – Voces sexuales, culturales, neurodiversas y sociales.

🔎 Curiosidad – Aprendizaje a lo largo de la vida.

🎭 Creatividad – Arte + Ciencia + Tecnología.

🌱 Sostenibilidad – Acción responsable en sociedad y medio ambiente.

💬 Diálogo – Intercambio abierto y respetuoso.

✨ Zukunft Welle Fanzine – Donde el conocimiento fluye como una ola que conecta culturas, ideas y generaciones.

📂 Estructura del Proyecto
/public
   └── images/products   # imágenes de productos
/src
   ├── components        # Header, Footer, Layout, UI
   ├── config            # contenido editable
   ├── data              # seeds de artículos y productos
   ├── hooks             # custom hooks (auth, analytics, etc.)
   ├── pages             # rutas principales
   ├── lib               # supabase.js (conexión DB)
   └── App.jsx, main.jsx

