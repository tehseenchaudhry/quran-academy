import React from "react";
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";

const Requirements = () => {
  return (
    <section className="py-10 lg:py-16 bg-[#0a5c3a]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Heading */}
        <div className="lg:w-2/3 text-center mx-auto" data-aos="fade-down" data-aos-delay="100">
          
          {/* ✅ New Badge Style - Different Icon & Design */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="hidden lg:flex w-10 h-0.5 bg-gradient-to-r from-transparent to-[#0a5c3a] rounded-full"></div>
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#0a5c3a]/80 text-white font-semibold text-sm uppercase tracking-[3px] border-2 border-[#c9a050] shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 6V2M12 2L8 6M12 2L16 6" />
                <path d="M8 22L12 18L16 22" />
                <path d="M12 18V14" />
                <path d="M4 12H2" />
                <path d="M22 12H20" />
                <path d="M6 6L4 4" />
                <path d="M20 20L18 18" />
                <path d="M6 18L4 20" />
                <path d="M20 4L18 6" />
              </svg>
              Position Requirements
            </span>
            <div className="hidden lg:flex w-10 h-0.5 bg-gradient-to-l from-transparent to-[#0a5c3a] rounded-full"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#0a5c3a] mb-6">
            Our <span className="text-[#c9a050]">Requirements</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-6" data-aos="fade-up" data-aos-delay="200">
            Our instructors are highly qualified, experienced, and passionate about teaching Quran. 
            Each teacher ensures a personalized and effective learning experience for every student.
          </p>
        </div>

        {/* First Div: Image Left, Text Right */}
        <div 
          className="group relative flex flex-col lg:flex-row items-center gap-10 shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out  hover:-translate-y-2 p-6 rounded-2xl mt-16 bg-white overflow-hidden"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          {/* Decorative Blob */}
          <div className="absolute -top-24 -right-24 w-64 h-64 group-hover:bg-[#c9a050]/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 group-hover:bg-[#0a5c3a]/20 rounded-full blur-2xl"></div>

          {/* Image */}
          <div className="lg:w-1/2 h-[400px]  overflow-hidden rounded-2xl" data-aos="zoom-in" data-aos-delay="400">
            <img
              src="/tafseer-instructor.jpg"
              alt="Expert teaching"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a5c3a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left relative z-10" data-aos="fade-left" data-aos-delay="500">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c9a050]/10 text-[#c9a050] text-xs font-semibold rounded-full mb-4">
              <FaStar className="text-[#c9a050]" />
              Expert Position
            </span>

            <h2 className="text-4xl font-bold text-[#0a5c3a] mb-4 transition-colors duration-500 ">
              <span className="text-[#c9a050]">Tafseer</span> Instructor
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Guide students in understanding the meanings and interpretations of the Quran. 
              Help students learn Arabic, translation, and context for better comprehension. 
              Encourage reflective learning, answer questions patiently, and provide examples 
              from daily life to make the teachings clear, practical, and inspiring. Support 
              students in memorizing, reciting, and reflecting on the verses with correct 
              Tajweed and proper understanding.
            </p>

            {/* Requirements Tags */}
            <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
              <span className="px-3 py-1.5 bg-[#0a5c3a]/5 rounded-full text-xs text-[#0a5c3a] font-medium border border-[#c9a050]/20">
                ✅ Tajweed Expert
              </span>
              <span className="px-3 py-1.5 bg-[#0a5c3a]/5 rounded-full text-xs text-[#0a5c3a] font-medium border border-[#c9a050]/20">
                ✅ Arabic Knowledge
              </span>
              <span className="px-3 py-1.5 bg-[#0a5c3a]/5 rounded-full text-xs text-[#0a5c3a] font-medium border border-[#c9a050]/20">
                ✅ Teaching Experience
              </span>
            </div>

          </div>
        </div>

        {/* Second Div: Text Left, Image Right */}
        <div 
          className="group relative flex flex-col lg:flex-row items-center gap-10  shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out  hover:-translate-y-2 p-6 rounded-2xl  mt-14 bg-white overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="300"
        >

          {/* Decorative Blob */}
          <div className="absolute -top-24 -left-24 w-64 h-64 group-hover:bg-[#0a5c3a]/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 group-hover:bg-[#c9a050]/20 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 relative z-10" data-aos="fade-right" data-aos-delay="400">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c9a050]/10 text-[#c9a050] text-xs font-semibold rounded-full mb-4">
              <FaStar className="text-[#c9a050]" />
              Teaching Position
            </span>

            <h2 className="text-4xl font-bold text-[#0a5c3a] mb-4 transition-colors duration-500 ">
              <span className="text-[#c9a050]">Quran</span> Teacher
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Present yourself with warmth and professionalism. Begin with the greeting 
              "Assalamu Alaikum," mention your qualifications, and showcase your fluency 
              in Qur'an recitation. Keep the tone humble, and use a simple, distraction-free 
              background.
            </p>

            {/* Requirements Tags */}
            <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
              <span className="px-3 py-1.5 bg-[#0a5c3a]/5 rounded-full text-xs text-[#0a5c3a] font-medium border border-[#c9a050]/20">
                ✅ Quran Recitation
              </span>
              <span className="px-3 py-1.5 bg-[#0a5c3a]/5 rounded-full text-xs text-[#0a5c3a] font-medium border border-[#c9a050]/20">
                ✅ Tajweed Rules
              </span>
              <span className="px-3 py-1.5 bg-[#0a5c3a]/5 rounded-full text-xs text-[#0a5c3a] font-medium border border-[#c9a050]/20">
                ✅ Professional Demeanor
              </span>
            </div>

          </div>

          {/* Image */}
          <div className="lg:w-1/2 h-[400px]  overflow-hidden rounded-2xl order-1 lg:order-2" data-aos="zoom-in" data-aos-delay="500">
            <img
              src="/quran-teacher.jpg"
              alt="Instructor teaching"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a5c3a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Requirements;