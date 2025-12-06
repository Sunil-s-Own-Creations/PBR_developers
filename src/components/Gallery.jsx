import { useState, useEffect  } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      category: "Exterior",
      title: "Modern Residential Complex",
      project: "Jayanagar Residency"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      category: "Interior",
      title: "Luxury Living Room",
      project: "Koramangala Heights"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      category: "Exterior",
      title: "Villa Architecture",
      project: "Indiranagar Villas"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      category: "Interior",
      title: "Modern Kitchen Design",
      project: "HSR Layout Apartments"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      category: "Exterior",
      title: "High-Rise Building",
      project: "Koramangala Heights"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      category: "Interior",
      title: "Elegant Bedroom",
      project: "Jayanagar Residency"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      category: "Commercial",
      title: "Office Building",
      project: "Whitefield Tech Park"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      category: "Interior",
      title: "Spacious Living Area",
      project: "HSR Layout Apartments"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      category: "Exterior",
      title: "Contemporary Building",
      project: "Marathahalli Plaza"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      category: "Amenities",
      title: "Swimming Pool",
      project: "Jayanagar Residency"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      category: "Interior",
      title: "Modern Bathroom",
      project: "Indiranagar Villas"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      category: "Commercial",
      title: "Retail Space",
      project: "Marathahalli Plaza"
    }
  ];

  const categories = ['All', 'Exterior', 'Interior', 'Commercial', 'Amenities'];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    // document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

    useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
  }, [selectedImage]);

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects and ongoing developments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onClick={() => openLightbox(image)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-semibold mb-1">{image.title}</p>
                  <p className="text-xs text-gray-300">{image.project}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>

              {/* View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors duration-300 z-50"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary transition-colors duration-300 z-50 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary transition-colors duration-300 z-50 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-xl font-bold mb-1">{selectedImage.title}</h3>
                  <p className="text-gray-300 text-sm">{selectedImage.project}</p>
                </div>
                <span className="px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 md:hidden">
            <button
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Gallery;