import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart,
  Heart,
  Eye
} from 'lucide-react';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // PRODUCTOS REALES - AQUÍ ESTÁN LOS PRODUCTOS
  const products = [
    {
      id: '1',
      name: 'Zukunft Welle T-Shirt Premium',
      price: 29.99,
      originalPrice: 39.99,
      category: 'clothing',
      image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      rating: 4.9,
      reviews: 203,
      description: 'Set von 20 wasserfesten Stickern mit Tech-Motiven. Perfekt für Laptop, Handy oder Skateboard.',
      inStock: true,
      stock: 100,
      tags: ['Wasserfest', 'Vinyl', 'Tech-Design']
    },
    {
      id: '4',
      name: 'Smart Watch "Future Time"',
      price: 199.99,
      originalPrice: 249.99,
      category: 'tech',
      image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      id: '5',
      name: 'Zukunft Welle Hoodie Deluxe',
      price: 49.99,
      originalPrice: 59.99,
      category: 'clothing',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      id: '6',
      name: 'Wireless Earbuds "Sound Wave"',
      price: 79.99,
      category: 'tech',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.6,
      reviews: 189,
      description: 'Kabellose Kopfhörer mit Active Noise Cancelling und 24h Akkulaufzeit mit Case.',
      colors: ['Weiß', 'Schwarz'],
      inStock: true,
      stock: 35,
      tags: ['Noise Cancelling', 'Bluetooth 5.0', 'Touch Control']
    },
    {
      id: '7',
      name: 'Gaming Mauspad "Pixel Perfect"',
      price: 34.99,
      category: 'accessories',
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      reviews: 98,
      description: 'XXL Gaming Mauspad mit RGB-Beleuchtung und rutschfester Unterseite. 80x30cm Größe.',
      inStock: true,
      stock: 22,
      tags: ['RGB', 'XXL', 'Gaming']
    },
    {
      id: '8',
      name: 'Zukunft Welle Cap "Tech Style"',
      price: 24.99,
      category: 'clothing',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.3,
      reviews: 76,
      description: 'Stylische Snapback Cap mit gesticktem Logo. Verstellbar und aus hochwertiger Baumwolle.',
      colors: ['Schwarz', 'Navy', 'Weiß'],
      inStock: true,
      stock: 45,
      tags: ['Snapback', 'Verstellbar', 'Bestickt']
    }
  ];

  const categories = [
    { value: 'all', label: 'Alle Produkte' },
    { value: 'clothing', label: 'Kleidung' },
    { value: 'accessories', label: 'Accessoires' },
    { value: 'tech', label: 'Technologie' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    alert(`✅ ${product.name} wurde zum Warenkorb hinzugefügt!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🛍️ Zukunft Welle Shop
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Entdecke unsere exklusiven Produkte für Tech-Enthusiasten und Zukunftsdenker
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-blue-100">
              <div className="text-center">
                <div className="text-2xl font-bold">{products.length}</div>
                <div className="text-sm">Produkte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.6★</div>
                <div className="text-sm">Bewertung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm">Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Produkte suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-500">
              {filteredProducts.length} Produkte gefunden
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Keine Produkte gefunden
              </h3>
              <p className="text-gray-500 text-lg">
                Versuche einen anderen Suchbegriff oder wähle eine andere Kategorie.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          ⭐ Empfohlen
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          🔥 Sale
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          Ausverkauft
                        </span>
                      )}
                    </div>

                    {/* Wishlist */}
                    <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                    </button>

                    {/* Quick View */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Colors */}
                    {product.colors && (
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs text-gray-500">Farben:</span>
                        <div className="flex space-x-1">
                          {product.colors.slice(0, 3).map((color, i) => (
                            <div
                              key={i}
                              className={`w-4 h-4 rounded-full border-2 border-gray-300 ${
                                color === 'Schwarz' ? 'bg-black' :
                                color === 'Weiß' ? 'bg-white' :
                                color === 'Navy' ? 'bg-blue-900' :
                                color === 'Grau' ? 'bg-gray-500' :
                                color === 'Bordeaux' ? 'bg-red-900' :
                                color === 'Silber' ? 'bg-gray-400' :
                                color === 'Gold' ? 'bg-yellow-400' :
                                'bg-blue-500'
                              }`}
                              title={color}
                            />
                          ))}
                          {product.colors.length > 3 && (
                            <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews} Bewertungen)
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-blue-600">
                          €{product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            €{product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {product.stock && (
                        <span className="text-xs text-gray-500">
                          {product.stock} verfügbar
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        product.inStock
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg transform hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>
                        {product.inStock ? 'In den Warenkorb' : 'Ausverkauft'}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors shadow-lg hover:shadow-xl">
                Mehr Produkte laden
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🎁 Exklusive Angebote erhalten
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Melde dich für unseren Newsletter an und erhalte 10% Rabatt auf deine erste Bestellung!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="deine@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              10% Rabatt sichern
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            Kein Spam. Nur exklusive Angebote und neue Produkte. Jederzeit kündbar.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Shop;