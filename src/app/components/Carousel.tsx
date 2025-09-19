'use client'

import Image from "next/image";
import { useState, useEffect } from 'react';

type ImageSlide = {
  id: number;
  src: string;
  alt: string;
};

type CarouselProps = {
  images: ImageSlide[];
  className?: string;
};

const Carousel = ({ images, className = "" }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Si no hay imágenes, mostrar un placeholder
  if (!images || images.length === 0) {
    return (
      <div className={`relative w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-gray-500">No hay imágenes</span>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`relative w-full ${className}`}>

      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        {images.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 duration-700 ease-in-out transition-opacity ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>


      {images.length > 1 && (
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Slider controls - solo si hay más de 1 imagen */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute top-1/2 start-4 z-30 flex items-center justify-center -translate-y-1/2 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition-colors">
              <svg 
                className="w-4 h-4 text-white rtl:rotate-180" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 6 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-1/2 end-4 z-30 flex items-center justify-center -translate-y-1/2 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition-colors">
              <svg 
                className="w-4 h-4 text-white rtl:rotate-180" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 6 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;