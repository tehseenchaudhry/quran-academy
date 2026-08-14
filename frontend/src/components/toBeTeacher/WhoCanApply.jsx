import React from "react";
import {
  FaUserGraduate,
  FaBookOpen,
  FaCheckCircle,
} from "react-icons/fa";

const requirements = [
  {
    id: 1,
    icon: <FaBookOpen />,
    title: "Qualified Quran Teacher",
    desc: "Strong knowledge of the Holy Quran with proper Tajweed and pronunciation. Able to guide students with patience, sincerity, and professionalism.",
  },
  {
    id: 2,
    icon: <FaUserGraduate />,
    title: "Teaching Experience",
    desc: "Previous online or offline teaching experience is preferred. Passionate, responsible, and committed teachers are encouraged to apply.",
  },
];

const WhoCanApply = () => {
  return (
    <section className="py-10 lg:py-16 bg-[#f8f6f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          {/* ✅ Badge - "Teacher Requirements" (Different from Hero) */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className=" hidden lg:flex w-10 h-px bg-gradient-to-r from-transparent to-[#c9a050]"></div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/30 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Teacher Requirements
            </span>
            <div className="hidden lg:flex w-10 h-px bg-gradient-to-l from-transparent to-[#c9a050]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#0a5c3a]">
            Who Can <span className="text-[#c9a050]">Apply?</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            If you have a passion for teaching the Holy Quran and inspiring
            students with authentic Islamic knowledge, we'd love to welcome
            you to our academy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {requirements.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group flex flex-col lg:flex-row items-center gap-6 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-[#c9a050]/10 transition-all duration-1000 relative overflow-hidden"
            >
              {/* Top Border - Shows on Hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#c9a050] transition-all duration-1000 group-hover:w-full"></div>
              
              {/* Bottom Border - Shows on Hover */}
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-[#c9a050] transition-all duration-1000 group-hover:w-full"></div>

              {/* Left Icon */}
              <div className="flex-shrink-0 w-24 h-24 rounded-4xl bg-[#0a5c3a]/10 flex items-center justify-center text-[#0a5c3a] text-4xl transition-all duration-1000 group-hover:scale-90">
                {item.icon}
              </div>

              {/* Right Content */}
              <div className="flex-1">

                <h3 className="text-2xl font-bold text-[#0a5c3a] mb-4 transition-colors duration-1000 group-hover:text-[#c9a050]">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  {item.desc}
                </p>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#c9a050] text-lg" />
                  <span className="text-[#0a5c3a] font-medium transition-colors duration-1000 group-hover:text-[#c9a050]">
                    Professional & Islamic Environment
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhoCanApply;