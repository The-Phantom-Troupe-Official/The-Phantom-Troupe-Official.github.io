import React, { useState, useEffect } from 'react';
import Image1 from '../Images/PC.jpg';
import Image2 from '../Images/PC2.jpeg';
import Image3 from '../Images/PC3.jpeg';
import Image1Small from '../Images/smallImage1.jpg';
import Image2Small from '../Images/smallImage2.jpg';
import Image3Small from '../Images/smallImage1.jpg';

const slides = [
  {
    id: 1,
    title: "THE SOLUTION TO YOUR ELECTRONIC NEEDS",
    subtitle: "Your One-Stop Shop for Cutting-Edge Computers and Hardware! Discover unbeatable prices on the latest tech to power your digital world!",
    image: Image1,
    smallImage: Image1Small,
  },
  {
    id: 2,
    title: "POWERFUL GAMING PCs",
    subtitle: "Experience next-level gaming with our custom-built high-performance rigs.",
    image: Image2,
    smallImage: Image2Small,
  },
  {
    id: 3,
    title: "PROFESSIONAL WORKSTATIONS",
    subtitle: "Boost your productivity with our powerful workstations designed for professionals.",
    image: Image3,
    smallImage: Image3Small,
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust this breakpoint as needed
    };
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`relative overflow-hidden ${isSmallScreen ? 'h-1/5-screen' : 'h-screen'} mb-8`}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={isSmallScreen ? slide.smallImage : slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
              <h1 className={`font-bold text-white mb-2 leading-tight ${
                isSmallScreen ? 'text-lg' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
              }`}>
                {slide.title}
              </h1>
              <p className={`text-white mb-4 max-w-2xl mx-auto ${
                isSmallScreen ? 'text-xs' : 'text-sm sm:text-base md:text-lg lg:text-xl'
              }`}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full mx-1 focus:outline-none transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;