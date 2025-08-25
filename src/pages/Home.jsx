import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEO/SEOHead';
import ImageOptimizer from '../components/Performance/ImageOptimizer';
import { 
  ArrowRight, 
  Clock, 
  Eye, 
  Heart,
  TrendingUp,
  Sparkles,
  BookOpen,
  Users,
  Calendar,
  Tag
} from 'lucide-react';
import { articles } from '../data/articles';
import { categories } from '../config/categories';
import { siteContent } from '../config/content';

const Home = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    // Get featured articles
    const featured = articles.filter(article => article.featured && article.status === 'published').slice(0, 3);
    setFeaturedArticles(featured);
    
    // Get recent articles
    const recent = articles
      .filter(article => article.status === 'published')
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 6);
    setRecentArticles(recent);
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEOHead 
        title={`${siteContent.site.name} - ${siteContent.site.tagline}`}
        description={siteContent.site.description}
        keywords="Tech, STEAM, Künstliche Intelligenz, Programmierung, Data Science, Robotik, Innovation, Zukunft"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 mr-3 text-yellow-300" />
              <span className="text-lg font-medium tracking-wide uppercase">
                {siteContent.site.tagline}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {siteContent.site.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {siteContent.site.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/articles"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Artikel entdecken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Shop besuchen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {articles.length}
              </div>
              <div className="text-gray-600">Artikel</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {categories.length}
              </div>
              <div className="text-gray-600">Kategorien</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">
                {articles.reduce((sum, article) => sum + article.views, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Aufrufe</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">
                4.8★
              </div>
              <div className="text-gray-600">Bewertung</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
                <span className="text-sm font-semibold text-blue-500 uppercase tracking-wide">
                  Empfohlen
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Beliebte Artikel
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Entdecke die meistgelesenen Inhalte unserer Community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <ImageOptimizer
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-48 group-hover:scale-110 transition-transform duration-500"
                      width={400}
                      height={300}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
                        ⭐ Empfohlen
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{article.views} Aufrufe</span>
                    </div>
                    <Link
                      to={`/articles/${generateSlug(article.title)}`}
                      className="block group-hover:text-blue-600 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
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
                    <Link
                      to={`/articles/${generateSlug(article.title)}`}
                      className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors"
                    >
                      Weiterlesen
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entdecke unsere Kategorien
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tauche ein in verschiedene Themenwelten der Technologie und Innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.slice(0, 6).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/categories/${category.slug}`}
                  className={`block p-6 rounded-2xl bg-gradient-to-br ${category.color} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center`}
                >
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/categories"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Alle Kategorien
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Neueste Artikel
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bleibe auf dem Laufenden mit unseren neuesten Publikationen
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <ImageOptimizer
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-40 group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={240}
                    />
                    {article.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          ⭐
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(article.publishedAt).toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Link
                      to={`/articles/${generateSlug(article.title)}`}
                      className="block group-hover:text-blue-600 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{article.views}</span>
                        <Heart className="w-4 h-4 ml-3 mr-1" />
                        <span>{article.likes}</span>
                      </div>
                      <Link
                        to={`/articles/${generateSlug(article.title)}`}
                        className="text-blue-500 font-medium hover:text-blue-600 transition-colors text-sm"
                      >
                        Lesen →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                to="/articles"
                className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Alle Artikel anzeigen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Bereit für die Zukunft?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Werde Teil unserer Community und entdecke die neuesten Trends in Technologie und Innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/articles"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Artikel entdecken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;