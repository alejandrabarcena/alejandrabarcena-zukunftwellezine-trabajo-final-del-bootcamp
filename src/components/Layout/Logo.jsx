import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Logo = ({ className = "", linkClassName = "" }) => {
  // Cambia esta variable a true cuando tengas tu logo
  const hasCustomLogo = true;
  const logoPath = "/1.png"; // Tu logo principal

  return (
    <Link to="/" className={`flex items-center space-x-3 ${linkClassName}`}>
      {hasCustomLogo ? (
        // Tu logo personalizado
        <img
          src={logoPath}
          alt="Zukunft Welle Logo"
          className="h-12 w-auto"
        />
      ) : (
        // Logo temporal con icono
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
          <Globe className="w-6 h-6 text-white" />
        </div>
      )}
      
      {!hasCustomLogo && <div className={className}>
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Zukunft Welle
        </h1>
        <p className="text-xs text-gray-500 font-light tracking-widest">ZINE</p>
      </div>}
    </Link>
  );
};

export default Logo;