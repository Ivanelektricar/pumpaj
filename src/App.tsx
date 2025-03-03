import React, { useState } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main>
        <Hero />
        <Gallery />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;