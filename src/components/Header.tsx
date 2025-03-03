import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="bg-red-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">ПУМПАЈ ЗАПЛАЊЕ!</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#pocetna" className="hover:text-red-200 transition-colors">Почетна</a>
          <a href="#galerija" className="hover:text-red-200 transition-colors">Галерија</a>
          <a href="#o-protestu" className="hover:text-red-200 transition-colors">О протесту</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-red-700">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#pocetna" 
              className="text-white hover:text-red-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              Почетна
            </a>
            <a 
              href="#galerija" 
              className="text-white hover:text-red-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              Галерија
            </a>
            <a 
              href="#o-protestu" 
              className="text-white hover:text-red-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              О протесту
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;