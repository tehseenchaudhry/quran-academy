import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "aos/dist/aos.css";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Ahmed Al-Misri",
    role: "Senior Quran Tutor",
    img: "/team-img1.jpg",
  },
  {
    id: 2,
    name: "Sister Fatima Khan",
    role: "Tajweed Specialist",
    img: "/team-img2.jpg",
  },
  {
    id: 3,
    name: "Sister Zainab Ali",
    role: "Hifz Instructor",
    img: "/team-img3.jpg",
  },
  {
    id: 4,
    name: "Sheikh Ibrahim Malik",
    role: "Child Learning Expert",
    img: "/team-img4.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="py-10 lg:py-16 bg-[#f8f6f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold uppercase tracking-[3px] text-sm">
            Our Teachers
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-serif font-bold text-[#0a5c3a]">
            Meet Our <span className="text-[#c9a050]">Expert Team</span>
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-[#0a5c3a] to-[#c9a050] rounded-full mx-auto mt-6"></div>

          <p className="max-w-2xl mx-auto mt-3 text-gray-600 leading-8">
            Learn from highly qualified Quran teachers dedicated to helping
            students build a strong connection with the Holy Quran through
            authentic Islamic education.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-12">

          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group text-center transition-all duration-500 hover:-translate-y-3"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >

              {/* Image */}
              <div className="relative mx-auto w-52 h-52 rounded-full border-2 border-[#0a5c3a]/30 p-2 transition-all duration-500 group-hover:border-[#0a5c3a]">

                <div className="relative overflow-hidden rounded-full w-full h-full shadow-xl">

                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#0a5c3a]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full flex items-center justify-center gap-3">

                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white text-[#0a5c3a] flex items-center justify-center hover:bg-[#c9a050] hover:text-white transition"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white text-[#0a5c3a] flex items-center justify-center hover:bg-[#c9a050] hover:text-white transition"
                    >
                      <FaTwitter />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white text-[#0a5c3a] flex items-center justify-center hover:bg-[#c9a050] hover:text-white transition"
                    >
                      <FaLinkedinIn />
                    </a>

                  </div>

                </div>
              </div>

              {/* Name */}
              <h3 className="mt-7 text-2xl font-bold text-[#0a5c3a]">
                {member.name}
              </h3>

              {/* Role Badge */}
              <p className="inline-block mt-3 px-4 py-2 rounded-full bg-[#0a5c3a]/10 text-[#0a5c3a] text-sm font-medium">
                {member.role}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurTeam;