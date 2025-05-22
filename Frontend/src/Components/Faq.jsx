import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are the consultations at Anamolyogi personalized?",
      answer:
        "Yes, all consultations at Anamolyogi are completely personalized. Our astrologers analyze your unique birth chart and specific concerns to provide tailored guidance that addresses your individual needs and life circumstances.",
    },
    {
      question:
        "How do I get started with astrology and vastu consultations for social recognition?",
      answer:
        "Simply create an account on Anamolyogi, browse our verified astrologers and vastu experts, and book a consultation that fits your schedule. During the session, discuss your social recognition goals and receive customized advice.",
    },
    {
      question: "Can vastu changes in my home improve my social image?",
      answer:
        "Absolutely. Vastu Shastra principles can enhance positive energy flow in your living space, which may positively influence your confidence, relationships, and social interactions - all contributing to an improved social image.",
    },
    {
      question:
        "How does Anamolyogi connect me with astrologers and vastu experts?",
      answer:
        "Anamolyogi maintains a carefully vetted directory of professional astrologers and vastu consultants. You can view their profiles, specialties, ratings, and reviews before selecting the expert that best matches your requirements.",
    },
    {
      question: "Can I improve my career recognition with astrology?",
      answer:
        "Yes, astrology can provide insights into your career potential, favorable timings for important moves, and planetary influences affecting your professional growth. Many clients report improved career recognition after implementing astrological guidance.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-cyan-600 text-xl" />
                ) : (
                  <FiChevronDown className="text-cyan-600 text-xl" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors shadow-md">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
