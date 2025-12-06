function Projects() {
  const projects = [
    {
      id: 1,
      title: "Jayanagar Residency",
      location: "Jayanagar, Bengaluru",
      type: "Residential",
      status: "Completed",
      description: "Luxury 3BHK and 4BHK apartments with premium amenities including clubhouse, swimming pool, and landscaped gardens.",
      features: ["40 Units", "Clubhouse", "Parking", "24/7 Security"],
      image: "/images/projects/jayanagar.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
    },
    {
      id: 2,
      title: "Whitefield Tech Park",
      location: "Whitefield, Bengaluru",
      type: "Commercial",
      status: "Completed",
      description: "Modern office spaces with state-of-the-art infrastructure, ideal for IT companies and startups.",
      features: ["5 Floors", "Cafeteria", "Ample Parking", "Power Backup"],
      image: "/images/projects/whitefield.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      id: 3,
      title: "Indiranagar Villas",
      location: "Indiranagar, Bengaluru",
      type: "Residential",
      status: "Ongoing",
      description: "Premium independent villas with modern architecture, private gardens, and smart home features.",
      features: ["12 Villas", "Private Gardens", "Smart Homes", "Gated Community"],
      image: "/images/projects/indiranagar.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
      id: 4,
      title: "Koramangala Heights",
      location: "Koramangala, Bengaluru",
      type: "Residential",
      status: "Completed",
      description: "High-rise apartments with panoramic city views, sky lounge, and premium amenities for modern urban living.",
      features: ["80 Units", "Sky Lounge", "Gym & Spa", "Kids Play Area"],
      image: "/images/projects/koramangala.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    },
    {
      id: 5,
      title: "HSR Layout Apartments",
      location: "HSR Layout, Bengaluru",
      type: "Residential",
      status: "Ongoing",
      description: "Affordable 2BHK and 3BHK apartments designed for young professionals and families, with excellent connectivity.",
      features: ["60 Units", "Jogging Track", "Indoor Games", "Guest Parking"],
      image: "/images/projects/hsr.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },
    {
      id: 6,
      title: "Marathahalli Plaza",
      location: "Marathahalli, Bengaluru",
      type: "Commercial",
      status: "Ongoing",
      description: "Mixed-use development combining retail spaces and offices, strategically located in a high-traffic commercial hub.",
      features: ["Retail Spaces", "Office Units", "Food Court", "Multi-level Parking"],
      image: "/images/projects/marathahalli.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Projects
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Bengaluru's landscape with quality developments
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.fallbackImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-secondary text-white'
                }`}>
                  {project.status}
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white">
                  {project.type}
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    View Details
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <button className="project-button w-full py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center group">
                  <span>View Project</span>
                  <svg
                    className="project-arrow w-5 h-5 ml-2 transform transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Custom CSS for animations */}
      <style>{`
        .project-card:hover .project-arrow {
          animation: arrowPull 0.8s ease-in-out infinite;
        }
        
        @keyframes arrowPull {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          80% {
            transform: translateX(12px);
            opacity: 0;
          }
          81% {
            transform: translateX(-12px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;