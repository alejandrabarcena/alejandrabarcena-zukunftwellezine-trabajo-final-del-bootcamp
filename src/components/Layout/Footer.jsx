import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Heart,
  Globe
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Zukunft Welle
                </h2>
                <p className="text-sm text-gray-500 font-light tracking-widest uppercase">
                  Digital Magazine
                </p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Una revista digital para jóvenes internacionales apasionados por STEAM, 
              tecnología, arte y cultura. Exploramos el futuro desde múltiples perspectivas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entdecken</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-white transition-colors">
                  Neueste Artikel
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors">
                  Kategorien
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-gray-400 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Beliebt</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/codechaos" className="text-gray-400 hover:text-white transition-colors">
                  Codechaos
                </Link>
              </li>
              <li>
                <Link to="/categories/datenjunkies" className="text-gray-400 hover:text-white transition-colors">
                  Datenjunkies
                </Link>
              </li>
              <li>
                <Link to="/categories/maschinengefluster" className="text-gray-400 hover:text-white transition-colors">
                  Maschinengeflüster
                </Link>
              </li>
              <li>
                <Link to="/categories/stimmenrausch" className="text-gray-400 hover:text-white transition-colors">
                  Stimmenrausch
                </Link>
              </li>
              <li>
                <Link to="/categories/grenzsprenger" className="text-gray-400 hover:text-white transition-colors">
                  Grenzsprenger
                </Link>
              </li>
              <li>
                <Link to="/categories/papierrebellen" className="text-gray-400 hover:text-white transition-colors">
                  Papierrebellen
                </Link>
              </li>
              <li>
                <Link to="/categories/bassattacke" className="text-gray-400 hover:text-white transition-colors">
                  Bassattacke
                </Link>
              </li>
              <li>
                <Link to="/categories/kopfkino-deluxe" className="text-gray-400 hover:text-white transition-colors">
                  Kopfkino Deluxe
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Zukunft Welle Zine. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Gemacht mit <Heart className="w-4 h-4 mx-1 text-red-500" /> für die Zukunft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;