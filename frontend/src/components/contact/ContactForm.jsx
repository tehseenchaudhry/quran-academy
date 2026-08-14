import React from "react";
import {
  FaUser,
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaBookOpen,
  FaComment,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section>
      <div className="container mx-auto px-6 lg:px-20 pb-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#c9a050]/10" data-aos="fade-up">
            
            {/* Heading Inside Card */}
            <div className=" mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a5c3a]">
                Send us <span className="text-[#c9a050]">Your Details</span>
              </h2>

              {/* <div className="w-24 h-1 bg-[#c9a050] rounded-full  mt-4"></div> */}

              <p className="text-gray-600 mt-4 max-w-2xl ">
                Fill in the details below and our team will contact you shortly
                to begin your Quran learning journey.
              </p>
            </div>

            <form className="space-y-5">
              
              {/* Row 1 - Name & Father Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <FaUserTie className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="text"
                    placeholder="Father's Name"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2 - Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 3 - Country & Preferred Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                  <input
                    type="time"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 4 - Course Selection */}
              <div className="relative">
                <FaBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm z-10" />
                <select
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="">Select a course</option>
                  <option value="noorani-qaida">Noorani Qaida</option>
                  <option value="quran-reading">Quran Reading</option>
                  <option value="tajweed">Tajweed Course</option>
                  <option value="hifz">Quran Memorization (Hifz)</option>
                  <option value="tafsir">Quran Tafsir</option>
                  <option value="arabic">Arabic Language</option>
                </select>
              </div>

              {/* Row 5 - Message */}
              <div className="relative">
                <FaComment className="absolute left-4 top-4 text-[#c9a050] text-sm z-10" />
                <textarea
                  rows="4"
                  placeholder="Tell us about your Quran learning goals..."
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0a5c3a] hover:bg-[#c9a050] text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-3 group"
              >
                Start Learning Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Security Note */}
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-2">
                <FaShieldAlt className="text-[#c9a050]" />
                <span>Your information is 100% secure and confidential</span>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;