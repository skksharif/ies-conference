import { ChevronDown, FileText, Pencil } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCallForPapers = () => {
    document
      .getElementById("call-for-papers")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRegistration = () => {
    document
      .getElementById("registration")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
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

      {/* Partner Logos */}
      <div className="relative z-20 mt-16 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-md w-[90%] max-w-2xl overflow-hidden">
        <div className="animate-scroll flex justify-center items-center gap-10">
          {[
            "/k.png",
            "/vjoc.png",
            "/vtu.png",
            "/alva.png",
            "/logo.png",
            "/vishnu.png",
            "/k.png",
            "/vjoc.png",
            "/vtu.png",
            "/alva.png",
             "/logo.png",
             "/vishnu.png"
          ].map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt="Partner logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-5 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight animate-slideUp">
          10th International Engineering Symposium
        </h1>

        <div
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#E56B46] mb-4 animate-slideUp"
          style={{ animationDelay: "0.2s" }}
        >
          IES 2026
        </div>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 animate-slideUp"
          style={{ animationDelay: "0.4s" }}
        >
          March 3–5, 2026 | Kurume Institute of Technology, Japan
        </p>

        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-slideUp"
          style={{ animationDelay: "0.6s" }}
        >
          Advancing Global Collaboration in Engineering, Technology, and
          Innovation
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={scrollToCallForPapers}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#E56B46] text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-[#A23E3A] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Call for Papers
          </button>
          <button
            onClick={scrollToRegistration}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#091F4E] rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Pencil className="w-5 h-5" />
            Register Now
          </button>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
