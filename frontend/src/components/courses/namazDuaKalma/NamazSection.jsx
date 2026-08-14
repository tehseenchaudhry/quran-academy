import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const NamazSection = () => {
  return (
    <section className="py-16 px-6 lg:x-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center">
        <div data-aos="fade-right">
          <img
            alt="Namaz"
            className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            src="https://img.freepik.com/free-photo/medium-shot-islamic-woman-lifestyle_23-2151064013.jpg?semt=ais_hybrid&w=740&q=80"
          />
        </div>

        <div className="hidden md:block h-96 w-[2px] bg-[#AF864C] mx-auto rounded-full shadow-[0_0_15px_rgba(175,134,76,0.4)]"></div>

        <div data-aos="fade-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#009966]/10 text-[#009966] text-sm font-semibold mb-4">
            🕌 Essential Worship
          </span>
          <h2 className="text-4xl font-bold text-emerald-800 mb-6">
            The Spiritual Journey of Namaz
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify mb-6">
            Namaz represents the fundamental pillar of Islamic worship, performed five times daily
            as an act of submission to Allah. This spiritual practice strengthens faith, promotes
            discipline, purifies the soul, and maintains constant connection with the Creator.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-4">
              <a href="/namaz-Journey.jpg" download className="bg-[#AF864C] text-white px-8 py-3 rounded-lg hover:bg-[#009966] transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold flex items-center gap-2">
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NamazSection;