import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  PiSuitcaseSimpleBold,
  PiHeartFill,
  PiUsersFourBold,
} from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";

const astrologers = [
  {
    id: 1,
    name: "Vaidehi T",
    image:
      "https://sohinisastri.com/wp-content/uploads/2025/01/DrSohiniSastri.webp",
    rating: 4.9,
    tags: [
      { label: "Family", icon: <MdFamilyRestroom />, color: "text-green-500" },
      { label: "Life", icon: <PiUsersFourBold />, color: "text-cyan-500" },
    ],
    experience: 3,
  },
  {
    id: 2,
    name: "Ramprakash Pandy",
    image:
      "data:image/jpeg;base64,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",
    rating: 4.9,
    mostChoice: true,
    tags: [
      {
        label: "Career",
        icon: <PiSuitcaseSimpleBold />,
        color: "text-purple-500",
      },
      { label: "Love", icon: <PiHeartFill />, color: "text-red-500" },
    ],
    experience: 10,
  },
  {
    id: 3,
    name: "Usha Siingh",
    image:
      "data:image/jpeg;base64,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",
    rating: 4.9,
    tags: [
      { label: "Marriage", icon: <PiHeartFill />, color: "text-pink-500" },
      { label: "Family", icon: <MdFamilyRestroom />, color: "text-green-500" },
    ],
    experience: 20,
  },
  {
    id: 4,
    name: "Astro Satyam",
    image:
      "https://ind.5bestincity.com/profileimages/india/sriguru-astrologer-raghavendra-joshi-astrologers-bangalore-karnataka/12853-a2fa1-1.jpg",
    rating: 4.9,
    tags: [
      {
        label: "Career",
        icon: <PiSuitcaseSimpleBold />,
        color: "text-purple-500",
      },
      { label: "Love", icon: <PiHeartFill />, color: "text-red-500" },
    ],
    experience: 9,
  },
  {
    id: 5,
    name: "Astro Vishwajeet",
    image:
      "data:image/jpeg;base64,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",
    rating: 4.9,
    tags: [
      {
        label: "Career",
        icon: <PiSuitcaseSimpleBold />,
        color: "text-purple-500",
      },
      { label: "Love", icon: <PiHeartFill />, color: "text-red-500" },
    ],
    experience: 10,
  },
];

const TopAstrologersSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleAstrologers = astrologers.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < astrologers.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-18 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2 text-black tracking-wide">
        TOP ASTROLOGERS
      </h2>
      <p className="text-gray-600 mb-10">
        GuruCool's Top Astrologers Solve Your Love, Life, Career, Marriage &
        Stress Issues
      </p>

      <div className="relative max-w-6xl mx-auto">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-purple-700 disabled:opacity-30"
        >
          <FaChevronLeft size={28} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {visibleAstrologers.map((astro, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={astro.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden relative transform transition-all duration-300 ${
                  isCenter ? "scale-105 h-[480px]" : "scale-95 h-[420px]"
                }`}
              >
                <div className="relative h-full">
                  <img
                    src={astro.image}
                    alt={astro.name}
                    className="w-full h-full object-cover"
                  />
                  {astro.mostChoice && (
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-md font-semibold shadow">
                      Most Choice
                    </div>
                  )}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-left">
                    <div className="flex items-center gap-1 mb-4 bg-amber-800 w-16 text-center rounded-full text-yellow-400 text-lg font-semibold">
                      <FaStar className="ml-2" /> {astro.rating}
                    </div>
                    <h3 className="text-white font-semibold text-3xl mb-4">
                      {astro.name}
                    </h3>
                    <div className="flex gap-2 flex-wrap mt-1 mb-4">
                      {astro.tags.map((tag, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-1 text-lg font-medium ${tag.color}`}
                        >
                          {tag.icon}
                          <span className="text-white text-lg font-semibold">
                            {tag.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-white mt-1">
                      Exp.:{" "}
                      <span className="font-medium text-xl">
                        {astro.experience} Yrs
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + 3 >= astrologers.length}
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-purple-700 disabled:opacity-30"
        >
          <FaChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default TopAstrologersSection;
