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
];

export default articles