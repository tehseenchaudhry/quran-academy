import React from "react";
import { FaBookOpen, FaUsers, FaAward } from "react-icons/fa";

const AboutStrongConnection = () => {
  return (
    <section className="relative bg-[#f8f6f0] overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div data-aos="fade-up">
          {/* Badge */}
         <span className="inline-block px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold uppercase tracking-[3px] text-sm mb-5">
              About Our Academy
            </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl  font-serif font-bold text-[#0a5c3a] leading-tight">
            Building a Strong {" "}
            <span className="text-[#c9a050]">Connection with the Quran</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            Our mission is to deliver structured, authentic, and accessible
            Quran education worldwide. We focus on quality teaching, spiritual
            growth, and long-term learning outcomes for every student.
          </p>

          {/* Feature Points */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-gray-600">
              <FaBookOpen className="text-[#0a5c3a]  text-xl" />
              <span>Certified Tutors</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FaUsers className="text-[#0a5c3a]  text-xl" />
              <span>Global Students</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FaAward className="text-[#0a5c3a]  text-xl" />
              <span>Trusted Platform</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
       <div className="relative" data-aos="fade-left">
  {/* Image Container */}
  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
    <img
      src="/about-strong-connection.jpg"
      alt="About Quran Academy"
      className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a5c3a]/60 via-[#0a5c3a]/20 to-transparent"></div>
    
    {/* Floating Badge - Top Right */}
    <div className="absolute top-4 right-4 bg-[#c9a050]/90 backdrop-blur-sm text-[#0a5c3a] px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#0a5c3a] animate-pulse"></span>
      12+ Years Experience
    </div>
    

    
  </div>

  {/* Image Accent Border */}
  <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#0a5c3a]/40  rounded-3xl"></div>
  
</div>
      </div>
    </section>
  );
};

export default AboutStrongConnection;