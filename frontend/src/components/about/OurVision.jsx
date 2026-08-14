import React from "react";
import { motion } from "framer-motion";
import { FaBinoculars, FaGlobe, FaLightbulb } from "react-icons/fa";

const visionPoints = [
  { id: 1, icon: <FaBinoculars />, title: "Global Reach", description: "Connecting learners worldwide..." },
  { id: 2, icon: <FaGlobe />, title: "Inclusive Learning", description: "We welcome students of all ages..." },
  { id: 3, icon: <FaLightbulb />, title: "Inspire Knowledge", description: "Encourage deep understanding..." },
];

const OurVision = () => {
  return (
    <section className="py-10 lg:py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a5c3a] mb-4">
          Our <span className="text-[#c9a050]">Vision</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-16">
          What Drives Us Forward
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className="bg-gradient-to-br from-white to-[#0a5c3a]/20 rounded-3xl p-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} // slow, smooth spring animation
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#0a5c3a]/20 to-[#0a5c3a]/10 text-[#0a5c3a] text-4xl shadow-md mb-6 mx-auto">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 relative inline-block">
                {point.title}
                <span className="absolute left-0 -bottom-1 w-12 h-1 bg-[#0a5c3a] rounded-full"></span>
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
