import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const photos = [
    {
      id: 1,
      src: "src/components/Gallery/1.jpg",
      caption: " \"Пумпај протест, не пумпај оцене!\"",
      location: "Испред топоницу"
    },
    {
      id: 2,
      src: "/components/image/2.jpg",
      caption: "\"Пумпамо за будућност, не за политичаре!\"",
      location: "Сви за једног, један за сви"
    },
    {
      id: 3,
      src: "https://slikesaprotestauzaplanju.netlify.app/images/protest3.jpg",
      caption: "\"Пумпај знање, не корупцију!\"",
      location: "У центар Заплање"
    },
    {
      id: 4,
      src: "https://slikesaprotestauzaplanju.netlify.app/images/protest4.jpg",
      caption: "\"Пумпамо за боље услове!\"",
      location: "Код деда Драгутина"
    },
    {
      id: 5,
      src: "https://slikesaprotestauzaplanju.netlify.app/images/protest5.jpg",
      caption: "\"Пумпај промене!\"",
      location: "Пумпа ради 0-24"
    },
    {
      id: 6,
      src: "https://slikesaprotestauzaplanju.netlify.app/images/protest6.jpg",
      caption: "\"Пумпај за правду!\"",
      location: "Ће буде"
    }
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="galerija" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Галерија Транспарената</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64">
                <img 
                  src={photo.src} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="text-white font-bold">{photo.location}</div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-gray-800">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              onClick={goToPrevious}
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              <img 
                src={photos[currentPhotoIndex].src} 
                alt={photos[currentPhotoIndex].caption} 
                className="max-h-[70vh] max-w-full"
              />
              <div className="text-white text-center mt-4 text-xl">
                {photos[currentPhotoIndex].caption}
              </div>
            </div>
            
            <button 
              className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              onClick={goToNext}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
