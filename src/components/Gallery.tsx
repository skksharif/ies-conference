import { useState } from "react";

const images = [
  "./gallery/1.JPG",
  "./gallery/2.JPG",
  "./gallery/3.JPG",
  "./gallery/4.JPG",
  "./gallery/5.JPG",
  "./gallery/6.JPG",
  "./gallery/7.JPG",
  "./gallery/8.JPG",
  "./gallery/9.JPG",
  "./gallery/10.JPG",
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="px-4 py-8 bg-gradient-to-br from-[#091F4E]/95 via-[#091F4E]/85 to-[#A23E3A]/80 min-h-screen">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <img
            src={currentImage}
            alt="Lightbox"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
