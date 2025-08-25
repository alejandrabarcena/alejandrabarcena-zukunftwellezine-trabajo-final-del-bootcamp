import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEO/SEOHead';
import ImageOptimizer from '../components/Performance/ImageOptimizer';
import { categories } from '../config/categories';
import { articles } from '../data/articles';
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  Heart,
  Calendar,
  User,
  Tag,
  Filter,
  Search
} from 'lucide-react';

const CategoryDetail = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    // Find category by slug
    const foundCategory = categories.find(c => c.slug === slug);
    setCategory(foundCategory);

    // Filter articles by category
    const filteredArticles = articles.filter(article => 
      article.categorySlug === slug
    );
    setCategoryArticles(filteredArticles);
  }, [slug]);

  const sortedArticles = [...categoryArticles].sort((a, b) => {
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

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Kategorie nicht gefunden
          </h2>
          <Link
            to="/categories"
            className="text-blue-600 hover:text-blue-700"
          >
            Zurück zu den Kategorien
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={`${category.name} - Zukunft Welle`}
        description={`Entdecke alle Artikel in der Kategorie ${category.name}: ${category.description}`}
        keywords={`${category.name}, Zukunft Welle, Artikel, Tech`}
      />

      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/categories"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Kategorien
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <section className={`bg-gradient-to-r ${category.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-white/20 p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Tag className="w-10 h-10" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              {category.description}
            </p>

            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">{categoryArticles.length}</div>
                <div className="text-sm">Artikel</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {categoryArticles.reduce((sum, article) => sum + article.views, 0).toLocaleString()}
                </div>
                <div className="text-sm">Aufrufe</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Sortieren:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="latest">Neueste</option>
                <option value="popular">Beliebteste</option>
                <option value="liked">Meist gelikt</option>
              </select>
            </div>
            
            <div className="text-sm text-gray-500">
              {sortedArticles.length} Artikel gefunden
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedArticles.length === 0 ? (
            <div className="text-center py-12">
              <div className={`bg-gradient-to-r ${category.color} p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center`}>
                <Tag className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Noch keine Artikel
              </h3>
              <p className="text-gray-600 mb-6">
                In dieser Kategorie sind noch keine Artikel verfügbar. Schau bald wieder vorbei!
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors"
              >
                Alle Artikel anzeigen
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <ImageOptimizer
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={300}
                    />
                    {article.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Empfohlen
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <Link
                      to={`/articles/${article.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
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
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Meta */}
                    <div className="flex items-center justify-between">
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
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
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

export default CategoryDetail;