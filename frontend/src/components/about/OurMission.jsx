import React from "react";
import { FaCheck, FaQuran } from "react-icons/fa";
import "aos/dist/aos.css";

const pointsLeft = [
  "Authentic Tajweed Learning",
  "Original Arabic Pronunciation",
  "Traditional Teaching Methods",
];

const pointsRight = [
  "Character Development",
  "Islamic Moral Values",
  "Spiritual Growth & Guidance",
];

const OurMission = () => {
  return (
    <section className="py-10 lg:py-16 bg-[#f8f6f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
         
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a5c3a]">
            Our <span className="text-[#c9a050]">Mission</span>
          </h1>
          <div className="w-24 h-1 bg-[#c9a050] rounded-full mx-auto mt-4"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            A vision to spread Quranic knowledge with authenticity, wisdom, and spiritual depth.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Visual Block */}
          <div className="relative" data-aos="fade-right">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c9a050]/20 rounded-full blur-3xl"></div>

            <div className="relative bg-white/80 backdrop-blur-sm border border-[#c9a050]/30 rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 rounded-full bg-[#0a5c3a] flex items-center justify-center text-white text-4xl shadow-lg mb-6">
                <FaQuran />
              </div>

              <h2 className="text-3xl font-bold text-[#0a5c3a] mb-4">
                Spreading the Light of Quran
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Our mission is to make Quran learning meaningful, accessible,
                and spiritually enriching for students across the world.
                We combine traditional wisdom with modern online teaching
                to nurture both knowledge and character.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-12" data-aos="fade-left">

            {/* List Block */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border-l-4 border-[#c9a050]" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-[#0a5c3a] mb-6">
                Core Learning Focus
              </h3>
              <ul className="space-y-4">
                {pointsLeft.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a5c3a] text-white">
                      <FaCheck size={12} />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* List Block */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border-l-4 border-[#c9a050]" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold text-[#0a5c3a] mb-6">
                Spiritual & Moral Growth
              </h3>
              <ul className="space-y-4">
                {pointsRight.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a5c3a] text-white">
                      <FaCheck size={12} />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;