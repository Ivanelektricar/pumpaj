import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">ПУМПАЈ ЗАПЛАЊЕ!</h2>
            <p className="text-gray-400">Студентски протест 2025.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#pocetna" className="hover:text-red-400 transition-colors">Почетна</a>
            <a href="#galerija" className="hover:text-red-400 transition-colors">Галерија</a>
            <a href="#o-protestu" className="hover:text-red-400 transition-colors">О протесту</a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Студентски покрет "Пумпај ЗАПЛАЊЕ". Сва права задржана.</p>
          <p className="mt-2">Направљено са ❤️ од стране студената за студенте</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;