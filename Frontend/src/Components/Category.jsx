import React, { useRef } from "react";
import {
  FaHeart,
  FaStar,
  FaSearch,
  FaUsers,
  FaBriefcase,
  FaPrayingHands,
} from "react-icons/fa";

const CategoryMarquee = () => {
  const categories = [
    { name: "Love", icon: <FaHeart className="text-3xl" /> },
    { name: "Birth Chart", icon: <FaStar className="text-3xl" /> },
    { name: "Horoscope", icon: <FaSearch className="text-3xl" /> },
    { name: "Compatibility", icon: <FaUsers className="text-3xl" /> },
    { name: "Career", icon: <FaBriefcase className="text-3xl" /> },
    { name: "Spiritual", icon: <FaPrayingHands className="text-3xl" /> },
    { name: "Tarot", icon: <FaStar className="text-3xl" /> },
    { name: "Numerology", icon: <FaSearch className="text-3xl" /> },
    { name: "Astrology", icon: <FaStar className="text-3xl" /> },
    { name: "Vastu", icon: <FaSearch className="text-3xl" /> },
    { name: "Palmistry", icon: <FaStar className="text-3xl" /> },
    { name: "Feng Shui", icon: <FaSearch className="text-3xl" /> },
    { name: "Crystal Healing", icon: <FaStar className="text-3xl" /> },
    { name: "Meditation", icon: <FaSearch className="text-3xl" /> },
    { name: "Reiki", icon: <FaStar className="text-3xl" /> },
  ];

  const marqueeRef = useRef(null);

  const scrollLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Explore Our Services
      </h2>

      <div className="flex items-center justify-center">
        {/* Left button outside the main section */}
        <button
          onClick={scrollLeft}
          className="mr-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors"
          aria-label="Scroll left"
        >
          &lt;
        </button>

        {/* Marquee container */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={marqueeRef}
            className="overflow-x-auto whitespace-nowrap py-4 space-x-8 px-4 scrollbar-none"
          >
            {categories.map((category, index) => (
              <div key={index} className="inline-flex flex-col items-center">
                {/* Icon-only circular card */}
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-cyan-300 shadow-lg hover:bg-blue-600 transition-all cursor-pointer">
                  {category.icon}
                </div>
                {/* Category name below the card */}
                <span className="mt-3 text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right button outside the main section */}
        <button
          onClick={scrollRight}
          className="ml-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors"
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default CategoryMarquee;
