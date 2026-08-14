import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactHeroSection = () => {
  return (
    <section className="relative py-16 pt-24 px-5 md:px-20 bg-cover bg-center bg-fixed  overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#c9a050]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a050]/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center" data-aos="fade-up">
        {/* Badge */}
         <div className="inline-flex items-center text-white gap-2 px-6 py-3 bg-[#0a5c3a]   rounded-full shadow-lg mb-6">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zM301.08 145.82c.6-1.21 1.76-1.82 2.92-1.82s2.32.61 2.92 1.82l11.18 22.65 25 3.63c2.67.39 3.74 3.67 1.81 5.56l-18.09 17.63 4.27 24.89c.36 2.11-1.31 3.82-3.21 3.82-.5 0-1.02-.12-1.52-.38L304 211.87l-22.36 11.75c-.5.26-1.02.38-1.52.38-1.9 0-3.57-1.71-3.21-3.82l4.27-24.89-18.09-17.63c-1.94-1.89-.87-5.17 1.81-5.56l24.99-3.63 11.19-22.65zm-57.89-69.01c13.67 0 27.26 2.49 40.38 7.41a6.775 6.775 0 1 1-2.38 13.12c-.67 0-3.09-.21-4.13-.21-52.31 0-94.86 42.55-94.86 94.86 0 52.3 42.55 94.86 94.86 94.86 1.03 0 3.48-.21 4.13-.21 3.93 0 6.8 3.14 6.8 6.78 0 2.98-1.94 5.51-4.62 6.42-13.07 4.87-26.59 7.34-40.19 7.34C179.67 307.19 128 255.51 128 192c0-63.52 51.67-115.19 115.19-115.19zM380.8 448H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8v64z"></path>
          </svg>
          <span className="font-semibold">Start Your Quran Journey</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4">
          <span className="text-[#0a5c3a] ">Contact</span>{" "}
          <span className="text-[#c9a050] relative">
            Our Academy
          </span>
        </h1>

        {/* Description */}
        <p className=" /80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We'd love to hear from you! Whether you have questions about our courses,
          need guidance, or want to start your Quran learning journey — we're here
          to help.
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c9a050] rounded-full"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#c9a050]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a5c3a]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#c9a050]"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c9a050] rounded-full"></div>
        </div>

        {/* Quick Contact Info - Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
          <div className="bg-[#0a5c3a]/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-[#0a5c3a]/20 transition-all duration-300">
            <div className="flex items-center justify-center gap-3">
              <FaPhoneAlt className="text-[#c9a050] text-lg" />
              <span className=" /90 text-sm">+92 300 6868033</span>
            </div>
          </div>

          <div className="bg-[#0a5c3a]/10  backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-[#0a5c3a]/20 transition-all duration-300">
            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-[#c9a050] text-lg" />
              <span className=" /90 text-sm">info@alhafiz.com</span>
            </div>
          </div>

          <div className="bg-[#0a5c3a]/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-[#0a5c3a]/20 transition-all duration-300">
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-[#c9a050] text-lg" />
              <span className=" /90 text-sm">Bahawalpur, Pakistan</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHeroSection;