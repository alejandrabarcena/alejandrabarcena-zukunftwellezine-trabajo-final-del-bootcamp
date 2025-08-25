# 🎯 GUÍA DE RUTAS PARA MODIFICAR CONTENIDO

## 📂 **ARCHIVOS PRINCIPALES PARA EDITAR:**

### 1. 📰 **ARTÍCULOS/NOTAS:**
```
src/data/articles.js
```
**QUÉ CONTIENE:**
- Todos los artículos de la revista
- Títulos, contenido, imágenes, autores
- Categorías, tags, fechas
- **AQUÍ CAMBIAS TODO EL CONTENIDO**

### 2. 🏢 **INFORMACIÓN PERSONAL:**
```
src/config/content.js
```
**QUÉ CONTIENE:**
- Tu nombre, biografía, email
- Descripción del proyecto
- Textos de páginas principales
- **AQUÍ CAMBIAS TU INFO PERSONAL**

### 3. 📂 **CATEGORÍAS:**
```
src/config/categories.js
```
**QUÉ CONTIENE:**
- Todas las 18 categorías
- Nombres, descripciones, colores
- **AQUÍ MODIFICAS LAS SECCIONES**

---

## 🎯 **CÓMO MODIFICAR CADA COSA:**

### ✏️ **PARA CAMBIAR UN ARTÍCULO:**
1. Abre `src/data/articles.js`
2. Busca el artículo por ID (1, 2, 3, etc.)
3. Cambia:
   - `title`: El título
   - `content`: Todo el contenido (usa Markdown)
   - `excerpt`: Resumen corto
   - `coverImage`: URL de la imagen
   - `category`: Categoría
   - `tags`: Etiquetas

### ✏️ **PARA AGREGAR UN ARTÍCULO NUEVO:**
1. Abre `src/data/articles.js`
2. Copia un artículo existente
3. Cambia el `id` a un número nuevo
4. Modifica todo el contenido

### ✏️ **PARA CAMBIAR TU INFORMACIÓN:**
1. Abre `src/config/content.js`
2. Busca la sección `founder:`
3. Cambia:
   - `name`: Tu nombre
   - `bio`: Tu biografía completa
   - `email`: Tu email
   - `image`: URL de tu foto

### ✏️ **PARA CAMBIAR TEXTOS DE PÁGINAS:**
1. Abre `src/config/content.js`
2. Busca las secciones:
   - `home:` - Página principal
   - `about:` - Página "Sobre nosotros"
   - `site:` - Información general

---

## 🚀 **EJEMPLO RÁPIDO - CAMBIAR PRIMER ARTÍCULO:**

**Archivo:** `src/data/articles.js`
**Línea:** Busca `id: '1'`

```javascript
{
  id: '1',
  title: 'TU NUEVO TÍTULO AQUÍ',
  excerpt: 'Tu resumen aquí...',
  content: `# Tu Artículo

Tu contenido completo aquí...

## Subtítulo

Más contenido...`,
  coverImage: 'https://tu-imagen.jpg',
  category: 'Maschinengeflüster',
  // ... resto igual
}
```

---

## 📝 **FORMATO DEL CONTENIDO (Markdown):**

```markdown
# Título Principal

Tu introducción...

## Subtítulo

Contenido con **negrita** y *cursiva*.

### Sub-subtítulo

- Lista item 1
- Lista item 2

> Cita importante

```código aquí```
```

---

## 🎨 **CATEGORÍAS DISPONIBLES:**

- `'Codechaos'` - Programación
- `'Datenjunkies'` - Data Science
- `'Maschinengeflüster'` - IA
- `'Stahlrebellen'` - Robotik
- `'Orakel 2.0'` - Predicciones
- `'Grenzsprenger'` - Arte
- `'Papierrebellen'` - Libros
- `'Stimmenrausch'` - Podcast
- `'Habenwollen'` - Shop
- `'Fluchtgedanken'` - Viajes
- `'Bassattacke'` - Música
- `'Normbrecher'` - Diversidad
- `'Kopfkino Deluxe'` - Cine
- `'Techgeil'` - Gadgets
- `'Mode'` - Moda

---

## ⚡ **CAMBIOS RÁPIDOS:**

### 🔥 **Solo quiero cambiar el primer artículo:**
→ `src/data/articles.js` → Busca `id: '1'`

### 🔥 **Solo quiero cambiar mi nombre:**
→ `src/config/content.js` → Busca `founder: { name:`

### 🔥 **Solo quiero cambiar la descripción del sitio:**
→ `src/config/content.js` → Busca `site: { description:`

---

## 💡 **CONSEJOS:**

- ✅ **Un archivo = Una cosa** (artículos, info personal, categorías)
- ✅ **Guarda siempre** después de cambiar
- ✅ **Los cambios se ven automáticamente** en el navegador
- ✅ **Usa Markdown** para el contenido de artículos

**¡Ahora puedes modificar todo fácilmente!** 🎉