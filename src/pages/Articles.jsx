import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEO/SEOHead';
import ImageOptimizer from '../components/Performance/ImageOptimizer';
import { articles } from '../data/articles';
import { categories } from '../config/categories';
import { 
  Search, 
  Filter, 
  Clock, 
  Eye, 
  Heart,
  Calendar,
  User,
  Tag,
  TrendingUp
} from 'lucide-react';

const Articles = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Get search term from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchFromUrl = urlParams.get('search');
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [location.search]);

  // Filter and sort articles
  useEffect(() => {
    let filtered = articles.filter(article => {
      const matchesSearch = searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || article.categorySlug === selectedCategory;
      
      return matchesSearch && matchesCategory && article.status === 'published';
    });

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'popular':
          return b.views - a.views;
        case 'liked':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

    setFilteredArticles(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  // Generate article slug
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Artikel - Zukunft Welle"
        description="Entdecke die neuesten Artikel über Technologie, KI, Programmierung und Innovation"
        keywords="Tech Artikel, KI, Programmierung, Innovation, Zukunft Welle"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Alle Artikel
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Entdecke die neuesten Trends in Technologie, KI und Innovation
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-blue-100">
              <div className="text-center">
                <div className="text-2xl font-bold">{articles.length}</div>
                <div className="text-sm">Artikel</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {articles.reduce((sum, article) => sum + article.views, 0).toLocaleString()}
                </div>
                <div className="text-sm">Aufrufe</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-sm">Bewertung</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Artikel suchen..."
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
                <option value="all">Alle Kategorien</option>
                {categories.map(category => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="latest">Neueste</option>
              <option value="popular">Beliebteste</option>
              <option value="liked">Meist gelikt</option>
            </select>

            <div className="text-sm text-gray-500">
              {filteredArticles.length} Artikel gefunden
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Keine Artikel gefunden
              </h3>
              <p className="text-gray-500 text-lg">
                Versuche einen anderen Suchbegriff oder wähle eine andere Kategorie.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <ImageOptimizer
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={300}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {article.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          ⭐ Empfohlen
                        </span>
                      )}
                    </div>

                    {/* Category */}
                    <div className="absolute top-3 right-3">
                      <Link
                        to={`/categories/${article.categorySlug}`}
                        className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 hover:bg-white transition-colors"
                      >
                        {article.category}
                      </Link>
                    </div>
                  </div>

                  <div className="p-6">
                    <Link
                      to={`/articles/${article.id}`}
                      className="block group-hover:text-blue-600 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <ImageOptimizer
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-8 h-8 rounded-full"
                          width={32}
                          height={32}
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {article.author.name}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(article.publishedAt).toLocaleDateString('de-DE')}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Heart className="w-4 h-4 mr-1" />
                        {article.likes}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Articles;