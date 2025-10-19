import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCallForPapers = () => {
    document.getElementById('call-for-papers')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Conference slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#091F4E]/95 via-[#091F4E]/85 to-[#A23E3A]/80"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fadeIn">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
            10th International Engineering Symposium
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-[#E56B46] mb-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            IES 2026
          </div>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            March 3–5, 2026 | Kurume Institute of Technology, Japan
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.6s' }}>
          Advancing Global Collaboration in Engineering, Technology, and Innovation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={scrollToCallForPapers}
            className="px-8 py-4 bg-[#E56B46] text-white rounded-lg font-semibold text-lg hover:bg-[#A23E3A] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            📄 Call for Papers
          </button>
          <button
            onClick={scrollToRegistration}
            className="px-8 py-4 bg-white text-[#091F4E] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            📝 Register Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
