import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="py-10 lg:py-16 px-6 lg:px-16 bg-[#f8f6f0]">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 rounded-2xl shadow-2xl p-6 md:p-10 items-start bg-white shadow-[#c9a050]/20">
        
        {/* LEFT IMAGE */}
        <div className="lg:w-[90vh] w-full relative" data-aos="fade-right">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/ourstory-img.jpg"
              alt="Our Story"
              className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Image Accent */}
          <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 w-full h-full border-2 border-[#0a5c3a]/40 rounded-3xl"></div>
        </div>

        {/* RIGHT TEXT */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center" data-aos="fade-left">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-[#c9a050] font-semibold uppercase tracking-[3px] text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#c9a050]"></span>
            Our Story
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0a5c3a] mb-6 leading-snug">
            From Humble Beginnings to a{" "}
            <span className="text-[#c9a050]">Global Online Quran Academy</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Our journey started with a vision to make Quran learning accessible
            for everyone, everywhere. Through dedication, quality teaching, and
            modern technology, we've grown into a platform that serves students
            worldwide while staying true to the authentic methods of Quran
            education.
          </p>

          {/* CTA Button */}
          <Link to="/about">
            <button className="inline-flex items-center gap-2 self-start px-6 py-3 bg-[#0a5c3a] text-white font-semibold rounded-full hover:bg-[#c9a050] hover:text-[#0a5c3a] transition-all duration-300 group">
              Learn More
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default OurStory;