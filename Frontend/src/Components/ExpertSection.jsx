import React from "react";
import {
  FaCity,
  FaGraduationCap,
  FaLandmark,
  FaLanguage,
  FaLocationArrow,
  FaStar,
  FaTimes,
} from "react-icons/fa";

const astrologers = [
  {
    id: 1,
    name: "Astro Sun",
    city: "Delhi",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    experience: 11,
    languages: ["Hindi", "English"],
    services: ["Vedic", "Lal Kitab"],
    rating: 5.0,
    price: 70,
    originalPrice: 100,
  },
  {
    id: 2,
    name: "Astro Vishwajeet",
    city: "Mumbai",
    photo: "https://randomuser.me/api/portraits/men/66.jpg",
    experience: 10,
    languages: ["Hindi", "English"],
    services: ["Vedic", "Vastu"],
    rating: 5.0,
    price: 60,
  },
  {
    id: 3,
    name: "Astro Satyam",
    city: "Varanasi",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    experience: 9,
    languages: ["Hindi", "English"],
    services: ["Vedic", "Gemology"],
    rating: 5.0,
    price: 36,
  },
  {
    id: 4,
    name: "Tarot Khyati",
    city: "Jaipur",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    experience: 5,
    languages: ["Hindi", "English"],
    services: ["Numerology", "Tarot"],
    rating: 5.0,
    price: 95,
  },
  {
    id: 5,
    name: "Tarot Parisha",
    city: "Pune",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    experience: 7,
    languages: ["Hindi", "English"],
    services: ["Tarot", "Law of Attraction"],
    rating: 5.0,
    price: 55,
  },
  {
    id: 6,
    name: "Tarot Ashhvika",
    city: "Lucknow",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    experience: 4,
    languages: ["Hindi", "English"],
    services: ["Numerology", "Tarot"],
    rating: 5.0,
    price: 24,
  },
];

const ExpertCardSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Top Astrologers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {astrologers.map((astro) => (
            <div
              key={astro.id}
              className="flex items-start gap-4 border border-gray-200 rounded-xl shadow-sm p-4 bg-white hover:shadow-md transition"
            >
              {/* Left: Image & Rating */}
              <div className="flex flex-col items-center min-w-[70px]">
                <div className="w-20 h-20 rounded-full border-2 border-cyan-300 p-1">
                  <img
                    src={astro.photo}
                    alt={astro.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="mt-2 bg-cyan-500 text-white text-xs font-semibold px-2 py-1 rounded inline-flex items-center gap-1">
                  {astro.rating} <FaStar />
                </span>
              </div>

              {/* Center: Info */}
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {astro.name}
                </h3>
                <p className="text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaGraduationCap className="text-cyan-500 text-lg" />
                    {astro.experience} years
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaLanguage className="text-cyan-500 text-lg" />
                    {astro.languages.join(", ")}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaCity className="text-cyan-500 text-lg" />
                    {astro.city}
                  </span>
                </p>
                <div className="text-sm text-cyan-800 font-medium flex flex-wrap gap-1 mt-1">
                  {astro.services.map((service, i) => (
                    <span key={i}>{service}</span>
                  ))}
                </div>
              </div>

              {/* Right: Price & Call */}
              <div className="flex flex-col items-end justify-between text-right min-w-[85px]">
                {/* <div className="text-md font-bold text-gray-800 mt-6">
                  ₹{astro.price}/min{" "}
                  {astro.originalPrice && (
                    <span className="line-through text-gray-400 text-md ml-1">
                      ₹{astro.originalPrice}
                    </span>
                  )}
                </div> */}
                <button className="mt-8 bg-green-500 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-green-600">
                  Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertCardSection;
