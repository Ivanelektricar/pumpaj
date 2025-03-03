import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="pocetna" className="bg-gradient-to-b from-red-600 to-red-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">ПУМПАЈ ЗАПЛАЊЕ!</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Глас студената Србије и Заплања који се боре за боље сутра
        </p>
        <div className="text-4xl md:text-6xl font-bold animate-pulse">
          #ПумпајПротест - ПУМПАЈ ЗАПЛАЊЕ!
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a 
            href="#galerija" 
            className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-100 transition-colors"
          >
            Погледај галерију
          </a>
          <a 
            href="#o-protestu" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-red-600 transition-colors"
          >
            Сазнај више
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
