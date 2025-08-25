# 📝 GUÍA: CÓMO MODIFICAR ARTÍCULOS/NOTAS

## 📂 **ESTRUCTURA DE ARCHIVOS**

```
src/
├── config/
│   └── content.js          ← 🎯 INFORMACIÓN GENERAL (tu bio, logo, etc.)
├── data/
│   └── articles.js         ← 📰 TODOS LOS ARTÍCULOS AQUÍ
├── pages/
│   ├── Articles.jsx        ← 📋 Lista de artículos
│   ├── ArticleDetail.jsx   ← 📖 Vista individual del artículo
│   └── Home.jsx           ← 🏠 Artículos destacados en inicio
└── components/
    └── Article/
        ├── ArticleCard.jsx ← 🎴 Tarjeta de artículo
        └── ArticleList.jsx ← 📜 Lista de artículos
```

## 🎯 **ARCHIVO PRINCIPAL: `src/data/articles.js`**

**Este es el archivo MÁS IMPORTANTE** - aquí están todos los artículos:

```javascript
export const articles = [
  {
    id: '1',
    title: 'Tu título aquí',
    excerpt: 'Resumen corto del artículo...',
    content: `# Título del artículo
    
    Tu contenido completo aquí...
    
    ## Subtítulo
    
    Más contenido...`,
    coverImage: 'https://tu-imagen.jpg',
    category: 'Categoría',
    author: {
      name: 'Nombre del autor',
      avatar: 'https://avatar.jpg'
    },
    publishedAt: '2025-01-15',
    tags: ['tag1', 'tag2', 'tag3']
  }
];
```

## ✏️ **CÓMO AGREGAR UN NUEVO ARTÍCULO:**

1. **Abre `src/data/articles.js`**
2. **Copia un artículo existente**
3. **Cambia:**
   - `id`: número único
   - `title`: tu título
   - `excerpt`: resumen corto
   - `content`: contenido completo (usa Markdown)
   - `coverImage`: URL de tu imagen
   - `category`: categoría
   - `publishedAt`: fecha
   - `tags`: etiquetas

## 📝 **FORMATO DEL CONTENIDO (Markdown):**

```markdown
# Título Principal

Tu introducción aquí...

## Subtítulo

Contenido con **texto en negrita** y *cursiva*.

### Sub-subtítulo

- Lista item 1
- Lista item 2
- Lista item 3

1. Lista numerada
2. Segundo item
3. Tercer item

> Cita importante

```código aquí```
```

## 🖼️ **IMÁGENES:**

**Opciones para imágenes:**
1. **Pexels** (gratis): `https://images.pexels.com/photos/...`
2. **Unsplash** (gratis): `https://images.unsplash.com/...`
3. **Tu servidor**: sube a `/public/images/` y usa `/images/tu-imagen.jpg`

## 📂 **CATEGORÍAS DISPONIBLES:**

- `'Codechaos'` - Programación
- `'Datenjunkies'` - Data Science  
- `'Maschinengeflüster'` - IA
- `'Grenzsprenger'` - Arte
- `'Stimmenrausch'` - Podcast
- `'Orakel 2.0'` - Predicciones

## 🎯 **EJEMPLO COMPLETO:**

```javascript
{
  id: '7',
  title: 'Mi Nuevo Artículo Increíble',
  excerpt: 'Este artículo habla sobre tecnología del futuro y cómo cambiará nuestras vidas.',
  content: `# Mi Nuevo Artículo Increíble

La tecnología está evolucionando rápidamente...

## ¿Qué nos espera?

En los próximos años veremos:

- Inteligencia artificial más avanzada
- Realidad virtual inmersiva  
- Computación cuántica

### Conclusión

El futuro es emocionante y lleno de posibilidades.`,
  coverImage: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
  category: 'Orakel 2.0',
  categorySlug: 'orakel-2-0',
  author: {
    name: 'Tu Nombre',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  publishedAt: '2025-01-20',
  views: 0,
  likes: 0,
  readTime: '5 min',
  tags: ['Futuro', 'Tecnología', 'Innovación'],
  featured: true
}
```

## 🚀 **PASOS RÁPIDOS:**

1. **Abre** `src/data/articles.js`
2. **Agrega tu artículo** al array
3. **Guarda** el archivo
4. **¡Listo!** Se muestra automáticamente

## 💡 **CONSEJOS:**

- **IDs únicos**: usa números consecutivos
- **Imágenes**: 800x600px mínimo
- **Excerpt**: máximo 200 caracteres
- **ReadTime**: calcula ~200 palabras por minuto
- **Tags**: máximo 5 por artículo

**¡Es súper fácil!** Solo editas un archivo y todo se actualiza automáticamente. 🎉