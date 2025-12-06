function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.7)), url('/images/hero/hero-bg.jpg')`,
        backgroundColor: '#1e3a8a',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          PBR Developers
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-3xl font-light mb-4">
          Building Bengaluru's Future
        </p>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Trusted real estate developers delivering quality residential and commercial projects with transparency and excellence.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-secondary hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            Explore Projects
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 w-full sm:w-auto"
          >
            Contact Us
          </button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;