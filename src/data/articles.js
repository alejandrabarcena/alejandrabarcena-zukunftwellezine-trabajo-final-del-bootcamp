// 📰 ARTÍCULOS SIMPLES Y FUNCIONALES
export const articles = [
  {
    id: '1',
    title: 'Mi Primera Nota de Prueba',
    excerpt: 'Esta es una nota simple para probar que todo funciona correctamente.',
    content: `# Mi Primera Nota

Esta es una **nota de prueba** para verificar que el sistema funciona.

## ¿Qué incluye esta nota?

- Texto en **negrita**
- Texto en *cursiva*
- Listas con viñetas
- Enlaces y más

### Conclusión

¡El sistema funciona perfectamente! 🎉`,
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Maschinengeflüster',
    categorySlug: 'maschinengefluster',
    author: {
      name: 'Editor de Prueba',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    publishedAt: '2025-01-15',
    views: 1,
    likes: 0,
    readTime: '5 min',
    tags: ['Prueba', 'Test'],
    featured: true,
    status: 'published'
  },
  {
    id: '2',
    title: 'Blockchain Revolution',
    excerpt: 'Mehr als nur Kryptowährungen - die Zukunft der Dezentralisierung.',
    content: 'Blockchain verändert alles: von Finanzen bis Supply Chain.',
    coverImage: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Codechaos',
    categorySlug: 'codechaos',
    author: {
      name: 'Maria Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    publishedAt: '2025-01-14',
    views: 980,
    likes: 67,
    readTime: '7 min',
    tags: ['Blockchain', 'Krypto'],
    featured: true,
    status: 'published'
  },
  {
    id: '3',
    title: 'Augmented Reality',
    excerpt: 'AR verändert Bildung, Medizin und Industrie.',
    content: 'Augmented Reality bringt digitale Inhalte in die reale Welt.',
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Techgeil',
    categorySlug: 'techgeil',
    author: {
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    publishedAt: '2025-01-13',
    views: 756,
    likes: 45,
    readTime: '6 min',
    tags: ['AR', 'Technologie'],
    featured: false,
    status: 'published'
  }
  ,
  {
    id: '4',
    title: 'El Futuro de la Inteligencia Artificial en 2025',
    excerpt: 'Descubre las tendencias más importantes que definirán el desarrollo de la IA este año y cómo impactarán en nuestras vidas.',
    content: `# El Futuro de la Inteligencia Artificial en 2025

La inteligencia artificial está evolucionando a un ritmo sin precedentes. Este año promete ser decisivo para el desarrollo de tecnologías que cambiarán fundamentalmente la forma en que trabajamos, creamos y vivimos.

## Tendencias Principales que Definirán el 2025

### 1. IA Generativa Multimodal
Los modelos como GPT-4 y DALL-E están convergiendo hacia sistemas que pueden procesar y generar texto, imágenes, audio y video de manera integrada. Esto abrirá nuevas posibilidades creativas.

### 2. Automatización Inteligente en Empresas
Las empresas están adoptando IA para automatizar procesos complejos que antes requerían intervención humana. Desde atención al cliente hasta análisis financiero.

### 3. IA Ética y Regulación
Los gobiernos están desarrollando marcos regulatorios para garantizar el uso responsable de la IA, especialmente en áreas sensibles como salud y justicia.

### 4. Democratización de la IA
Herramientas no-code y low-code están haciendo que la IA sea accesible para personas sin conocimientos técnicos profundos.

## Impacto en Diferentes Sectores

**Salud:** Diagnósticos más precisos y tratamientos personalizados.
**Educación:** Tutores virtuales adaptativos y contenido personalizado.
**Transporte:** Vehículos autónomos más seguros y eficientes.

## Desafíos por Superar

- **Sesgo algorítmico:** Garantizar fairness en los sistemas de IA
- **Privacidad:** Proteger datos personales en sistemas inteligentes
- **Empleo:** Gestionar la transición laboral hacia nuevos roles

## Conclusión

El 2025 será un año decisivo para la IA. Las organizaciones que adopten estas tecnologías de manera responsable y estratégica tendrán ventajas competitivas significativas.

La clave está en encontrar el equilibrio entre innovación y responsabilidad social.`,
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Maschinengeflüster',
    categorySlug: 'maschinengefluster',
    author: {
      name: 'Dr. Ana García',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    publishedAt: '2025-01-20',
    views: 245,
    likes: 18,
    readTime: '8 min',
    tags: ['IA', 'Futuro', 'Tecnología', 'Innovación'],
    featured: true,
    status: 'published'
  },
  {
    id: '5',
    title: 'Python vs JavaScript: ¿Cuál Elegir en 2025?',
    excerpt: 'Comparamos los dos lenguajes más populares del momento y te ayudamos a decidir cuál se adapta mejor a tus objetivos.',
    content: `# Python vs JavaScript: ¿Cuál Elegir en 2025?

En el mundo del desarrollo de software, dos lenguajes dominan las conversaciones: **Python** y **JavaScript**. Ambos han experimentado un crecimiento explosivo y se han convertido en herramientas esenciales para desarrolladores de todo el mundo.

## Python: El Rey de los Datos y la Simplicidad

### Ventajas de Python:
- **Sintaxis clara y legible:** Ideal para principiantes
- **Excelente para Data Science:** Librerías como Pandas, NumPy, Scikit-learn
- **Comunidad activa:** Gran cantidad de recursos y documentación
- **Versatilidad:** Web, IA, automatización, análisis de datos
- **Desarrollo rápido:** Menos líneas de código para lograr más

### Casos de uso ideales:
- Análisis de datos y visualización
- Machine Learning e IA
- Automatización de tareas
- Desarrollo backend con Django/Flask
- Scripting y herramientas de sistema

## JavaScript: El Lenguaje Universal de la Web

### Ventajas de JavaScript:
- **Funciona en navegador y servidor:** Full-stack con Node.js
- **Ecosistema enorme:** npm con millones de paquetes
- **Desarrollo full-stack:** Una sola tecnología para todo
- **Interactividad web:** Esencial para interfaces modernas
- **Comunidad masiva:** Recursos infinitos y frameworks

### Casos de uso ideales:
- Desarrollo web frontend (React, Vue, Angular)
- Aplicaciones backend con Node.js
- Aplicaciones móviles (React Native)
- Aplicaciones de escritorio (Electron)
- APIs y microservicios

## Comparación Directa

| Aspecto | Python | JavaScript |
|---------|--------|------------|
| **Curva de aprendizaje** | Más fácil | Moderada |
| **Velocidad** | Moderada | Rápida |
| **Mercado laboral** | Excelente | Excelente |
| **Salarios** | Altos | Altos |
| **Flexibilidad** | Alta | Muy alta |

## ¿Cuál Elegir?

### Elige Python si:
- Te interesa Data Science o IA
- Prefieres sintaxis simple y clara
- Quieres entrar rápido al mundo de la programación
- Trabajas con análisis de datos

### Elige JavaScript si:
- Quieres desarrollar aplicaciones web
- Te gusta la versatilidad full-stack
- Buscas oportunidades laborales inmediatas
- Te interesa el desarrollo frontend

## Conclusión

**La verdad es que no hay una respuesta incorrecta.** Ambos lenguajes tienen futuro brillante y excelentes oportunidades laborales.

Mi recomendación: **Empieza con el que más te motive** y luego aprende el otro. En el desarrollo moderno, conocer ambos te dará una ventaja competitiva enorme.

¿Tu elección? ¡Cuéntanos en los comentarios!`,
    coverImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Codechaos',
    categorySlug: 'codechaos',
    author: {
      name: 'Carlos Méndez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    publishedAt: '2025-01-19',
    views: 189,
    likes: 23,
    readTime: '6 min',
    tags: ['Python', 'JavaScript', 'Programación', 'Desarrollo'],
    featured: false,
    status: 'published'
  },
  {
    id: '6',
    title: 'Blockchain Más Allá de las Criptomonedas',
    excerpt: 'Descubre las aplicaciones reales de blockchain que están transformando industrias más allá del mundo financiero.',
    content: `# Blockchain Más Allá de las Criptomonedas

Cuando escuchamos "blockchain", inmediatamente pensamos en Bitcoin y criptomonedas. Pero esta tecnología revolucionaria tiene aplicaciones que van mucho más allá del dinero digital.

## ¿Qué es Blockchain Realmente?

Blockchain es esencialmente un **libro de contabilidad digital descentralizado** que registra transacciones de manera segura, transparente e inmutable. Imagina un cuaderno que:

- Se copia automáticamente en miles de computadoras
- No se puede borrar ni modificar
- Todos pueden verificar su contenido
- No necesita un intermediario central

## Aplicaciones Revolucionarias

### 1. Cadena de Suministro
**Problema:** ¿Cómo saber si tu café es realmente orgánico?
**Solución Blockchain:** Rastreo completo desde la finca hasta tu taza.

**Ejemplo real:** Walmart usa blockchain para rastrear alimentos y detectar contaminación en segundos en lugar de semanas.

### 2. Identidad Digital
**Problema:** Documentos falsificados y robo de identidad.
**Solución Blockchain:** Identidades digitales verificables e inmutables.

**Caso de uso:** Estonia permite a sus ciudadanos votar online usando identidades blockchain.

### 3. Propiedad Intelectual
**Problema:** Plagios y disputas de autoría.
**Solución Blockchain:** Registro inmutable de creaciones.

**Aplicación:** Artistas registran sus obras con timestamp blockchain para probar autoría.

### 4. Contratos Inteligentes
**Problema:** Contratos complejos que requieren intermediarios.
**Solución Blockchain:** Contratos que se ejecutan automáticamente.

**Ejemplo:** Seguros que pagan automáticamente cuando se cumplen condiciones específicas.

### 5. Votación Electrónica
**Problema:** Fraude electoral y falta de transparencia.
**Solución Blockchain:** Votación transparente y verificable.

**Ventajas:**
- Resultados inmediatos
- Imposible manipular
- Auditable por cualquiera
- Reduce costos

## Casos de Éxito Reales

### De Beers - Diamantes
Rastrea diamantes desde la mina hasta la joyería para combatir el comercio de "diamantes de sangre".

### Maersk - Logística
Reduce el papeleo en envíos internacionales de semanas a horas.

### Pfizer - Medicamentos
Combate medicamentos falsificados con trazabilidad completa.

## Desafíos Actuales

### Escalabilidad
Bitcoin procesa 7 transacciones por segundo vs 24,000 de Visa.

### Consumo Energético
Algunas blockchains consumen más energía que países enteros.

### Regulación
Marcos legales aún en desarrollo.

### Adopción
Curva de aprendizaje empinada para usuarios promedio.

## El Futuro de Blockchain

### Tendencias 2025:
- **Blockchain verde:** Algoritmos más eficientes energéticamente
- **Interoperabilidad:** Diferentes blockchains comunicándose
- **DeFi mainstream:** Finanzas descentralizadas para todos
- **NFTs útiles:** Más allá del arte, certificados y licencias

## Conclusión

Blockchain no es solo una moda tecnológica. Es una **infraestructura fundamental** que puede eliminar intermediarios, reducir costos y aumentar la transparencia en prácticamente cualquier industria.

La pregunta no es si blockchain transformará tu industria, sino **cuándo** y **cómo** puedes prepararte para esa transformación.

¿En qué área crees que blockchain tendrá mayor impacto? ¡Comparte tu opinión!`,
    coverImage: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Codechaos',
    categorySlug: 'codechaos',
    author: {
      name: 'María Rodríguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    publishedAt: '2025-01-18',
    views: 312,
    likes: 45,
    readTime: '9 min',
    tags: ['Blockchain', 'Tecnología', 'Innovación', 'Futuro'],
    featured: true,
    status: 'published'
  }
];