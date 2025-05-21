import React from "react";

const AboutUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Welcome to Astro Yogi
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image on left */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Astrology consultation"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Text on right */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg text-gray-600">
              Your premier directory for connecting with experienced and
              reputable astrologers from around the world. Our mission is to
              provide a trusted platform where individuals seeking astrological
              guidance can find the perfect astrologer to meet their needs.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-600">
                  Our Philosophy
                </h3>
                <p className="text-gray-600 mt-2">
                  We believe in the power of astrology to offer profound
                  insights and guidance in various aspects of life, including
                  love, career, health, and personal growth. Our goal is to
                  ensure that everyone can access quality astrological services
                  tailored to their unique needs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-600">
                  Our Commitment
                </h3>
                <p className="text-gray-600 mt-2">
                  At Anamolyogi, we are committed to maintaining a high standard
                  of quality and trust. We rigorously vet all astrologers listed
                  in our directory to ensure they meet our standards of
                  professionalism and expertise. We also prioritize user privacy
                  and data security in all our operations.
                </p>
              </div>
            </div>

            <button className="mt-6 px-8 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors shadow-md">
              Explore Our Astrologers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
