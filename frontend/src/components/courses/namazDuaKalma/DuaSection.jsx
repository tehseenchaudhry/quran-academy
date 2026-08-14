import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const DuaSection = () => {
  return (
    <section className="py-16 px-6 lg:px-16 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009966]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#AF864C]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center relative z-10">
        <div data-aos="fade-right" className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#AF864C]/10 text-[#AF864C] text-sm font-semibold">
            🤲 Spiritual Connection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#AF864C] leading-tight">
            The Power of Dua
          </h2>
          <p className="text-[#009966] text-lg leading-relaxed text-justify">
            Dua represents the essence of worship — a personal, heartfelt conversation with Allah. 
            Through sincere supplication, believers acknowledge Allah's power and mercy, strengthening 
            their spiritual connection and finding peace through divine communication.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/dua-guide.jpg" download className="bg-[#AF864C] text-white px-8 py-3 rounded-lg hover:bg-[#009966] transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold flex items-center gap-2">
              <FaDownload /> Download PDF
            </a>
          </div>
        </div>
        
        <div className="hidden md:block w-[3px] h-72 mx-auto rounded-full bg-[#009966] shadow-[0_0_15px_rgba(0,122,85,0.4)]"></div>
        
        <div data-aos="fade-left" className="flex justify-center">
          <img 
            alt="Dua" 
            className="rounded-2xl shadow-2xl w-full h-96 object-cover border-[3px] border-[#009966]/20 hover:scale-[1.02] transition-all duration-500" 
            src="https://www.prayertimes.org/wp-content/uploads/2023/11/The-Best-Gift-You-Can-Give-Someone-is-Dua.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default DuaSection;