import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEO/SEOHead';
import { 
  Mail, 
  Check, 
  Star,
  Users,
  Calendar,
  TrendingUp,
  Bell,
  Gift
} from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 1000);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Exklusive Inhalte',
      description: 'Erhalte Artikel und Insights, die nur Newsletter-Abonnenten bekommen'
    },
    {
      icon: Calendar,
      title: 'Wöchentliche Updates',
      description: 'Jeden Donnerstag die wichtigsten Tech-News und Trends der Woche'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Tritt unserer exklusiven Community bei und vernetze dich mit Gleichgesinnten'
    },
    {
      icon: Gift,
      title: 'Früher Zugang',
      description: 'Sei der Erste, der neue Features und Inhalte entdeckt'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Abonnenten' },
    { number: '95%', label: 'Öffnungsrate' },
    { number: '4.8/5', label: 'Bewertung' }
  ];

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Willkommen bei Zukunft Welle!
          </h2>
          
          <p className="text-gray-600 mb-6">
            Du hast dich erfolgreich für unseren Newsletter angemeldet. 
            Prüfe deine E-Mails für die Bestätigung.
          </p>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors"
          >
            Zur Startseite
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Newsletter - Zukunft Welle"
        description="Abonniere den Zukunft Welle Newsletter für exklusive Tech-Insights und wöchentliche Updates"
        keywords="Newsletter, Tech News, Zukunft Welle, Abonnieren"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <Mail className="w-10 h-10" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Der Zukunft Welle Newsletter
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bleibe auf dem Laufenden mit den neuesten Trends in Technologie, 
              KI und Innovation. Jeden Donnerstag direkt in deine Inbox.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 -mt-32 relative z-10"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Jetzt kostenlos abonnieren
              </h2>
              <p className="text-gray-600">
                Tritt über 10.000 Tech-Enthusiasten bei, die bereits unseren Newsletter lesen
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.com"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    'Abonnieren'
                  )}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Kein Spam. Jederzeit abbestellbar. Datenschutz ist uns wichtig.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warum unseren Newsletter abonnieren?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Erhalte die besten Inhalte und bleibe immer einen Schritt voraus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Was unsere Leser sagen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Der beste Tech-Newsletter, den ich je gelesen habe. 
                Immer auf dem neuesten Stand und super verständlich erklärt."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">MK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Klein</div>
                  <div className="text-sm text-gray-500">Software Entwicklerin</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Perfekt für alle, die sich für Zukunftstechnologien interessieren. 
                Kurz, prägnant und immer interessant."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Jan Schmidt</div>
                  <div className="text-sm text-gray-500">Data Scientist</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;