import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://img.freepik.com/free-vector/gradient-numerology-background_23-2150001894.jpg?ga=GA1.1.2057785461.1747309138&semt=ais_hybrid&w=740",
    heading: "Welcome to Our Platform",
    subtext: "Connect with verified experts for your spiritual needs.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/picture-clock-with-words-god-bottom_1064589-258254.jpg?ga=GA1.1.2057785461.1747309138&semt=ais_hybrid&w=740",
    heading: "Explore Various Services",
    subtext: "Book online pujas and rituals from anywhere in India.",
  },
  {
    image:
      "https://img.freepik.com/free-vector/hand-drawn-celestial-background_23-2151250023.jpg?ga=GA1.1.2057785461.1747309138&semt=ais_hybrid&w=740",
    heading: "Trusted by Thousands",
    subtext: "Experience authentic guidance and rituals with ease.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {slide.heading}
            </h2>
            <p className="text-lg md:text-2xl">{slide.subtext}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
