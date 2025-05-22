import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Top Testimonials from Our Users
          </h2>
          <p className="text-xl text-gray-600">
            24x7 customer support. Happy to help.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-100 text-blue-600 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mr-4">
                A
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Aditi Poddar</h3>
                <p className="text-gray-500 text-sm">Florida, USA</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "I recently had a session. I booked the session through the
              InstaAstro app, and I can not even put into words how relieved I
              felt afterwards. Thank you for providing these amazing and genuine
              services."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-100 text-blue-600 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mr-4">
                K
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Kavya</h3>
                <p className="text-gray-500 text-sm">New Delhi, India</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "InstaAstro has helped me a lot to finally find answers to all the
              unresolved queries I have. These guys are the gems of astrology. I
              owe a huge thanks to the professional astrologer who has made
              things easier for me."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-100 text-blue-600 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mr-4">
                K
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Kiriti Singh</h3>
                <p className="text-gray-500 text-sm">Toronto, Canada</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "I recently bought a rudraksha from InstaAstro's site. The product
              is really genuine and changed my life for the good. InstaAstro
              sells genuine gemstones, which are really powerful. I would 10/10
              recommend it to my friends and family."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
