// 🛍️ TODOS LOS PRODUCTOS DE LA TIENDA
// Agrega, edita o elimina productos aquí

export const products = [
  {
    id: '1',
    name: 'Zukunft Welle T-Shirt Premium',
    price: 29.99,
    originalPrice: 39.99,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.8,
    reviews: 124,
    description: 'Hochwertiges Bio-Baumwoll T-Shirt mit dem exklusiven Zukunft Welle Logo. Nachhaltig produziert und super bequem.',
    colors: ['Schwarz', 'Weiß', 'Navy', 'Grau'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    inStock: true,
    stock: 50,
    tags: ['Bio-Baumwolle', 'Nachhaltig', 'Unisex']
  },
  {
    id: '2',
    name: 'KI-Programmier-Tasse "Code & Coffee"',
    price: 19.99,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.6,
    reviews: 89,
    description: 'Keramiktasse mit inspirierenden KI-Zitaten für Entwickler. Perfekt für lange Coding-Sessions.',
    colors: ['Weiß', 'Schwarz'],
    inStock: true,
    stock: 30,
    tags: ['Keramik', 'Spülmaschinenfest', 'Entwickler']
  },
  {
    id: '3',
    name: 'Tech Sticker Pack "Future Vibes"',
    price: 12.99,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.9,
    reviews: 203,
    description: 'Set von 20 wasserfesten Stickern mit Tech-Motiven. Perfekt für Laptop, Handy oder Skateboard.',
    inStock: true,
    stock: 100,
    tags: ['Wasserfest', 'Vinyl', 'Tech-Design']
  },
  {
    id: '4',
    name: 'Zukunft Welle Hoodie Deluxe',
    price: 49.99,
    originalPrice: 59.99,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.7,
    reviews: 156,
    description: 'Gemütlicher Hoodie aus nachhaltiger Baumwolle mit Kapuze und Kängurutasche. Perfekt für kalte Tage.',
    colors: ['Grau', 'Schwarz', 'Navy', 'Bordeaux'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stock: 25,
    featured: true,
    tags: ['Bio-Baumwolle', 'Unisex', 'Warm']
  },
  {
    id: '5',
    name: 'Data Science Notizbuch "Analytics Pro"',
    price: 24.99,
    category: 'books',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.5,
    reviews: 67,
    description: 'Hochwertiges Notizbuch für Data Scientists mit vorgedruckten Diagramm-Templates und Formeln.',
    inStock: true,
    stock: 40,
    tags: ['Hardcover', 'Dotted Pages', 'Premium Papier']
  },
  {
    id: '6',
    name: 'Robotik Workshop Kit "Build Your Bot"',
    price: 89.99,
    category: 'tech',
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.8,
    reviews: 45,
    description: 'Komplettes Kit für Robotik-Einsteiger mit Arduino, Sensoren und deutscher Anleitung.',
    inStock: false,
    stock: 0,
    tags: ['Arduino', 'Lernkit', 'STEM Education']
  },
  {
    id: '7',
    name: 'Smart Watch "Future Time"',
    price: 199.99,
    originalPrice: 249.99,
    category: 'tech',
    image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.4,
    reviews: 312,
    description: 'Smartwatch mit Gesundheitsmonitoring, GPS und 7 Tage Akkulaufzeit. Wasserdicht bis 50m.',
    colors: ['Schwarz', 'Silber', 'Gold'],
    inStock: true,
    stock: 15,
    featured: true,
    tags: ['Wasserdicht', 'GPS', 'Herzfrequenz']
  },
  {
    id: '8',
    name: 'Wireless Earbuds "Sound Wave"',
    price: 79.99,
    category: 'tech',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.6,
    reviews: 189,
    description: 'Kabellose Kopfhörer mit Active Noise Cancelling und 24h Akkulaufzeit mit Case.',
    colors: ['Weiß', 'Schwarz'],
    inStock: true,
    stock: 35,
    tags: ['Noise Cancelling', 'Bluetooth 5.0', 'Touch Control']
  },
  {
    id: '9',
    name: 'Gaming Mauspad "Pixel Perfect"',
    price: 34.99,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.7,
    reviews: 98,
    description: 'XXL Gaming Mauspad mit RGB-Beleuchtung und rutschfester Unterseite. 80x30cm Größe.',
    inStock: true,
    stock: 22,
    tags: ['RGB', 'XXL', 'Gaming']
  },
  {
    id: '10',
    name: 'Zukunft Welle Cap "Tech Style"',
    price: 24.99,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.3,
    reviews: 76,
    description: 'Stylische Snapback Cap mit gesticktem Logo. Verstellbar und aus hochwertiger Baumwolle.',
    colors: ['Schwarz', 'Navy', 'Weiß'],
    inStock: true,
    stock: 45,
    tags: ['Snapback', 'Verstellbar', 'Bestickt']
  },
  {
    id: '11',
    name: 'Portable Charger "Power Bank Pro"',
    price: 39.99,
    category: 'tech',
    image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.5,
    reviews: 134,
    description: '20.000mAh Power Bank mit Fast Charging und 3 USB-Ports. Lädt Handy bis zu 6x auf.',
    colors: ['Schwarz', 'Weiß'],
    inStock: true,
    stock: 28,
    tags: ['Fast Charging', '20000mAh', 'LED Display']
  },
  {
    id: '12',
    name: 'Coding Poster Set "Algorithm Art"',
    price: 29.99,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.8,
    reviews: 52,
    description: 'Set von 4 Postern (A3) mit schönen Code-Visualisierungen. Perfekt für Büro oder Zimmer.',
    inStock: true,
    stock: 18,
    tags: ['A3 Format', 'Hochglanz', 'Rahmen nicht enthalten']
  }
];

// 🛒 KATEGORIEN FÜR FILTER
export const productCategories = [
  { value: 'all', label: 'Alle Produkte' },
  { value: 'clothing', label: 'Kleidung' },
  { value: 'accessories', label: 'Accessoires' },
  { value: 'books', label: 'Bücher' },
  { value: 'tech', label: 'Technologie' }
];

// 🎯 PARA AGREGAR UN NUEVO PRODUCTO:
// 1. Copia un producto existente
// 2. Cambia el ID a un número único
// 3. Modifica nombre, precio, imagen, etc.
// 4. ¡Guarda y listo!