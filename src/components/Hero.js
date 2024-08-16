import React, { useState, useEffect } from 'react';
import Image1 from '../Images/PC.png';
import Image2 from '../Images/PC2.png';
import Image3 from '../Images/PC3.png';
import Login from '../Screens/Login';

const slides = [
  {
    id: 1,
    title: "THE SOLUTION TO YOUR ELECTRONIC NEEDS",
    subtitle: "Your One-Stop Shop for Cutting-Edge Computers and Hardware! Discover unbeatable prices on the latest tech to power your digital world!",
    image: Image1,
  },
  {
    id: 2,
    title: "POWERFUL GAMING PCs",
    subtitle: "Experience next-level gaming with our custom-built high-performance rigs.",
    image: Image2,
  },
  {
    id: 3,
    title: "PROFESSIONAL WORKSTATIONS",
    subtitle: "Boost your productivity with our powerful workstations designed for professionals.",
    image: Image3,
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen mb-8 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <Login name='Shop Now' className="text-lg px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300" />
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-2 focus:outline-none transition-colors duration-300 ${
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