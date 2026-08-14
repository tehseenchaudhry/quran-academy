import React from "react";
import {
  FaBookOpen,
  FaUserGraduate,
  FaClock,
  FaGlobe,
  FaHeart,
  FaChartLine,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";

const reasons = [
  {
    id: 1,
    icon: <FaBookOpen />,
    title: "Qualified Quran Teachers",
    desc: "Learn from certified and experienced Quran teachers with proper Tajweed.",
  },
  {
    id: 2,
    icon: <FaUserGraduate />,
    title: "One-to-One Classes",
    desc: "Personalized online Quran classes focused on individual student progress.",
  },
  {
    id: 3,
    icon: <FaClock />,
    title: "Flexible Timings",
    desc: "Choose class timings that fit your daily schedule easily.",
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Worldwide Access",
    desc: "Learn Quran online from anywhere in the world with live sessions.",
  },
  {
    id: 5,
    icon: <FaHeart />,
    title: "Caring Environment",
    desc: "A peaceful and supportive environment where students learn comfortably.",
  },
  {
    id: 6,
    icon: <FaChartLine />,
    title: "Continuous Progress",
    desc: "Regular assessment and guidance to help students improve step by step.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 lg:py-16 bg-gradient-to-br from-[#f8f6f0] via-white to-[#eef7f2]">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Heading */}
      <div className="text-center mb-16" >


  {/* Main Heading with Curved Underline */}
  <div className="relative inline-block mt-4" data-aos="zoom-in">
    <h2 className="text-4xl md:text-5xl  font-bold text-[#0a5c3a] font-serif">
      Why <span className="text-[#c9a050] relative">
        Choose Us?
      </span>
    </h2>
  </div>

  {/* Decorative Dots Line */}
  <div className="flex items-center justify-center gap-2 mt-6" data-aos="zoom-in">
    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-[#c9a050] rounded-full"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-[#c9a050]"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-[#0a5c3a]"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-[#c9a050]"></div>
    <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-[#c9a050] rounded-full"></div>
  </div>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8" data-aos="fade-up">
    We provide high-quality Quran education with experienced teachers,
    flexible schedules, and a student-focused learning environment.
  </p>
</div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              data-aos="fade-down"
  data-aos-duration="300"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a5c3a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition duration-700"></div>

              {/* Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <span className="text-4xl sm:text-5xl text-[#0a5c3a] group-hover:text-[#c9a050] transition-colors duration-300">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a5c3a] mb-3 text-center group-hover:text-[#c9a050] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;