import React from 'react';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="py-2 border-b border-gray-100 text-sm hidden md:block">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-600 mr-2" />
                <a href="tel:+37255511144" className="hover:text-blue-600">+372 5551 1144</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-blue-600 mr-2" />
                <a href="mailto:info@auto-diagnostika.ee" className="hover:text-blue-600">info@auto-diagnostika.ee</a>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-blue-600 mr-2" />
              <span>E-R: 8:00 – 16:00, L-P Suletud</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/soo (1) copy.png" 
                alt="SOO AUTOGRUPP" 
                className="h-20 md:h-28 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-600">Avaleht</Link>
              <Link to="/teenused" className="hover:text-blue-600">Teenused</Link>
              <Link to="/tooted" className="hover:text-blue-600">Tooted</Link>
              <Link to="/hinnakiri" className="hover:text-blue-600">Hinnakiri</Link>
              <Link to="/blogi" className="hover:text-blue-600">Blogi</Link>
              <Link to="/meist" className="hover:text-blue-600">Meist</Link>
            </div>
            
            <Link
              to="/kontakt"
              className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Võta ühendust
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Avaleht</Link>
                <Link to="/teenused" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Teenused</Link>
                <Link to="/tooted" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Tooted</Link>
                <Link to="/hinnakiri" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Hinnakiri</Link>
                <Link to="/blogi" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Blogi</Link>
                <Link to="/meist" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Meist</Link>
                <Link
                  to="/kontakt"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Võta Ühendust
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}