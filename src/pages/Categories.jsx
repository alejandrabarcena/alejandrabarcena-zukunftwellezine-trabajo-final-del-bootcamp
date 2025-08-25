import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEO/SEOHead';
import { trackCategoryView } from '../hooks/useAnalytics';
import { ArrowRight, Users, TrendingUp } from 'lucide-react';
import { categories } from '../config/categories';

const Categories = () => {
  const handleCategoryClick = (categorySlug) => {
    trackCategoryView(categorySlug);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Kategorien - Zukunft Welle Zine"
        description="Entdecke alle Kategorien: Codechaos, Datenjunkies, Maschinengeflüster, Grenzsprenger und mehr"
        keywords="Tech Kategorien, KI, Programmierung, Data Science, Robotik, Design, Kunst"
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
              Kategorien entdecken
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Tauche ein in vielfältige Themen, die unsere technologische und kulturelle Landschaft prägen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={`/categories/${category.slug}`}
                  className={`block p-8 rounded-2xl bg-gradient-to-br ${category.color} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-white/20 p-4 rounded-xl">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-white/80 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Aktive Community</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bereit für die Zukunft?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Werde Teil unserer Community und entdecke die neuesten Trends und Innovationen
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Artikel entdecken
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Categories;