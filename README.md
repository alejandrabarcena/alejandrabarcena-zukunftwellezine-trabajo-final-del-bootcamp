# 📖 GUÍA PARA PERSONALIZAR TU REVISTA ZUKUNFT WELLE

## 🎯 ARCHIVO PRINCIPAL: `src/config/content.js`

**Este es el ÚNICO archivo que necesitas editar para cambiar todo el contenido.**

### 📝 CÓMO CAMBIAR TU INFORMACIÓN:

#### 1. **Tu Logo:**
```javascript
// En src/config/content.js línea 8:
logo: "/tu-logo.png" // Pon tu archivo en la carpeta public/
```

#### 2. **Tu Información Personal:**
```javascript
// En src/config/content.js líneas 13-22:
founder: {
  name: "Tu Nombre Aquí",
  title: "Tu Título Aquí", 
  email: "tu@email.com",
  bio: `Tu biografía completa en alemán aquí.
  
  Puedes usar múltiples párrafos.
  
  Todo lo que escribas aquí aparecerá en la página About.`,
  image: "URL de tu foto"
}
```

#### 3. **Descripción de tu Proyecto:**
```javascript
// En src/config/content.js líneas 40-50:
about: {
  title: "Über Zukunft Welle",
  subtitle: "Tu subtítulo aquí",
  mission: `Aquí describes completamente tu proyecto.
  
  Explica qué es Zukunft Welle, cuál es tu misión, etc.
  
  Todo en alemán.`
}
```

### 🎨 ESTRUCTURA DE ARCHIVOS:

```
src/
├── config/
│   └── content.js          ← 🎯 ARCHIVO PRINCIPAL (edita aquí)
├── components/
│   └── Layout/
│       ├── Header.jsx      ← Logo y navegación
│       └── Footer.jsx      ← Pie de página
├── pages/
│   ├── Home.jsx           ← Página principal
│   ├── About.jsx          ← Página "Über Zukunft Welle"
│   ├── Articles.jsx       ← Lista de artículos
│   └── Categories.jsx     ← Categorías
```

### 🚀 PASOS PARA PERSONALIZAR:

1. **Edita `src/config/content.js`** con tu información
2. **Sube tu logo** a la carpeta `public/`
3. **Cambia la ruta del logo** en el archivo config
4. **¡Listo!** Todo se actualiza automáticamente

### 📂 CATEGORÍAS:

Las categorías están en el mismo archivo `content.js`. Puedes:
- Cambiar nombres
- Cambiar descripciones  
- Cambiar colores
- Agregar/quitar categorías

### 💡 CONSEJOS:

- **Un solo archivo:** Todo el contenido está centralizado
- **Fácil de editar:** Solo texto, no código complicado
- **Automático:** Los cambios se reflejan en toda la web
- **Organizado:** Cada sección está claramente marcada

### 🆘 SI NECESITAS AYUDA:

1. Abre `src/config/content.js`
2. Busca la sección que quieres cambiar
3. Edita solo el texto entre comillas
4. Guarda el archivo

**¡Es así de simple!** 🎉