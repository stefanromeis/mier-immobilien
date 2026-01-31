import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">
              <span className="text-primary-600">Mier</span> Immobilien
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#immobilien" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Immobilien
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Services
            </a>
            <a href="#uber-uns" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Über uns
            </a>
            <a href="#kontakt" className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Kontakt
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#immobilien" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Immobilien
            </a>
            <a href="#services" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Services
            </a>
            <a href="#uber-uns" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Über uns
            </a>
            <a href="#kontakt" className="block bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center">
              Kontakt
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
