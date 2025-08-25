# 📝 GUÍA COMPLETA: CREAR Y EDITAR ARTÍCULOS

## 🎯 **MÉTODO 1: DESDE EL PANEL ADMIN (RECOMENDADO)**

### **PASO 1: ACCEDER AL ADMIN**
1. Ve a: http://localhost:5173/admin
2. Si no tienes permisos, necesitas crear un usuario admin

### **PASO 2: CREAR USUARIO ADMIN**
1. Ve a: http://localhost:5173/register
2. Regístrate con cualquier email
3. Ve a Supabase Dashboard → Authentication → Users
4. Cambia el rol de 'user' a 'admin'

### **PASO 3: CREAR ARTÍCULOS**
1. Ve a: http://localhost:5173/admin
2. Clic en "Nuevo Artículo"
3. Llena el formulario:
   - **Título:** Tu título aquí
   - **Excerpt:** Resumen corto
   - **Contenido:** Usa Markdown
   - **Imagen:** URL de Pexels
   - **Categoría:** Selecciona una
   - **Estado:** Publicado/Borrador

---

## 🎯 **MÉTODO 2: EDITAR ARCHIVOS DIRECTAMENTE**

### **ARCHIVO PRINCIPAL:** `src/data/articles.js`

```javascript
export const articles = [
  {
    id: '1',
    title: 'Tu Título Aquí',
    excerpt: 'Resumen corto del artículo...',
    content: `# Tu Artículo

## Introducción
Tu contenido aquí...

### Subtítulo
Más contenido...

- Lista item 1
- Lista item 2

**Texto en negrita**
*Texto en cursiva*

> Cita importante

\`\`\`javascript
// Código de ejemplo
console.log('Hola mundo');
\`\`\``,
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Maschinengeflüster',
    categorySlug: 'maschinengefluster',
    author: {
      name: 'Tu Nombre',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    publishedAt: '2025-01-15',
    views: 0,
    likes: 0,
    readTime: '5 min',
    tags: ['Tag1', 'Tag2'],
    featured: true,
    status: 'published'
  }
];
```

---

## 📂 **CATEGORÍAS DISPONIBLES:**

```javascript
// Usa estos slugs en categorySlug:
'codechaos'           // Programación
'datenjunkies'        // Data Science  
'maschinengefluster'  // IA
'stahlrebellen'       // Robotik
'orakel-2-0'         // Predicciones
'grenzsprenger'       // Arte
'design-ohne-filter'  // Design
'papierrebellen'      // Libros
'stimmenrausch'       // Podcast
'habenwollen'         // Shop
'fluchtgedanken'      // Viajes
'bassattacke'         // Música
'normbrecher'         // Diversidad
'lebensgeschichten'   // Historias
'multikulturell'      // Cultura
'kopfkino-deluxe'     // Cine
'techgeil'            // Gadgets
'mode'                // Moda
```

---

## 🖼️ **IMÁGENES GRATIS:**

### **PEXELS (RECOMENDADO):**
```
https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800
https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800
https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800
```

### **BUSCAR MÁS:**
1. Ve a: https://pexels.com
2. Busca: "technology", "AI", "coding", etc.
3. Clic derecho → Copiar URL de imagen
4. Agrega `?auto=compress&cs=tinysrgb&w=800` al final

---

## ✏️ **FORMATO MARKDOWN:**

```markdown
# Título Principal

## Subtítulo

### Sub-subtítulo

**Texto en negrita**
*Texto en cursiva*

- Lista con viñetas
- Segundo item

1. Lista numerada
2. Segundo item

> Cita importante

[Enlace](https://ejemplo.com)

```código aquí```

![Imagen](url-de-imagen)
```

---

## 🚀 **ARTÍCULOS PILOTO LISTOS:**

### **ARTÍCULO 1: IA**
```javascript
{
  id: '4',
  title: 'El Futuro de la Inteligencia Artificial en 2025',
  excerpt: 'Descubre las tendencias más importantes que definirán el desarrollo de la IA este año.',
  content: `# El Futuro de la Inteligencia Artificial en 2025

La inteligencia artificial está evolucionando a un ritmo sin precedentes...

## Tendencias Principales

### 1. IA Generativa Multimodal
Los modelos como GPT-4 y DALL-E están convergiendo...

### 2. Automatización Inteligente
Las empresas están adoptando IA para...

## Conclusión
El 2025 será un año decisivo para la IA.`,
  coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  category: 'Maschinengeflüster',
  categorySlug: 'maschinengefluster',
  author: { name: 'Dr. Ana García', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100' },
  publishedAt: '2025-01-20',
  views: 0, likes: 0, readTime: '8 min',
  tags: ['IA', 'Futuro', 'Tecnología'],
  featured: true, status: 'published'
}
```

### **ARTÍCULO 2: PROGRAMACIÓN**
```javascript
{
  id: '5',
  title: 'Python vs JavaScript: ¿Cuál Elegir en 2025?',
  excerpt: 'Comparamos los dos lenguajes más populares y te ayudamos a decidir.',
  content: `# Python vs JavaScript: ¿Cuál Elegir en 2025?

Ambos lenguajes dominan el desarrollo moderno...

## Python: El Rey de los Datos

### Ventajas:
- Sintaxis clara y legible
- Excelente para Data Science
- Gran comunidad

## JavaScript: El Lenguaje Universal

### Ventajas:
- Funciona en navegador y servidor
- Ecosistema enorme (npm)
- Desarrollo full-stack

## Conclusión
La elección depende de tus objetivos...`,
  coverImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  category: 'Codechaos',
  categorySlug: 'codechaos',
  author: { name: 'Carlos Mendez', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
  publishedAt: '2025-01-19',
  views: 0, likes: 0, readTime: '6 min',
  tags: ['Python', 'JavaScript', 'Programación'],
  featured: false, status: 'published'
}
```

---

## 🎯 **PASOS RÁPIDOS:**

1. **Copia** uno de los artículos piloto
2. **Pégalo** en `src/data/articles.js`
3. **Cambia** el ID a un número único
4. **Modifica** título, contenido, etc.
5. **Guarda** el archivo
6. **¡Listo!** Se muestra automáticamente

**¿Quieres que agregue estos artículos piloto ahora?**