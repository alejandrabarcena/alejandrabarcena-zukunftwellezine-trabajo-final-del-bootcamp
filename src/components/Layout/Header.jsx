import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  ShoppingCart, 
  LogOut,
  Settings,
  Globe
} from 'lucide-react';
import { siteContent } from '../../config/content';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Mock authentication state for demo
  const isAuthenticated = false;
  const user = null;

  return (
    <div>
      <header className="bg-white text-gray-900 sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {siteContent.site.name}
              </h1>
              <p className="text-sm text-gray-500 font-light tracking-widest uppercase">
                {siteContent.site.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/articles" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {siteContent.navigation.articles}
            </Link>
            <Link 
              to="/categories" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {siteContent.navigation.categories}
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {siteContent.navigation.about}
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Kontakt
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Menu */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {user?.avatar_url ? (
                    <img
                      src={user.avatar_url}
                      alt={user.first_name || 'User'}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <span>Profil</span>
                </button>

                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
                  >
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Profil</span>
                    </Link>
                    <button
                      onClick={() => console.log('Sign out')}
                      className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Abmelden</span>
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Anmelden
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
                >
                  Registrieren
                </button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/articles" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {siteContent.navigation.articles}
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {siteContent.navigation.categories}
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {siteContent.navigation.about}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
      </header>
    </div>
  );
};

export default Header;