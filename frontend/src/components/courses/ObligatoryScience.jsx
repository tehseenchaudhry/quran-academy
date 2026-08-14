import React from "react";
import { Link } from "react-router-dom";

const ObligatoryScience = () => {
  return (
    <section className="min-h-screen py-24 relative overflow-hidden bg-[#011C16]">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-40 w-96 h-96 bg-[#0E7C5A]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-40 w-[30rem] h-[30rem] bg-[#B18E56]/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-[#B18E56]/40 bg-[#0E7C5A]/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-[#B18E56] rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold text-[#B18E56] uppercase tracking-wider">
              Divine Knowledge Program
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#B18E56]">
            Science in the Light of the Quran
          </h1>

          <p className="text-xl text-[#CDE9D7] font-light mb-6 max-w-3xl mx-auto leading-relaxed">
            Bridging Divine Revelation with Modern Discovery
          </p>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore how Quranic guidance inspires scientific curiosity — merging divine revelation with
            human intellect to understand the universe, nature, and life itself. This program connects
            spiritual knowledge with scientific research, helping you see science not as contradiction,
            but as confirmation of Allah's signs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {/* Card 1 */}
          <div className="group bg-[#052921] border border-[#0E7C5A]/40 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(14,124,90,0.3)] transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold text-[#B18E56] mb-3">Earth & Creation</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover how the Quran describes mountains, seas, and balance on Earth — linking divine
              words with geological realities.
            </p>
            <div className="w-0 h-1 mt-6 bg-[#0E7C5A] group-hover:w-full transition-all duration-500 rounded-full"></div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#052921] border border-[#0E7C5A]/40 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(14,124,90,0.3)] transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-4">🌙</div>
            <h3 className="text-2xl font-semibold text-[#B18E56] mb-3">Astronomy & Cosmos</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Study the Quranic mentions of stars, orbits, and cosmic expansion that align with modern
              astronomy.
            </p>
            <div className="w-0 h-1 mt-6 bg-[#0E7C5A] group-hover:w-full transition-all duration-500 rounded-full"></div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#052921] border border-[#0E7C5A]/40 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(14,124,90,0.3)] transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-4">💧</div>
            <h3 className="text-2xl font-semibold text-[#B18E56] mb-3">Water & Life</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              'And We made from water every living thing' — explore how life scientifically confirms
              this divine truth.
            </p>
            <div className="w-0 h-1 mt-6 bg-[#0E7C5A] group-hover:w-full transition-all duration-500 rounded-full"></div>
          </div>

          {/* Card 4 */}
          <div className="group bg-[#052921] border border-[#0E7C5A]/40 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(14,124,90,0.3)] transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-2xl font-semibold text-[#B18E56] mb-3">Human Creation & Genetics</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Understand the Quranic stages of human creation through modern embryology and genetic
              studies.
            </p>
            <div className="w-0 h-1 mt-6 bg-[#0E7C5A] group-hover:w-full transition-all duration-500 rounded-full"></div>
          </div>
        </div>

        {/* Featured Courses Section */}
        <div className="text-center max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B18E56] mb-10">
            Featured Courses in Quranic Science
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
            Unlock the depth of divine wisdom through science — where revelation inspires exploration,
            and knowledge strengthens faith. Each course is carefully designed for thinkers, seekers,
            and believers who wish to merge faith with factual understanding.
          </p>

          <div className="space-y-14 text-left">
            {/* Course 1 */}
            <div className="border-l-4 border-[#B18E56] pl-6 hover:pl-8 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#B18E56] mb-2">
                1️ Quranic Cosmology & Modern Physics
              </h3>
              <h4 className="text-lg text-[#CDE9D7] italic mb-3">
                Understanding the Universe Through Revelation
              </h4>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                Dive deep into the Quranic verses that describe the cosmos — from the Big Bang to the
                expansion of the universe. Learn how revelation predates discovery, aligning divine
                guidance with astrophysical laws.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <span className="bg-[#0E7C5A]/10 px-4 py-1 rounded-full border border-[#0E7C5A]/40">
                  Duration: 8 Weeks
                </span>
                <span className="bg-[#B18E56]/10 px-4 py-1 rounded-full border border-[#B18E56]/40">
                  Level: Intermediate – Advanced
                </span>
              </div>
            </div>

            {/* Course 2 */}
            <div className="border-l-4 border-[#B18E56] pl-6 hover:pl-8 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#B18E56] mb-2">
                2️ The Science of Human Creation
              </h3>
              <h4 className="text-lg text-[#CDE9D7] italic mb-3">
                Embryology, Genetics & the Quranic Process
              </h4>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                Uncover the divine precision in the stages of human creation mentioned in the Quran.
                This course bridges Quranic descriptions with modern embryology and molecular genetics
                for a holistic understanding of life.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <span className="bg-[#0E7C5A]/10 px-4 py-1 rounded-full border border-[#0E7C5A]/40">
                  Duration: 6 Weeks
                </span>
                <span className="bg-[#B18E56]/10 px-4 py-1 rounded-full border border-[#B18E56]/40">
                  Level: Beginner – Intermediate
                </span>
              </div>
            </div>

            {/* Course 3 */}
            <div className="border-l-4 border-[#B18E56] pl-6 hover:pl-8 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#B18E56] mb-2">
                3️ Environmental Harmony in Islam
              </h3>
              <h4 className="text-lg text-[#CDE9D7] italic mb-3">
                Divine Balance Between Nature & Humanity
              </h4>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                Explore the Quran's ecological wisdom — from sustainable living to the preservation of
                Earth's balance. Learn how environmental science aligns with the Islamic responsibility
                of stewardship (Khilafah).
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <span className="bg-[#0E7C5A]/10 px-4 py-1 rounded-full border border-[#0E7C5A]/40">
                  Duration: 5 Weeks
                </span>
                <span className="bg-[#B18E56]/10 px-4 py-1 rounded-full border border-[#B18E56]/40">
                  Level: All Levels
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <Link to="/contact">
            <button className="bg-[#0E7C5A] cursor-pointer text-white font-semibold py-4 px-12 rounded-full shadow-md hover:shadow-[#B18E56]/30 transition-all duration-300 hover:scale-105">
              Enroll Now & Begin Your Journey
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ObligatoryScience;