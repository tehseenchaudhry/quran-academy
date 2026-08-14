import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const QuranJourney = () => {
  return (
    <section className="py-10 lg:py-16 bg-gradient-to-b from-white via-[#f8f6f0] to-[#eef7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT COLUMN */}
          <div data-aos="fade-right" data-aos-duration="1000">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif  font-bold leading-tight text-[#0a5c3a]">
              <span className="text-[#c9a050]">Blossoming</span> in the Garden
              of Islamic{" "}
              <span className="text-[#c9a050]">Knowledge</span>
            </h2>

            {/* Gold Line */}
            <div className="w-28 h-1 bg-[#c9a050] rounded-full mt-5 mb-8"></div>

            {/* Images */}
            <div className="relative flex gap-6 items-center">

              {/* Image 1 */}
              <img
                src="/quran-img2.jpg"
                alt="Quran Learning"
                className="w-1/2 h-64 md:h-80 object-cover rounded-2xl border-4 border-[#c9a050] shadow-2xl hover:scale-105 transition-all duration-500"
                data-aos="zoom-in"
                data-aos-delay="200"
              />

              {/* Image 2 */}
              <img
                src="/quran-img3.jpg"
                alt="Islamic Learning"
                className="w-[45%] h-56 md:h-72 object-cover rounded-3xl border-4 border-[#0a5c3a] shadow-2xl -ml-10 mt-20 hover:scale-105 transition-all duration-500"
                data-aos="zoom-in"
                data-aos-delay="400"
              />

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >

            {/* Arabic + Image */}
            <div className="flex flex-col sm:flex-row items-center gap-6">

              <h4
                className="text-2xl font-semibold text-[#c9a050] text-center lg:mt-36 sm:text-left"
                data-aos="fade-up"
              >
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
              </h4>

              <img
                src="/quran-img1.jpg"
                alt="Holy Quran"
                className="w-52 h-56 object-cover rounded-2xl border-4 border-[#c9a050] shadow-2xl hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              />

            </div>

            {/* Paragraphs */}
            <div
              className="text-gray-600 space-y-5 text-base md:text-lg leading-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p>
                Begin your journey of Quran learning with experienced teachers
                dedicated to helping students of all ages develop confidence in
                recitation, Tajweed, and Islamic understanding.
              </p>

              <p>
                Our one-to-one online classes provide flexible schedules,
                personalized lessons, and a supportive environment that allows
                every student to learn comfortably from anywhere in the world.
              </p>
            </div>

            {/* Button */}
            <Link to="/services">
              <button
                className="cursor-pointer inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#0a5c3a] text-white font-semibold shadow-lg hover:bg-[#c9a050] hover:text-[#0a5c3a] transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Learn More
                <FaArrowRight />
              </button>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default QuranJourney;