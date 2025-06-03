'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type ColorKey = 'Laranja' | 'Preto' | 'Branco' | 'Roxo' | '';

export default function ImageGallery({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
        <Image
          src={images[currentImageIndex]}
          alt={`Product image ${currentImageIndex + 1}`}
          width={600}
          height={600}
          className="object-contain w-full h-full"
        />

        {/* Setas de Navegação */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Contador de Imagens */}
        {images.length > 0 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex justify-center gap-3 mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                index === currentImageIndex
                  ? 'border-blue-500 shadow-md'
                  : 'border-transparent hover:border-gray-300'
              } transition-all`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}