import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEO/SEOHead';
import { siteContent } from '../config/content';
import { 
  Globe, 
  Users, 
  Target, 
  Heart,
  Mail,
  MapPin,
  Calendar,
  Award,
  Lightbulb,
  Eye,
  Palette,
  BookOpen,
  Zap
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={`${siteContent.about.title} - ${siteContent.site.name}`}
        description={siteContent.about.subtitle}
        keywords="Zukunft Welle, STEAM, Digital Magazine, Alejandra Bárcena"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              {/* Logo temporal - CAMBIARÁS ESTO DESPUÉS */}
              <div className="bg-white/20 p-6 rounded-2xl">
                <Globe className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {siteContent.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {siteContent.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Was ist Zukunft Welle?
              </h2>
              
              {/* AQUÍ SE MUESTRA EL CONTENIDO DEL ARCHIVO CONFIG */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {siteContent.site.description}
                </p>
                <p>
                  {siteContent.about.mission}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="STEAM Education"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="font-bold text-gray-900">STEAM</p>
                    <p className="text-sm text-gray-600">Fokus</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wer steht hinter dem Projekt?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src={siteContent.founder.image}
                alt={siteContent.founder.name}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  <div>
                    <p className="font-bold text-gray-900">Gründerin</p>
                    <p className="text-sm text-gray-600">& Visionärin</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {siteContent.founder.name}
              </h3>
              <p className="text-lg font-medium text-blue-600 mb-4">
                {siteContent.founder.title}
              </p>
              
              {/* AQUÍ SE MUESTRA TU BIOGRAFÍA DEL ARCHIVO CONFIG */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {siteContent.founder.bio}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Werde Teil unserer Gemeinschaft
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Entdecke die Zukunft mit uns – kreativ, vielfältig und inspirierend
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">{siteContent.founder.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">Global Community</span>
              </div>
            </div>

            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
              {siteContent.founder.name} kontaktieren
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;