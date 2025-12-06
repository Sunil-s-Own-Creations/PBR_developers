function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About PBR Developers
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building trust, delivering quality, shaping Bengaluru's skyline
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/about/company.jpg"
                alt="PBR Developers Office"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80";
                }}
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary opacity-20 rounded-lg -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Who We Are</h3>

            <p className="text-gray-600 leading-relaxed">
              PBR Developers is a trusted name in Bengaluru's real estate
              industry, committed to delivering high-quality residential and
              commercial projects. With years of experience and a customer-first
              approach, we've built a reputation for transparency, timely
              delivery, and exceptional craftsmanship.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our projects blend modern architecture with practical design,
              ensuring that every space we create becomes a cherished home or a
              productive workplace for our clients.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <h4 className="font-semibold text-gray-800">10+ Years</h4>
                </div>
                <p className="text-sm text-gray-600 pl-5">
                  Industry Experience
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <h4 className="font-semibold text-gray-800">50+ Projects</h4>
                </div>
                <p className="text-sm text-gray-600 pl-5">
                  Successfully Delivered
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <h4 className="font-semibold text-gray-800">
                    1000+ Families
                  </h4>
                </div>
                <p className="text-sm text-gray-600 pl-5">Happy Homeowners</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <h4 className="font-semibold text-gray-800">100% Quality</h4>
                </div>
                <p className="text-sm text-gray-600 pl-5">
                  Guaranteed Standards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto group">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-10 group-hover:opacity-50 hover:!opacity-100 cursor-pointer">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-90 hover:!scale-110">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To create exceptional living and working spaces that enhance the
              quality of life for our clients while maintaining the highest
              standards of quality and integrity.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-10 group-hover:opacity-50 hover:!opacity-100 cursor-pointer">
            <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-90 hover:!scale-110">
              <svg
                className="w-8 h-8 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be Bengaluru's most trusted real estate developer, recognized
              for innovation, sustainability, and creating landmarks that stand
              the test of time.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-10 group-hover:opacity-50 hover:!opacity-100 cursor-pointer">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-90 hover:!scale-110">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Transparency in dealings, commitment to quality, customer
              satisfaction, timely delivery, and ethical business practices form
              the foundation of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
