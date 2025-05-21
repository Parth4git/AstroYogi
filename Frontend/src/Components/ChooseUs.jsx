import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Experts", value: 200 },
  { label: "Categories", value: 80 },
  { label: "Registered Users", value: 10001 },
  { label: "Cities", value: 20 },
];

const ChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-extrabold text-cyan-600">
                <CountUp end={stat.value} duration={2} />+
              </div>
              <p className="text-lg mt-2 text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
